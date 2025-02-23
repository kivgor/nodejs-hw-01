import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  readContacts().then((contacts) => {
    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }
    writeContacts(contacts);
  });
};
const numberToGenerate = 5;
generateContacts(numberToGenerate);
console.log('Added number of contacts: ' + numberToGenerate);
