import styled from "styled-components";

interface IImage {
  height: string;
  width: string;
}

interface IButton {
  width?: string;
  disabled?: boolean;
}

export const Container = styled.figure`
  width: 160.61px;
  height: 190.61px;
  display: flex;
  flex-direction: column;
  background: #ccc;
  border-radius: 5.37px;
  cursor: pointer;

  @media (max-width: 945px) {
    width: 180px;
    height: 230px;
  }
`;

export const Image = styled.img<IImage>`
  height: ${(props) => props.height};
  max-width: ${(props) => props.width};
`;

export const Caption = styled.figcaption`
  height: 30%;
  background: var(--bg-container);
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 12.5384px;
    font-weight: 700;
    color: var(--text-color);
  }
`;

export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  @media (max-width: 945px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 60%;

  @media (max-width: 945px) {
    width: 100%;
  }
`;

export const ModalData = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  .caption {
    max-width: 270px;
    line-height: 1.4rem;
    font-size: 1.1rem;
    padding: 10px;
    background: var(--bg-secondary-gray);
    font-weight: bold;
  }

  @media (max-width: 945px) {
    width: 100%;
    gap: 15px;
  }
`;

export const ModalCard = styled.div`
  height: 70px;
  width: 80%;
  background: var(--bg-secondary-gray);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .rule {
      padding: 5px;
      font-size: 13px;
      font-weight: bold;
      letter-spacing: 0.5px;
      border-radius: 2px;
      background-color: var(--bg-primary-gray);
    }
  }

  @media (max-width: 945px) {
    .info {
      display: none;
    }

    .options {
      text-align: center;
    }
  }
`;

export const Total = styled.div`
  height: 50px;
  width: 80%;
  border-top: 1px solid var(--bg-line);
  border-bottom: 1px solid var(--bg-line);
  display: flex;
  align-items: center;
  justify-content: space-around;

  span {
    font-weight: bold;
  }

  .total_money {
    color: var(--money-color);
  }
`;

export const Button = styled.button<IButton>`
  border: none;
  color: #ffff;
  height: 56.81px;
  width: ${(props) => props.width || "75%"};
  background: var(--bg-red);
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;
