import styled from "styled-components";

export const CardsGridStyled = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin: 20px 0 20px 0;

  @media screen and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin: 20px 0 20px 0;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin: 20px 0 20px 0;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    margin: 20px 0 20px 0;
  }
`;
