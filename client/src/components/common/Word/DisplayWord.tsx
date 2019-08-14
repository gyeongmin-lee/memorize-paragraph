import React, { FC } from "react";
import styled from "styled-components";
import { wordTextStyle } from "../../../styles/styles";

interface DisplayWordProps {
  /**
   * Displayed if not blanked. If blanked, the length determines the width.
   */
  displayValue: string;
}

const SpanWord = styled.span`
  ${wordTextStyle};
  color: ${props => props.theme.color.fontLight};
`;

const DisplayWord: FC<DisplayWordProps> = ({ displayValue }) => {
  return <SpanWord>{displayValue + " "}</SpanWord>;
};

export default DisplayWord;
