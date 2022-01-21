import styled from "styled-components";
import { Link } from 'react-router-dom';

const TituloStyled = styled.span`
color: #f1c9e4;
text-align: center;
`;
const ButtonStyled = styled.button`
    width: 150px;
    height: 200px;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
    display:block;
    background: #fff;
    border: 1px #f6f6f6 solid;
    border-radius: 20px;
    -webkit-box-shadow: 8px 8px 15px -6px rgba(140,140,140,1);
    -moz-box-shadow: 8px 8px 15px -6px rgba(140,140,140,1);
    box-shadow: 8px 8px 15px -6px rgba(140,140,140,1);

`;

const HomeStyled = styled.body`
`;

const MenuL = styled(Link)`      //Estilo link
    text-decoration:none;
    margin:0 auto;
`;

export default function Home() {

    return (
        <HomeStyled>
            <TituloStyled>Agenda de contactos </TituloStyled>
            <ButtonStyled>Crear Contactos</ButtonStyled>
            <ButtonStyled>Ver Agenda de contactos</ButtonStyled>
            <MenuL to="/Create">
                <ButtonStyled>Crear Contacto</ButtonStyled>
            </MenuL>
            <MenuL to="/Contacts">
                <ButtonStyled>Ver Agenda de contactos</ButtonStyled>
            </MenuL>
        </HomeStyled>
    )
}
