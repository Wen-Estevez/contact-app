export const CREATE_CONTACT = 'CREATE_CONTACT'; 
export const DELETE_CONTACT = 'DELETE_CONTACT';


//Acciones del estado de contactos

export function createContact(contact) {
    return { type: CREATE_CONTACT, payload:contact};
  }
export function deleteContact(name) {
    return { type: DELETE_CONTACT, payload:name};
  }
