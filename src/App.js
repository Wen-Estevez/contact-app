import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Create from './views/Create';
import Contacts from './views/Contacts';

export default function App() {
  return (
    <>
      <Routes>
            <Route exact path="/" element={<Home/>}/>             {/*Home*/}
            <Route exact path="/create" element={<Create/>}/>         {/*Crear raza*/}
            <Route exact path="/Contacts" element={<Contacts/>}/>       {/*Razas detalladas*/}
      </Routes>
    </>
  );
}

