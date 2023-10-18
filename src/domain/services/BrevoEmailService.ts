import axios from 'axios';
import { config } from 'dotenv';

export class BrevoEmailService {
  private apiKey: any;
  private apiUrl: any;
  public emailTo = [{ email: 'micaelmf@gmail.com' }];

  constructor() {
    config();
    this.apiKey = process.env.BREVO_API_KEY;
    this.apiUrl = process.env.BREVO_API_URL;
  }

  async sendErroEmail(error: any, additionalInfo: any) {
    // Encontre a primeira linha na pilha de chamadas que não se refere a funções internas do Node.js

    const stackLines = error.stack?.split('\n');
    const userCodeLine = stackLines
      ? stackLines.find((line: string) => !line.includes('node_modules'))
      : null;

    const requestData = {
      sender: {
        name: 'Sistema',
        email: 'sistema@pediusaiu.com.br',
      },
      to: this.emailTo.concat(additionalInfo.to),
      subject: `Exception [PediuSaiu] - ${userCodeLine?.trim()}`,
      htmlContent: `
            <html>
                <h1>${userCodeLine?.trim()}</h1>
                <body>
                    <p>${additionalInfo.message}</p>
                    <p>Empresa: ${additionalInfo.enterpriseId || ''}</p>
                    <p>Usuário: ${additionalInfo.userId || ''}</p>
                    <hr>
                    <p>${error.stack.replace(/\n/g, '<br>')}</p>
                </body>
            </html>
        `,
    };

    try {
      const response = await axios.post(this.apiUrl, requestData, {
        headers: {
          accept: 'application/json',
          'api-key': this.apiKey,
          'content-type': 'application/json',
        },
      });

      return response.data;
    } catch (error: any) {
      // TODO: Registrar esses erros no log de texto e seperar em outro serviço como Bugsnag
      if (error) {
        if (error.response) {
          console.error('Erro de resposta:', error.response.data);
        } else if (error.request) {
          console.error('Erro de solicitação:', error.request);
        } else {
          console.error('Erro:', error.message);
        }
        console.log('Erro ao enviar o email');
      } else {
        console.log('Erro não específico: ' + error.message);
      }
    }
  }
}
