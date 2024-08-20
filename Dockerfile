# Use a imagem oficial do Node.js baseada em Ubuntu
FROM node:20-buster

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Instale o Prisma CLI globalmente
#RUN npm install -g prisma

# Instale o Prisma Client
#RUN npm install npm @prisma/client

# Rodei esse comando manualmente para funcionar, dentro do container
#RUN npm uninstall @prisma/cli

# Copie o restante do código da aplicação
COPY . .

# No container. O comando abaixo não funcionou
#RUN chown -R $USER:$USER node_modules

# Gere o Prisma Client
#RUN npx prisma generate

# Exponha a porta da aplicação
EXPOSE 4000

# Comando para iniciar a aplicação
# CMD ["npm", "start"]
CMD ["npm", "run", "dev"]