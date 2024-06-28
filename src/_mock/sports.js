import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const sports = [...Array(4)].map((_, index) => ({
  id: faker.string.uuid(),
  sport: sample(['Snowboard', 'Ski', 'Beerpong', 'Couch Lazing', 'Rolling', 'Skating']),
  qualification: sample(['Pro', 'Master', 'Master of Sport of the USSR', 'Guru']),
}));
