import { styled } from "styled-components";

export const CartStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  overflow: hidden;

  .close {
    position: fixed;
    width: 40px;
    height: 40px;
    top: 30px;
    right: 30px;
    font-size: 20px;
  }

  @media screen and (max-width: 1280px) {
    .close {
      width: 35px;
      height: 35px;
      font-size: 18px;
    }
  }
`;

export const Title = styled.h1`
  align-self: self-start;
  color: ${(props) => props.theme.colors.secondary};
  width: 60%;
  padding: 20px 50px 20px 40px;
  font-size: 30px;
  font-weight: 700;

  @media screen and (max-width: 1280px) {
    width: 70%;
    font-size: 25px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 30px;
  color: #fff;
  font-weight: 700;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const ItemsContainer = styled.div`
  flex: 1;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #FFF;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.primary};
  }
`;

export const DoOrder = styled.button`
    width: 100%;
    height: 8%;
    margin-top: 30px;
    font-size: 20px;
    font-weight: 700;
    color: #FFF;
    background-color: #000;
    border-style: none;

    &:hover {
        cursor: pointer;
        filter: invert();
    }
`;