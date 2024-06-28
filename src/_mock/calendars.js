import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const calendars = [...Array(1)].map((_, index) => ({
  id: faker.string.uuid(),
  address: '456349537fy.group.calendar@gmail.com',
  name: 'my schedule',
}));
