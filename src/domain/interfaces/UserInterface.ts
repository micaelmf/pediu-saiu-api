import { EnterpriseInterface } from './EnterpriseInterface';

export interface UserInterface {
  id?: number;
  uuid: string;
  email: string;
  avatar?: string;
  cellPhone?: string;
  nickname: string;
  role: string;
  firstName?: string;
  lastName?: string;
  // orders: IOrder[]; // Certifique-se de criar a interface IOrder
  enterprise?: EnterpriseInterface | null; // Certifique-se de criar a interface IEnterprise
  enterpriseId: number;
}
