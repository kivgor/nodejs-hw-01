import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const result = readContacts();
  return result;
};

console.log(await getAllContacts());
