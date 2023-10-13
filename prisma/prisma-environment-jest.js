const NodeEnvironment = require("jest-environment-node").TestEnvironment;
const { PrismaClient } = require("./generated/test");
const { execSync } = require("child_process");
const { resolve } = require("path");
const mysql = require("mysql");

require("dotenv").config({
  path: resolve(__dirname, "..", ".env.test"),
});

class CustomEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
    this.schema = `code_schema_${new Date().getTime()}`;
    process.env.TEST_DATABASE_URL = `mysql://root:root@localhost:3306/${this.schema}`;
    this.prisma = new PrismaClient({
      datasources: {
        db: {
          url: process.env.TEST_DATABASE_URL,
        },
      },
    });
  }

  async setup() {
    // Crie um novo banco de dados para o teste
    const dbConnection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
    });

    dbConnection.query(`CREATE DATABASE ${this.schema}`, (err) => {
      if (err) {
        console.error(`Erro ao criar o banco de dados: ${err}`);
      } else {
        // Atualize a URL de conexão do Prisma para se conectar ao novo banco de dados
        this.prisma.$disconnect();
        this.prisma.$connect();
        console.log(`Banco de dados criado: ${this.schema}`);

        // Execute migrações do Prisma
        console.log(`URL de conexão do banco de dados: ${process.env.TEST_DATABASE_URL}`);

        console.log("Executando migrações e criando o banco de dados...");
        execSync(`npx prisma generate --schema=./prisma/schema.test.prisma && npx prisma migrate deploy --schema=./prisma/schema.test.prisma`, {
          stdio: "inherit",
        });
        console.log("Migrações e criação de banco de dados concluídas.");
      }
      dbConnection.end();
    });

    await new Promise((resolve) => {
      // Aguarde a conclusão das operações de configuração
      resolve();
    });
  }

  async teardown() {
    // delete process.env.TEST_DATABASE_URL;
    // Exclua o banco de dados de teste
    const dbConnection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
    });

    dbConnection.query(`DROP DATABASE ${this.schema}`, (err) => {
      if (err) {
        console.error(`Erro ao excluir o banco de dados: ${err}`);
      } else {
        console.log(`Banco de dados excluído: ${this.schema}`);
      }
      dbConnection.end();
    });

    await new Promise((resolve) => {
      // Aguarde a conclusão das operações de limpeza
      resolve();
    });
  }
}

module.exports = CustomEnvironment;
