import React from "react";

import { Container } from "./styles";

interface IProps {
  children: React.ReactNode;
}

const Background: React.FC<IProps> = ({ children }: IProps) => {
  return <Container>{children}</Container>;
};

export default Background;
