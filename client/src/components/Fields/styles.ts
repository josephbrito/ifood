import styled from "styled-components";

interface IInput {
  width?: string;
}

export const Container = styled.form`
  margin-top: 50px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--bg-line);
`;

export const DeliveryWayContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 20px 0;
`;

export const Label = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: var(--text-color);
`;

export const Select = styled.select<IInput>`
  padding: 15px;
  border: none;
  border: 1px solid var(--bg-line);
  outline: none;
  border-radius: 2px;
  color: var(--text-color);
`;
export const Option = styled.option``;

export const Local = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CepContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33%;
  gap: 8px;
`;

export const Input = styled.input<IInput>`
  color: var(--text-color);
  padding: 15px;
  border: none;
  border: 1px solid var(--bg-line);
  border-radius: 2px;
  width: ${(props) => props.width};
`;

export const NeighborhoodContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  width: 60%;
`;

export const LocalCity = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33%;
  gap: 8px;
`;

export const CityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  gap: 8px;
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
