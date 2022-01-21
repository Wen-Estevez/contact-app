import styled from "styled-components";

const CardContainer = styled.div`

`;

const TitleText = styled.h1`

`;

const TextStyled = styled.span`

`;      
export default function SearchBar({name,phone,date,location,mail}) { 
    
    return (
        <CardContainer>
            <TitleText>{name}</TitleText>
            <TextStyled>{phone}</TextStyled>
            <TextStyled>{date}</TextStyled>
            <TextStyled>{location}</TextStyled>
            <TextStyled>{mail}</TextStyled>
        </CardContainer>    
    )
}
