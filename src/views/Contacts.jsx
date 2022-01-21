import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import { Link } from 'react-router-dom';
import ContactCard from '../components/ContactCard';
import { useSelector } from "react-redux";
import fondo from '../assets/fondo.gif';

const ButtonStyled = styled.button`
`;

const ContactsStyled = styled.section`
    height:100vh;
    padding:1vh;
    align-items: center;
    justify-content:center;
    background: url(${fondo}) no-repeat;
    width: 206.5vh;
    height: 100vh;
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
const contacts = useSelector(state => state.contacts);
    return (
        <ContactsStyled>
            <SearchBar />
            <MenuL to="/">
                <ButtonStyled>Volver</ButtonStyled>
            </MenuL>
            <ContactListStyled>
                {contacts?.map((contact) => <ContactCard
                    key={contact.name}
                    name={contact.name}
                    phone={contact.phone}
                    date={contact.date}
                    location={contact.location}
                    mail={contact.mail}
                />)}
            </ContactListStyled>
        </ContactsStyled>
    )
}
