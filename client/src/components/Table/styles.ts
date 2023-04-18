import styled from "styled-components";

interface IPropsButton {
  color: string;
  background: string;
}

export const Container = styled.div`
  max-height: 50%;
  width: 100%;
  overflow-y: scroll;
  text-align: center;
`;

export const Content = styled.table`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
export const Thead = styled.thead``;
export const Th = styled.th`
  font-size: 12px;
  padding: 10px;
`;
export const Td = styled.td`
  &.product {
    font-size: 10px;
    max-width: 20px;
  }

  &.quantity {
    display: flex;
    gap: 10px;
  }

  @media (max-width: 945px) {
    font-size: 10px;
  }
`;
export const Tr = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.gray {
    background: var(--bg-primary-gray);
    padding: 15px;
  }

  &.white {
    background-color: var(--bg-container);
    padding: 15px;
  }
`;
export const Tbody = styled.tbody``;

export const Button = styled.button<IPropsButton>`
  width: 20px;
  height: 20px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
