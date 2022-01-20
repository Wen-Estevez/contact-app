import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './normalize.css';     //Normaliza los estilos
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './stateManagement/store';  //Almacenamiento de los estados

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

