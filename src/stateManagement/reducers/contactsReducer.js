import {CREATE_CONTACT}from '../actions/contactsActions.js';

//Reducer para los contactos

const INITIAL_STATE = {
    contacts:[]          //Inicializa el almacenamiento de contactos vacio
}

const  contactsReducer = (state=INITIAL_STATE,{type})=>{
    switch  (type){
        case CREATE_CONTACT: return{ 
            ...state,                   //crea un nuevo contacto
           }
        default: return state;
    }
}

export default contactsReducer;