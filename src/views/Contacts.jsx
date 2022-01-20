import styled from "styled-components";

const SearchBar = styled.input`
`;

const ButtonStyled = styled.button`
`;

const ContactsStyled = styled.body`
`;

const ContactListStyled = styled.section`
`;

export default function Home() {

    return (
        <ContactsStyled>
            <SearchBar type="text"></SearchBar>
            <ButtonStyled>Volver</ButtonStyled>
            <ContactListStyled>
            </ContactListStyled>
        </ContactsStyled>
    )
}