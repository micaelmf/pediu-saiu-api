// src/domain/entities/seeds/UserSeed.ts

import { UserInterface } from '../../interfaces/UserInterface';
import { ulid } from 'ulid';
import { Faker, pt_BR } from '@faker-js/faker';

export function createUserSeed(
  usersNumber: number,
  enterprisesNumber: number
): UserInterface[] {
  const users: UserInterface[] = [];
  const ruleOptions = [
    'administrador',
    'gerente',
    'atendente',
    'preparador',
    'entregador',
  ];

  const faker = new Faker({
    locale: [pt_BR],
  });

  const ulidString = ulid();
  const avatar = `${ulidString}.jpg`;

  const password =
    '$2b$10$e./L/zFAxWk08NpFVWWNieTjzaPX0IrqSpajLJii4/ow05lHcsJ1W';

  users.push({
    uuid: ulidString,
    email: 'micaelmf2@gmail.com',
    password: password || '',
    cellPhone: '+5588996609498',
    avatar: avatar,
    nickname: 'micaelmf',
    role: 'administrador',
    firstName: 'Micael',
    lastName: 'Ferreira',
    enterpriseId: 1,
  });

  for (let i = 0; i < usersNumber; i++) {
    const ulidString = ulid();
    const avatar = `${ulidString}.jpg`;

    const fakeUser: UserInterface = {
      uuid: ulidString,
      email: faker.internet.email(),
      password: password || '',
      avatar: avatar,
      nickname: faker.internet.userName(),
      role: ruleOptions[Math.floor(Math.random() * ruleOptions.length)],
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      enterpriseId: Math.floor(Math.random() * enterprisesNumber) + 1,
    };

    users.push(fakeUser);
  }

  return users;
}
