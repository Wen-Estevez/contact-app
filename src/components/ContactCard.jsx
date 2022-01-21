import styled from "styled-components";
import { deleteContact } from "../stateManagement/actions/contactsActions";
import { useDispatch } from "react-redux";

const CardContainer = styled.div`

`;

const TitleText = styled.h1`

`;

const TextStyled = styled.span`

`;      

const ButtonStyled = styled.button`
`;

export default function SearchBar({name,phone,date,location,mail}) { 
    const dispatch = useDispatch();
    
    function onClose(id) {
        dispatch(deleteContact(id));
    }
    return (
        <CardContainer>
            <ButtonStyled onClick={()=>onClose(name)}>X</ButtonStyled>
            <TitleText>{name}</TitleText>
            <TextStyled>{phone}</TextStyled>
            <TextStyled>{date}</TextStyled>
            <TextStyled>{location}</TextStyled>
            <TextStyled>{mail}</TextStyled>
        </CardContainer>    
    )
}
