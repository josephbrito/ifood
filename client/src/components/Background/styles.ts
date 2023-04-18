import styled from "styled-components";
import Back from "../../assets/background.png";

export const Container = styled.main`
  background-color: var(--bg-background);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${Back});
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: color;
  background-size: cover;
`;
