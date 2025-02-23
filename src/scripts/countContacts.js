import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  return readContacts();
};

const contacts = await countContacts();
console.log('Number of contacts: ' + contacts.length);
