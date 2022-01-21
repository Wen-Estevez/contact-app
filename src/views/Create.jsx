import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { createContact } from "../stateManagement/actions/contactsActions";
import fondo from '../assets/fondo.gif';

export const initialState={ //Estado inicial para los contactos nuevos
    name: "",
    phone: "",
    date: "",
    location: "",
    mail:"",
}

const ButtonStyled = styled.button`
 border-radius: 15px;
    background: #fda9f6;
    color: white;
    border:none;
    box-shadow: 4px 4px 9px -4px black;
    width:10%;
    height: 35px;
    justify-self:center;    
    font-family: 'Century Gothic';
    font-size: 20px;
    color: #ffffff;
`;

const CreateStyled = styled.section`
    height:60vh;
    padding:1vh;
    align-items: center;
    justify-content:center;
    background: url(${fondo}) no-repeat;
    width: 204.4vh;
    height: 98vh;
`;
const FormCont = styled.form`             //Estilo contenedor form
    margin-top: 10%;
    margin-left: 10%;
    width:70%;
    display:grid;
    grid-template-columns:repeat(2,1fr);
    padding:1.6rem;-webkit-box-shadow: 8px 8px 15px -6px #011c50;
    -moz-box-shadow: 8px 8px 15px -6px #011c50;
    box-shadow: 8px 8px 15px -6px #011c50;    
    backdrop-filter: blur(2px) saturate(131%);
    -webkit-backdrop-filter: blur(2px) saturate(131%);
    background-color: rgba(255, 255, 255, 0.09);
    border-radius: 12px;
    border: 10px double rgba(255, 255, 255, 0.3);
    font-family: 'Century Gothic';
    font-size: 20px;
    text-align: center;
    color: #ffffff;
    font-weight: bolder;
    
`;
const MenuL = styled(Link)`      //Estilo link
    text-decoration:none;
    margin:0 auto;
`;
const FormText = styled.input`             //Estilo input textos
    margin:1rem;
    height:30px;
    border-radius: 20px;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.09);
    border-radius: 12px;
    border: 10px double rgba(255, 255, 255, 0.3);
    border:none;
    color:black;
`;
const FormSubmit = styled.input`             //Estilo input boton
    grid-column: 1/span 2;
    margin:0.5rem;
    border-radius: 15px;
    background: #fda9f6;
    color: white;
    border:none;
    box-shadow: 4px 4px 9px -4px black;
    width:20%;
    height: 35px;
    justify-self:center;
    @media (min-width: 992px) {
        cursor: pointer;
        &:hover {
            background:black;
            color:white;
            transition:0.5s;
        }
     }
`;

export default function Create() {
    const [input, setInput] = useState(initialState); //Crea el estado que contiene los datos
    const dispatch = useDispatch();
   
    function hadleInputChange(e) {               //Cuando se digita el input lo guarda en el estado
        setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };
    
    function onSubmit(e){                            
        e.preventDefault();
        dispatch(createContact(input));
        e.target.reset();
        }      
 
    
    return (
        <CreateStyled>
        <MenuL to="/">
                <ButtonStyled>Volver</ButtonStyled>
            </MenuL>
            <FormCont onSubmit={onSubmit}>
                <FormText required name="name" placeholder="Nombre" onChange={hadleInputChange} />
                <FormText type="tel" name="phone" placeholder="Telefono" onChange={hadleInputChange} />
                <FormText type="date" name="date" placeholder="AAAA-MM-DD" onChange={hadleInputChange} />
                <FormText name="location" placeholder="Direccion:" onChange={hadleInputChange} />
                <FormText type="email" name="mail" placeholder="Email:" onChange={hadleInputChange} />
                <FormSubmit type="submit" value="Crear contacto"/>
            </FormCont>
        </CreateStyled>
    )
}
