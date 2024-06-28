import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const contacts = [...Array(6)].map((_, index) => ({
  id: faker.string.uuid(),
  type: sample(['Telegram', 'Phone', 'WhatsApp', 'Email', 'Bird mail', 'Instagram']),
  value: sample(['+79123456789', 'coach@gmail.com', '@truecoach', '@denzelwashington']),
  showInProfile: sample([true, false]),
  notifications: sample([true, false]),
}));
