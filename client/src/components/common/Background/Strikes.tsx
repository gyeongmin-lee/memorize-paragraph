import React, { FC } from "react";
import styled from "styled-components";

interface Strike {
  width: number;
}

export const Strike = styled.div<Strike>`
  width: ${props => props.width}px;
  height: 8px;
  background-color: ${props => props.theme.color.secondary};
  border-radius: 4px;
`;

const StrikeGroup = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.spacing.small};
  transform: rotate(-15deg);
  justify-items: center;
  grid-auto-rows: min-content;
  position: absolute;
`;

const Strikes: FC<{ className?: string }> = ({ className }) => {
  return (
    <StrikeGroup className={className}>
      <Strike width={550} />
      <Strike width={400} />
      <Strike width={600} />
      <Strike width={550} />
      <Strike width={650} />
      <Strike width={450} />
    </StrikeGroup>
  );
};

export default Strikes;
