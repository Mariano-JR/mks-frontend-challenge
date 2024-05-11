import styled from "styled-components";

export const CartItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  margin: 20px 0 20px 45px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 4%;
  background-color: ${(props) => props.theme.colors.secondary};
  width: 80%;
  height: 15vh;
  border-radius: 8px;

  h3 {
    width: 25%;
    font-size: 1.2em;
    font-weight: 700;
  }

  @media screen and (max-width: 1440px) {
    flex-direction: column;
    width: 70%;
    height: 35vh;

    h3 {
      width: 50%;
    }
  }

  @media screen and (max-width: 480px) {
    h3 {
      font-size: 1em;
    }
  }
`;

export const Img = styled.img`
  height: 80%;

  @media screen and (max-width: 1440px) {
    height: 50%;
  }
`;

export const Name = styled.h5`
  width: 20%;
  font-size: 23px;
  font-weight: 400;

  @media screen and (max-width: 1280px) {
    width: 80%;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Qtd = styled.p`
  font-size: 10px;
  font-weight: 400;

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const QtdControll = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  border: 1px solid #bfbfbf;
  border-radius: 8px;
  padding: 5px;
  gap: 1px;

  button {
    width: 20%;
    background-color: #fff;
    border-style: none;
    padding: 3px;
  }

  button:hover {
    cursor: pointer;
  }

  p {
    width: 40%;
    text-align: center;
    border-left: 1px solid #bfbfbf;
    border-right: 1px solid #bfbfbf;
  }

  @media screen and (max-width: 1280px) {
    width: 50%;
    font-size: 15px;

    button {
      width: 10%;
      margin-right: 12px;
    }

    p {
      width: 30%;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 12px
  }
`;

export const Close = styled.button`
    position: relative;
    right: 12px;
    bottom: 12px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border-style: none;
    background-color: #000;
    color: #FFF;

    .x {
        margin: 22%;
    }

    &:hover {
        cursor: pointer;
        filter: brightness(1.2);
    }

    @media screen and (max-width: 1280px) {
      right: 30px;
      top: 5px;
    }
`;

export const DivPrice = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  gap: 20px;

  @media screen and (max-width: 1280px) {
    justify-content: space-evenly;
  }
`;