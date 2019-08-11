import React, { FC, TextareaHTMLAttributes } from "react";
import styled from "styled-components";
import { fontPrimary } from "../../../styles/styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Text to display at the bottom right of the text area.
   */
  helpText?: string;
}

const TextAreaWrapper = styled.div`
  max-width: 716px;
  border-radius: ${props => props.theme.borderRadius.default};
  padding: ${props => props.theme.spacing.small};
  border: 4px solid ${props => props.theme.color.secondary};
  background-color: ${props => props.theme.color.fontLight};
  display: flex;
  position: relative;
  box-shadow: ${props => props.theme.boxShadow.default};
`;

const StyledTextArea = styled.textarea`
  ${fontPrimary}
  font-size: ${props => props.theme.fontSize.default};
  background-color: inherit;
  flex: 1 1 auto;
  border: none;
  outline: none;
  resize: none;
  color: ${props => props.theme.color.fontDark};
  ::placeholder {
    color: ${props => props.theme.color.fontMid};
  }
`;

const HelpText = styled.span`
  ${fontPrimary}
  color: ${props => props.theme.color.fontMid};
  font-size: ${props => props.theme.fontSize.default};
  position: absolute;
  bottom: 8px;
  right: 8px;
`;

const TextArea: FC<TextAreaProps> = ({ helpText, ...textAreaProps }) => {
  return (
    <TextAreaWrapper>
      <StyledTextArea {...textAreaProps} />
      {helpText ? <HelpText>{helpText}</HelpText> : null}
    </TextAreaWrapper>
  );
};

export default TextArea;
