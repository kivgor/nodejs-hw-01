import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  let newContacts = [];
  readContacts().then((contacts) => {
    newContacts = contacts.slice(0, contacts.length - 1);
    writeContacts(newContacts);
  });
};

removeLastContact();
console.log('Last contact was removed');
