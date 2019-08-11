import React, { FC } from "react";
import styled from "styled-components";

const StyledLayout = styled.div`
  max-width: 716px;
  width: 100%;
  display: grid;
  grid-gap: ${props => props.theme.spacing.small};
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  margin-top: 120px;
  position: relative;
`;

const Layout: FC = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
