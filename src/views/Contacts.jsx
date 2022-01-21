import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import { Link } from 'react-router-dom';

const ButtonStyled = styled.button`
`;

const ContactsStyled = styled.body`
    height:100vh;
    padding:1vh;
    align-items: center;
    justify-content:center;
`;

const ContactListStyled = styled.section`
    display:grid;
    grid-column: 1/span 2;
    grid-template-columns:repeat(2,1fr);
    justify-items: center;
    overflow:scroll;
    height:60%;

    @media (min-width: 992px) {
        grid-template-columns:repeat(4,1fr);
        overflow:visible;
     }
`;

const MenuL = styled(Link)`      //Estilo link
    text-decoration:none;
    margin:0 auto;
`;

export default function Home() {

    return (
        <ContactsStyled>
            <SearchBar />
            <MenuL to="/">
                <ButtonStyled>Volver</ButtonStyled>
            </MenuL>
            <ContactListStyled>
            </ContactListStyled>
        </ContactsStyled>
    )
}
