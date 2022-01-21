import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const initialState={ //Estado inicial para los contactos nuevos
    name: "",
    phone: "",
    date: "",
    location: "",
    mail:"",
}

const ButtonStyled = styled.button`
`;

const CreateStyled = styled.body`
    height:100vh;
    padding:1vh;
    align-items: center;
    justify-content:center;
`;
const FormCont = styled.form`             //Estilo contenedor form
    display:grid;
    grid-template-columns:repeat(2,1fr);
    padding:1.6rem;
    backdrop-filter: blur(5px) saturate(60%);
    background-color:red;
    border-radius: 12px;
`;
const MenuL = styled(Link)`      //Estilo link
    text-decoration:none;
    margin:0 auto;
`;
const FormText = styled.input`             //Estilo input textos
    margin:0.5rem;
    border-radius: 25px;
    background: blue;
    border:none;
    color:black;
`;
const FormSubmit = styled.input`             //Estilo input boton
    grid-column: 1/span 2;
    margin:0.5rem;
    border-radius: 25px;
    background: black;
    color: white;
    border:none;
    box-shadow: 4px 4px 9px -4px black;
    width:60%;
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
        
    function hadleInputChange(e) {               //Cuando se digita el input lo guarda en el estado
        setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };
    
    return (
        <CreateStyled>
        <MenuL to="/">
                <ButtonStyled>Volver</ButtonStyled>
            </MenuL>
            <FormCont>
                <FormText name="name" placeholder="Nombre" onChange={hadleInputChange} />
                <FormText name="phone" placeholder="Telefono" onChange={hadleInputChange} />
                <FormText name="date" placeholder="AAAA-MM-DD" onChange={hadleInputChange} />
                <FormText name="location" placeholder="Direccion:" onChange={hadleInputChange} />
                <FormText name="mail" placeholder="Email:" onChange={hadleInputChange} />
                <FormSubmit type="submit" value="Crear contacto"/>
            </FormCont>
        </CreateStyled>
    )
}
