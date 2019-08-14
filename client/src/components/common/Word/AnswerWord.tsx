import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { wordTextStyle } from "../../../styles/styles";

interface AnswerWordProps {
  /**
   * user input value to compare
   */
  userInputWord?: string;
  /**
   * The correct word to display
   */
  answerWord: string;
  /**
   * Function to check two words are equal.
   */
  compareEqualFunction?: (inputValue: string, presetValue: string) => boolean;
}

const WordWrapper = styled.span<{ isCorrect: boolean }>`
  /* display: inline; */
  position: relative;
  ${wordTextStyle};
  margin-right: 4px;
  display: inline-block;
  &::after {
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background-color: ${props =>
      props.isCorrect
        ? props.theme.color.fontLight
        : props.theme.color.secondary};
    position: absolute;
    bottom: -2px;
    right: 0;
    content: "";
    box-shadow: ${props => props.theme.boxShadow.blur};
  }
`;

const Answer = styled.span<{ isCorrect: boolean }>`
  color: ${props =>
    props.isCorrect
      ? props.theme.color.fontLight
      : props.theme.color.secondary};
`;

const CrossedWord = styled.span`
  color: ${props => props.theme.color.fontLight};
  text-decoration: line-through;
`;

const AnswerWord: FC<AnswerWordProps> = ({
  userInputWord,
  answerWord,
  compareEqualFunction
}) => {
  const isCorrect = useMemo(() => {
    return compareEqualFunction
      ? compareEqualFunction(userInputWord || "", answerWord)
      : userInputWord === answerWord;
  }, [compareEqualFunction, userInputWord, answerWord]);

  return (
    <WordWrapper isCorrect={isCorrect}>
      {!isCorrect && userInputWord ? (
        <CrossedWord>{userInputWord}</CrossedWord>
      ) : null}
      <Answer isCorrect={isCorrect}>{answerWord}</Answer>
    </WordWrapper>
  );
};

export default AnswerWord;
