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

  users.push({
    uuid: ulidString,
    email: 'micaelmf2@gmail.com',
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
