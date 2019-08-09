import React, { FC } from "react";
import styled from "styled-components";
import Container from "./Container";
import Strikes from "./Strikes";

const LeftStrike = styled(Strikes)`
  left: -300px;
  bottom: 15vh;
`;

const RightStrike = styled(Strikes)`
  right: -300px;
  top: 15vh;
`;

const Background: FC = ({ children }) => {
  return (
    <Container>
      <LeftStrike />
      <RightStrike />
      {children}
    </Container>
  );
};

export default Background;
