export const CREATE_CONTACT = 'CREATE_CONTACT'; 
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const SEARCH_CONTACT_NAME = 'SEARCH_CONTACT_NAME';
export const SEARCH_CONTACT_NUMBER = 'SEARCH_CONTACT_NUMBER';
export const SEARCH_CONTACT_MAIL = 'SEARCH_CONTACT_MAIL';

//Acciones del estado de contactos

export function createContact(contact) {
    return { type: CREATE_CONTACT, payload:contact};
  }
export function deleteContact(name) {
    return { type: DELETE_CONTACT, payload:name};
  }
export function searchByName(name) {
    return { type: SEARCH_CONTACT_NAME, payload:name};
}
export function searchByNumber(number) {
    return { type: SEARCH_CONTACT_NUMBER, payload:number};
}
export function searchByMail(mail) {
    return { type: SEARCH_CONTACT_MAIL, payload:mail};
}
