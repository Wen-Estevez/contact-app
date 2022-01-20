import styled from "styled-components";

const ButtonStyled = styled.button`
`;

const HomeStyled = styled.body`
`;

export default function Home() {

    return (
        <HomeStyled>
            <ButtonStyled>Crear Contacto</ButtonStyled>
            <ButtonStyled>Ver Agenda de contactos</ButtonStyled>
        </HomeStyled>
    )
}