import styled from "styled-components";

interface IPropsButton {
  border_color?: string;
  background: string;
  color: string;
  disabled?: boolean;
  width?: string;
}

export const Container = styled.div`
  width: 30%;
  position: relative;

  @media (max-width: 945px) {
    display: none;

    &.withdraw_active {
      display: block;
      width: 100%;
    }
  }
`;

export const Header = styled.header`
  margin-top: 26%;
  height: 20%;
  border-top: 1px solid var(--bg-line);
  border-bottom: 1px solid var(--bg-line);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 80%;
    max-height: 100%;
  }

  @media (max-width: 945px) {
    margin: 16%;
    height: 10%;
  }
`;

export const FinishContainer = styled.div`
  height: 128px;
  background-color: var(--bg-container);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const Total = styled.div`
  height: 33%;
  background-color: var(--bg-container);
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--bg-line);

  justify-content: space-around;

  span {
    font-weight: bold;
  }

  .total_money {
    color: var(--money-color);
  }
`;

export const Finish = styled.div`
  height: 67%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Button = styled.button<IPropsButton>`
  border: 1px solid ${(props) => props.border_color};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border-radius: 3px;
  width: ${(props) => (props.width ? props.width : "157.21px")};
  height: 50.81px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;

export const ImageDone = styled.img`
  max-width: 100%;
`;
