import React, { FC, InputHTMLAttributes, ChangeEventHandler } from "react";
import styled from "styled-components";
import { wordTextStyle, fontPrimary } from "../../../styles/styles";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * user input value for the input field.
   */
  value?: string;
  /**
   * onChange handler for the input field.
   */
  onChange?: ChangeEventHandler;
  /**
   * Label for the input element
   */
  label: string;
  /**
   * Alert message to display when input is invalid.
   */
  alert?: string;
}

const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const StyledFormInput = styled.input<{ alert?: string }>`
  ${wordTextStyle}
  color: ${props => props.theme.color.fontDark};
  box-shadow: ${props => props.theme.boxShadow.default};
  border-radius: ${props => props.theme.borderRadius.small};
  padding: 4px;
  outline: none;
  resize: none;
  border: ${props =>
    Boolean(props.alert) ? `1px solid ${props.theme.color.secondary}` : "none"};
  ::placeholder {
    color: ${props => props.theme.color.fontMid};
  }
`;

const Label = styled.h2`
  ${fontPrimary};
  font-size: ${props => props.theme.fontSize.default};
  text-shadow: ${props => props.theme.boxShadow.blur};
  line-height: 1em;
  color: ${props => props.theme.color.fontLight};
  font-weight: 400;
  margin: 0 0 6px 0;
`;

const Alert = styled.p`
  ${fontPrimary};
  font-size: ${props => props.theme.fontSize.default};
  text-shadow: ${props => props.theme.boxShadow.blur};
  line-height: 1em;
  color: ${props => props.theme.color.secondary};
  font-weight: 400;
  height: 1em;
  margin: 4px 0 -10px 0;
`;

const FormInput: FC<FormInputProps> = ({
  value,
  onChange,
  label,
  alert,
  ...inputProps
}) => {
  return (
    <FormInputWrapper>
      <Label>{label}</Label>
      <StyledFormInput
        alert={alert}
        value={value}
        onChange={onChange}
        {...inputProps}
      />
      <Alert>{alert}</Alert>
    </FormInputWrapper>
  );
};

export default FormInput;
