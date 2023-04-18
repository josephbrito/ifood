import React from "react";
import Menu from "../Menu";
import Withdraw from "../Withdraw";

import { Container } from "./styles";

const MainContainer: React.FC = () => {
  return (
    <Container>
      <Menu />
      <Withdraw />
    </Container>
  );
};

export default MainContainer;
