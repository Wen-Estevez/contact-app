import { createStore } from 'redux';
import contactsReducer from './reducers/contactsReducer';   //reducers combinados

//Almacena los estados globales

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(           //Almacenmiento recibe reducers y middleware
    contactsReducer, reduxDevtools
);