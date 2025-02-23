import * as fs from 'node:fs/promises';
import path from 'node:path';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(
      path.resolve(PATH_DB),
      JSON.stringify(updatedContacts, undefined, 2),
    );
  } catch (error) {
    console.error('File writing error:', error);
  }
};
