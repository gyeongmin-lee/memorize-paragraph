import React, {
  ChangeEventHandler,
  FC,
  InputHTMLAttributes,
  useMemo
} from "react";
import styled from "styled-components";
import { wordTextStyle } from "../../../styles/styles";

interface InputWordProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * The correct value to compare with
   */
  correctValue: string;
  /**
   * The length of the correct word. If not provided, it will be set to `correctValue.length`.
   */
  wordLength?: number;
  /**
   * Function to check two words are equal.
   */
  compareEqualFunction?: (inputValue: string, presetValue: string) => boolean;
  /**
   * user input value for the input field.
   */
  value?: string;
  /**
   * onChange handler for the input field.
   */
  onChange?: ChangeEventHandler;
}

interface StyledInputWordProps {
  isCorrect: boolean;
  wordLength: number;
}

const StyledInputWord = styled.input<StyledInputWordProps>`
  ${wordTextStyle};
  height: ${props => props.theme.lineHeight.default};
  outline: none;
  border: none;
  border-radius: ${props => props.theme.borderRadius.small};
  font-weight: 600;
  box-shadow: ${props => props.theme.boxShadow.inner};
  text-align: center;
  margin-right: 4px;
  margin-bottom: 4px;

  color: ${props =>
    props.isCorrect ? props.theme.color.primary : props.theme.color.secondary};
  width: ${props => props.wordLength * 10}px;
`;

const InputWord: FC<InputWordProps> = ({
  wordLength,
  correctValue,
  compareEqualFunction,
  value,
  onChange,
  ...inputProps
}) => {
  const isCorrect = useMemo(() => {
    return compareEqualFunction
      ? compareEqualFunction(value || "", correctValue)
      : value === correctValue;
  }, [compareEqualFunction, correctValue, value]);

  return (
    <StyledInputWord
      isCorrect={isCorrect}
      value={value}
      wordLength={wordLength || correctValue.length}
      onChange={onChange}
      type="text"
      {...inputProps}
    />
  );
};

export default InputWord;
