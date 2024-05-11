import { styled } from "styled-components";

export const CartButtonStyled = styled.div`
  .cart {
    width: 35vw;
    box-shadow: 0px 2px 8px 8px rgba(0, 0, 0, 0.14);
  }

  @media screen and (max-width: 1280px) {
    .cart {
        width: 50vw;
    }
  }

  @media screen and (max-width: 768px) {
    .cart {
        width: 65vw;
    }
  }

  @media screen and (max-width: 480px) {
    .cart {
        width: 80vw;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 3vw;
  background-color: ${(props) => props.theme.colors.secondary};
  width: 90px;
  height: 45px;
  border-radius: 8px;
  border-style: none;
  font-size: 18px;
  font-weight: 700;
  position: fixed;
  right: 0;
  top: 2.5vh;

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }

  &:active {
    filter: brightness(1);
  }
`;