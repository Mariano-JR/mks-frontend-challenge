import styled from "styled-components"

export const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.footer};
    width: 100vw;
    height: 34px;
`;