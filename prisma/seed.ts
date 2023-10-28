import { PrismaClient } from './generated/client';
import { createEnterpriseSeed } from '../src/domain/entities/seeds/EnterpriseSeed';
import { createUserSeed } from '../src/domain/entities/seeds/UserSeed';
import { createPlanSeed } from '../src/domain/entities/seeds/PlanSeed';
import { createCategorySeed } from '../src/domain/entities/seeds/CategorySeed';

const prisma = new PrismaClient();

async function main() {
  const plans = createPlanSeed();
  const enterprises = createEnterpriseSeed(10);
  const users = createUserSeed(enterprises.length * 3, enterprises.length);
  const categories = createCategorySeed();

  // Insira os registros no banco de dados
  await prisma.$transaction([
    prisma.plan.createMany({ data: plans }),
    prisma.enterprise.createMany({ data: enterprises }),
    prisma.user.createMany({ data: users }),
    prisma.category.createMany({ data: categories }),
  ]);

  console.log(`Inseridos ${plans.length} registros na tabela Plan.`);
  console.log(
    `Inseridos ${enterprises.length} registros na tabela Enterprise.`
  );
  console.log(`Inseridos ${users.length} registros na tabela User.`);
  console.log(`Inseridos ${categories.length} registros na tabela Category.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
