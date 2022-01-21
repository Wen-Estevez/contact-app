import styled from "styled-components";
import { Link } from 'react-router-dom';
import fondo from '../assets/fondo.gif';

const ButtonStyled = styled.button`
    width: 150px;
    height: 200px;
    margin: 10px;
    -webkit-box-shadow: 8px 8px 15px -6px #011c50;
    -moz-box-shadow: 8px 8px 15px -6px #011c50;
    box-shadow: 8px 8px 15px -6px #011c50;    
    backdrop-filter: blur(2px) saturate(131%);
    -webkit-backdrop-filter: blur(2px) saturate(131%);
    background-color: rgba(255, 255, 255, 0.09);
    border-radius: 12px;
    border: 8px double rgba(255, 255, 255, 0.3);
    font-family: 'Century Gothic';
    font-size: 20px;
    text-align: center;
    color: #ffffff;
    font-weight: bolder;

`;

const HomeStyled = styled.section`
background: url(${fondo}) no-repeat;
width: 206.5vh;
height: 100vh;
grid-template-columns: repeat(2,2fr);
display: grid;
`;

const MenuL = styled(Link)`      //Estilo link
    text-decoration:none;
    margin:0 auto;
    margin-top: 30%;
`

export default function Home() {

    return (
        <HomeStyled>
            <MenuL to="/Create">
                <ButtonStyled>Crear Contacto</ButtonStyled>
            </MenuL>
            <MenuL to="/Contacts">
                <ButtonStyled>Ver Agenda de contactos</ButtonStyled>
            </MenuL>
        </HomeStyled>
    )
}
