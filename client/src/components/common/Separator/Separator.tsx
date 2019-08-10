import React, { FC } from "react";
import styled from "styled-components";

interface SeparatorProps {
  /**
   * Label for the separator.
   */
  label: string;
}

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${props => props.theme.color.fontLight};
  box-shadow: ${props => props.theme.boxShadow.blur};
`;

const StyledSeparator = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content 1fr;
  grid-gap: ${props => props.theme.spacing.small};
  align-items: center;
  color: ${props => props.theme.color.fontLight};
  font-family: "Montserrat";
  font-size: ${props => props.theme.fontSize.mid};
  text-shadow: ${props => props.theme.boxShadow.blur};
`;

const Separator: FC<SeparatorProps> = ({ label }) => {
  return (
    <StyledSeparator>
      <Line />
      {label}
      <Line />
    </StyledSeparator>
  );
};

export default Separator;
