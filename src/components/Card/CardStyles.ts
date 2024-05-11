import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 250px;
  min-height: 35vh;
  gap: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
`;

export const Img = styled.img`
  height: 60%;
  width: 80%;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  gap: 2px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
`;

export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #373737;
  width: 100px;
  height: 26px;
  border-radius: 5px;
  padding-inline: 5px;
`;

export const Price = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 15px;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 12px;
  font-weight: 300;
  margin-inline: 10px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  min-height: 35px;
  border-radius: 0 0 10px 10px;
  border-style: none;
  font-size: 14px;
  font-weight: 600;
  gap: 10px;

  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }

  &:active {
    filter: brightness(1);
  }
`;
