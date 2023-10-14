import { EnterpriseInterface } from '../../interfaces/EnterpriseInterface';
import { ulid } from 'ulid';
import { Faker, pt_BR } from '@faker-js/faker';

export function createEnterpriseSeed(
  enterprisesNumber: number
): EnterpriseInterface[] {
  const enterprises: EnterpriseInterface[] = [];
  const statusOptions = ['ativo', 'inativo', 'removido'];

  const faker = new Faker({
    locale: [pt_BR],
  });

  enterprises.push({
    uuid: ulid(),
    name: "Pediu Saiu",
    responsiblePerson: "Micael Maia Ferreira",
    phoneNumber: faker.phone.number('+5588996609498'),
    email: 'micaelmf@gmail.com',
    description: faker.lorem.sentence(),
    status: 'ativo',
  });

  for (let i = 0; i < enterprisesNumber; i++) {
    const fakeEnterprise: EnterpriseInterface = {
      uuid: ulid(),
      name: faker.company.name(),
      responsiblePerson: faker.person.fullName(),
      phoneNumber: faker.phone.number('+55889########'),
      email: faker.internet.email(),
      description: faker.lorem.sentence(),
      status: statusOptions[Math.floor(Math.random() * statusOptions.length)],
    };

    enterprises.push(fakeEnterprise);
  }

  return enterprises;
}
