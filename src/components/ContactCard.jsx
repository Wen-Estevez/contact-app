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
    
    function calculateAge(date) {
    var today = new Date();
    var birth = new Date(date);
    var age = today.getFullYear() - birth.getFullYear();
    var m = today.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}
    const contactAge = calculateAge(date);
    
    function onClose(id) {
        dispatch(deleteContact(id));
    }
    return (
        <CardContainer>
            <ButtonStyled onClick={()=>onClose(name)}>X</ButtonStyled>
            <TitleText>Nombre:{name}</TitleText>
            <TextStyled>Telefono:{phone}</TextStyled>
            <TextStyled>Fecha de nacimiento:{date}</TextStyled>
            <TextStyled>Direccion:{location}</TextStyled>
            <TextStyled>Correo:{mail}</TextStyled>
            <TextStyled>Edad:{contactAge}</TextStyled>
        </CardContainer>    
    )
}

}
