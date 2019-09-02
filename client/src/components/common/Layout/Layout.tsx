import React, { FC } from "react";
import styled from "styled-components";

const StyledLayout = styled.div<LayoutProps>`
  max-width: ${props => (props.layoutType === "default" ? 716 : 433)}px;
  width: 100%;
  display: grid;
  grid-gap: ${props => props.theme.spacing.small};
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  margin-top: 120px;
  height: min-content;
  position: relative;
`;

interface LayoutProps {
  /**
   * Type of the layout.
   * @default default
   */
  layoutType?: "default" | "narrow";
}

const Layout: FC<LayoutProps> = ({ children, layoutType = "default" }) => {
  return <StyledLayout layoutType={layoutType}>{children}</StyledLayout>;
};

export default Layout;
