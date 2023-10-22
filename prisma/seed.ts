import { PrismaClient } from './generated/client';
import { createEnterpriseSeed } from '../src/domain/entities/seeds/EnterpriseSeed';
import { createUserSeed } from '../src/domain/entities/seeds/UserSeed';
import { createPlanSeed } from '../src/domain/entities/seeds/PlanSeed';

const prisma = new PrismaClient();

async function main() {
  const plans = createPlanSeed();
  const enterprises = createEnterpriseSeed(10);
  const users = createUserSeed(enterprises.length * 3, enterprises.length);

  // Insira os registros no banco de dados
  await prisma.plan.createMany({
    data: plans,
  });
  console.log(`Inseridos ${plans.length} registros na tabela Plan.`);

  await prisma.enterprise.createMany({
    data: enterprises,
  });
  console.log(
    `Inseridos ${enterprises.length} registros na tabela Enterprise.`
  );

  await prisma.user.createMany({
    data: users,
  });
  console.log(`Inseridos ${users.length} registros na tabela User.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
