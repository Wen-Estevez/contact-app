export const CREATE_CONTACT = 'CREATE_CONTACT';


//Acciones del estado de contactos

export function createContact(contact) {
    return { type: CREATE_CONTACT, payload:contact};
  }
