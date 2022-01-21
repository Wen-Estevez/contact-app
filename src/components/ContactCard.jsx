import styled from "styled-components";
import { deleteContact } from "../stateManagement/actions/contactsActions";
import { useDispatch } from "react-redux";

const CardContainer = styled.div`
margin: 3rem;
backdrop-filter: blur(16px) saturate(131%);
    -webkit-backdrop-filter: blur(16px) saturate(131%);
    background-color: rgba(255, 255, 255, 0.09);
    border-radius: 12px;
    border: 8px double #fff;
    font-family: 'Century Gothic';
    font-size: 18px;
    text-align: center;
    color: #ffffff;
`;

const TitleText = styled.h1`

`;

const TextStyled = styled.span`

`;      

const ButtonStyled = styled.button`
border-radius: 10px;
border: 2px solid #fda9f6;
background: #fff;
color: #fda9f6;
margin-left: 64%;
margin-top: -9%;
font-size: 25px;
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
            <ButtonStyled onClick={()=>onClose(name)}>Eliminar</ButtonStyled>
            <TitleText>Nombre:{name}</TitleText><br></br>
            <TextStyled>Telefono:{phone}</TextStyled><br></br>
            <TextStyled>Fecha de nacimiento:{date}</TextStyled><br></br>
            <TextStyled>Direccion:{location}</TextStyled><br></br>
            <TextStyled>Correo:{mail}</TextStyled><br></br>
            <TextStyled>Edad:{contactAge}</TextStyled>
        </CardContainer>    
    )
}

