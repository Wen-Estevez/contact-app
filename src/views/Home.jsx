import styled from "styled-components";
import { Link } from 'react-router-dom';

const ButtonStyled = styled.button`
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
            <MenuL to="/Create">
                <ButtonStyled>Crear Contacto</ButtonStyled>
            </MenuL>
            <MenuL to="/Contacts">
                <ButtonStyled>Ver Agenda de contactos</ButtonStyled>
            </MenuL>
        </HomeStyled>
    )
}
