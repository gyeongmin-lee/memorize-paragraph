import React, { FC, TextareaHTMLAttributes } from "react";
import styled from "styled-components";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextAreaWrapper = styled.div`
  max-width: 716px;
  border-radius: ${props => props.theme.borderRadius.default};
  padding: ${props => props.theme.spacing.small};
  border: 4px solid ${props => props.theme.color.secondary};
  background-color: ${props => props.theme.color.fontLight};
  display: flex;
`;

const StyledTextArea = styled.textarea`
  font-family: "Montserrat";
  font-size: ${props => props.theme.fontSize.default};
  background-color: inherit;
  flex: 1 1 auto;
  border: none;
  outline: none;
  resize: none;
  ::placeholder {
    color: ${props => props.theme.color.fontMid};
  }
`;

const TextArea: FC<TextAreaProps> = ({ ...textAreaProps }) => {
  return (
    <TextAreaWrapper>
      <StyledTextArea {...textAreaProps} />
    </TextAreaWrapper>
  );
};

export default TextArea;
