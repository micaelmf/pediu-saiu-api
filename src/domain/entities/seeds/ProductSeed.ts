// src/domain/entities/seeds/ProductSeed.ts

import { ulid } from 'ulid';
import { Faker, pt_BR } from '@faker-js/faker';
import { ProductInterface } from '../../interfaces/ProductInterface';

export function createProductSeed(
  productsNumber: number,
  enterprisesNumber: number,
  categoriesNumber: number
): ProductInterface[] {
  const products: ProductInterface[] = [];
  const statusOptions = ['visible', 'invisible', 'deleted'];
  const typeOptions = ['product', 'additional', 'accompaniment'];
  const faker = new Faker({
    locale: [pt_BR],
  });

  for (let i = 0; i < productsNumber; i++) {
    const fakeProduct: ProductInterface = {
      uuid: ulid(),
      name: faker.airline.seat(),
      description: faker.lorem.sentence(10),
      type: typeOptions[Math.floor(Math.random() * typeOptions.length)],
      price: faker.datatype.float({ min: 1, max: 100, precision: 2 }),
      free: faker.datatype.boolean(),
      status: statusOptions[Math.floor(Math.random() * statusOptions.length)],
      additionalsMax: faker.datatype.number({ min: 0, max: 10 }),
      accompanimentsMax: faker.datatype.number({ min: 0, max: 10 }),
      categoryId: faker.datatype.number({ min: 0, max: categoriesNumber }),
      enterpriseId: faker.datatype.number({ min: 0, max: enterprisesNumber }),
    };

    products.push(fakeProduct);
  }

  return products;
}
