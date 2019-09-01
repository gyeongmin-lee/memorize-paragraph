import React, { InputHTMLAttributes, FC, ChangeEventHandler } from "react";
import styled from "styled-components";
import { wordTextStyle } from "../../../styles/styles";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * name of the radio field.
   */
  name?: string;
  /**
   * user input value for the input field.
   */
  value?: string;
  /**
   * selected value to determine if the radio is checked.
   */
  selectedValue?: string;
  /**
   * onChange handler for the input field.
   */
  onChange?: ChangeEventHandler;
  /**
   * Label to display besides the radio button.
   */
  label?: string;
}

const RadioWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 4px;
  ${wordTextStyle};
  color: ${props => props.theme.color.fontLight};
  font-weight: 700;
`;

const InputEl = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  /* display on top */
  z-index: 9999;
`;

const RadioCircle = styled.div<{ checked: boolean }>`
  width: 16px;
  height: 16px;
  margin-right: 4px;
  background-color: ${props => props.theme.color.fontLight};
  border-radius: 50%;
  padding: 3px;
  display: inline-table; /* FIX: center child properly when rendering */
  box-sizing: border-box;
  &::after {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: ${props => (props.checked ? "block" : "none")};
    background-color: ${props => props.theme.color.primary};
    box-shadow: ${props => props.theme.boxShadow.blur};
    content: "";
  }
`;

const Radio: FC<RadioProps> = ({
  name,
  value,
  selectedValue,
  onChange,
  label
}) => {
  return (
    <RadioWrapper>
      <InputEl
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        checked={selectedValue === value}
      />
      <RadioCircle checked={selectedValue === value} />
      {label}
    </RadioWrapper>
  );
};

export default Radio;
