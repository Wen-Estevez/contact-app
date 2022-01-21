import styled from "styled-components";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { searchByName } from '../stateManagement/actions/contactsActions';
import { useDispatch } from "react-redux";
//Formulario de busqueda

const SubmitButton = styled.input`    //Boton buscar
  width: 7rem;
  height: 2.1rem;
  right:0.5rem;
  border-radius: 0px 15px 15px 0px;
  color: #000;
  background: #fff;
  opacity: 0.7;
  border: #fff 1px solid ;
  font-weight: lighter;
  font-family: "century gothic";

    &:hover{ 
        background: #010125;
        color: #fff;
    }
`;

const TextSearch = styled.input`      //Barra de busqueda
  width:50%;
  height: 1.5rem;
  padding:0.25rem 2rem 0.25rem 0.25rem;
  border: #fff 1px solid;
  opacity: 0.6;
  font-family: "century gothic";

    @media (min-width:576px){                            //responsive para escritorio
        width:60%;
        padding:0.25rem 4rem 0.25rem 0.25rem;
    }
`;
const ButtonStyled = styled.button`    //Boton volver
  width: 7rem;
  height: 2.1rem;
  right:0.5rem;
  margin-left: 6%;
  border-radius: 15px 0px 0px 15px;
  color: #000;
  background: #fff;
  opacity: 0.7;
  border: #fff 1px solid ;
  font-weight: lighter;
  font-family: "century gothic";

    &:hover{ 
        background: #010125;
        color: #fff;
    }
`;
const MenuL = styled(Link)`      //Estilo link
    text-decoration:none;
    margin:0 auto;
`;

export default function SearchBar() {
  const dispatch = useDispatch();
  const [contact, setContact] = useState(""); 
  
  function search(e) {
    e.preventDefault();
    dispatch(searchByName(contact));
  }
  
      return (
        <form onSubmit={(e) => {search(e)}}>
            <MenuL to="/">
                <ButtonStyled>Volver</ButtonStyled>
            </MenuL>
          <TextSearch
            onChange={(e) => {      //Cuando cambia el valor guarda el valor en el estado
                      e.preventDefault();
                      setContact(e.target.value);
            }}
            type="text"
            placeholder="Buscar contactos"
          />
          <SubmitButton type="submit" value="Ver"/> 
        </form>
      );
    }
