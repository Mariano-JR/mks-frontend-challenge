import styled from "styled-components";

export const MainPageStyled = styled.div`
    font-family: ${props => props.theme.fonts.main};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;