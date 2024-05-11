import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 101px;
  position: fixed;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3vw;
  color: ${(props) => props.theme.colors.secondary};
  gap: 10px;
`;
