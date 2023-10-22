// src/domain/entities/seeds/PlanSeed.ts

import { ulid } from 'ulid';
import { Faker, pt_BR } from '@faker-js/faker';
import { PlanInterface } from '../../interfaces/PlanInterface';

export function createPlanSeed(): PlanInterface[] {
  const faker = new Faker({
    locale: [pt_BR],
  });

  const planData = [
    {
      name: 'Grátis',
      description: faker.lorem.sentence(10),
      price: 0,
      contractPeriod: 3,
    },
    {
      name: 'Básico',
      description: faker.lorem.sentence(10),
      price: 27.9,
      contractPeriod: 1,
    },
    {
      name: 'Intermediário',
      description: faker.lorem.sentence(10),
      price: 127.9,
      contractPeriod: 1,
    },
    {
      name: 'Avançado',
      description: faker.lorem.sentence(10),
      price: 227.9,
      contractPeriod: 1,
    },
    {
      name: 'Personalizado',
      description: faker.lorem.sentence(10),
      price: 227.9,
      contractPeriod: 1,
    },
  ];

  const plans: PlanInterface[] = planData.map((plan) => ({
    uuid: ulid(),
    ...plan,
  }));

  return plans;
}
