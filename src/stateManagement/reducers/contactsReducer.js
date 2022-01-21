import {CREATE_CONTACT,DELETE_CONTACT}from '../actions/contactsActions.js';

//Reducer para los contactos

const INITIAL_STATE = {
    contacts:[]          //Inicializa el almacenamiento de contactos vacio
}

const  contactsReducer = (state=INITIAL_STATE,{type,payload})=>{
    switch  (type){
        case CREATE_CONTACT: return{ 
            ...state,                   //crea un nuevo contacto
            contacts: state.contacts.concat(payload)
        }
        case DELETE_CONTACT: return{ 
            ...state,                   //crea un nuevo contacto
            contacts: state.contacts.filter(contact => contact.name !== payload)
           }
        default: return state;
    }
}

export default contactsReducer;
