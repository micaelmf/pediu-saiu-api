import { PrismaClient } from '../prisma/generated/test';
import { execSync } from 'child_process';
const mysql = require('mysql');

const schema = process.env.TEST_DATABASE_NAME;
const prisma = new PrismaClient();

async function setupTestEnvironment() {
  const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
  });

  dbConnection.query(`CREATE DATABASE IF NOT EXISTS ${schema}`, (err: any) => {
    if (err) {
      console.error(`Erro ao criar o banco de dados: ${err}`);
    } else {
      prisma.$disconnect();
      prisma.$connect();

      execSync(
        `npx prisma migrate deploy --schema=./prisma/schema.test.prisma`
      );
    }
    dbConnection.end();
  });
}

async function teardownTestEnvironment() {
  const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
  });

  dbConnection.query(`DROP DATABASE IF EXISTS ${schema}`, (err: any) => {
    if (err) {
      console.error(`Erro ao excluir o banco de dados: ${err}`);
    }
    dbConnection.end();
  });
}

export { setupTestEnvironment, teardownTestEnvironment };
