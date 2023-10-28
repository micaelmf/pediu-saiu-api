// src/domain/entities/seeds/CategorySeed.ts

import { ulid } from 'ulid';
import { Faker, pt_BR } from '@faker-js/faker';
import { CategoryInterface } from '../../interfaces/CategoryInterface';

export function createCategorySeed(): CategoryInterface[] {
  const faker = new Faker({
    locale: [pt_BR],
  });

  const categoryData = [
    {
      name: 'Burgers',
      description: faker.lorem.sentence(10),
    },
    {
      name: 'Combos',
      description: faker.lorem.sentence(10),
    },
    {
      name: 'Adicionais',
      description: faker.lorem.sentence(10),
    },
    {
      name: 'Acompanhamentos',
      description: faker.lorem.sentence(10),
    },
    {
      name: 'Bebidas',
      description: faker.lorem.sentence(10),
    },
  ];

  const categories: CategoryInterface[] = categoryData.map((category, index) => ({
    uuid: ulid(),
    enterpriseId: index + 1,
    ...category,
  }));

  return categories;
}
