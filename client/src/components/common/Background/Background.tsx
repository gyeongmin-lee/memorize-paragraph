import React, { FC } from "react";
import styled from "styled-components";
import Strikes from "./Strikes";
import { device } from "../../../styles/breakpoints";

interface BackgroundProps {
  /**
   * Do not display strikes on mobile
   */
  hideStrikeOnMobile?: boolean;
}

const Container = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  padding: ${props => props.theme.spacing.small};

  overflow-x: hidden;
  overflow-y: auto;

  background: ${props => props.theme.color.primary};
  border-top: 4px solid ${props => props.theme.color.secondary};
  border-bottom: 4px solid ${props => props.theme.color.secondary};
`;

const LeftStrike = styled(Strikes)`
  left: -300px;
  bottom: 14vh;
`;

const RightStrike = styled(Strikes)`
  right: -300px;
  top: 14vh;
`;

const MobileWrapper = styled.div<{ hideStrikeOnMobile?: boolean }>`
  display: ${props => (props.hideStrikeOnMobile ? "none" : "contents")};
  @media ${device.tabletUp} {
    display: contents;
  }
`;

const Background: FC<BackgroundProps> = ({ children, hideStrikeOnMobile }) => {
  return (
    <Container>
      <MobileWrapper hideStrikeOnMobile={hideStrikeOnMobile}>
        <LeftStrike />
        <RightStrike />
      </MobileWrapper>
      {children}
    </Container>
  );
};

export default Background;
