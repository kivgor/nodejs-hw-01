import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  readContacts().then((contacts) => {
    contacts.push(createFakeContact());
    writeContacts(contacts);
  });
};

addOneContact();
console.log('One contact was added');
