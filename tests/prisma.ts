// prisma.ts
import { PrismaClient } from '../prisma/generated/test';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.TEST_DATABASE_URL,
    },
  },
});

export default prisma;
