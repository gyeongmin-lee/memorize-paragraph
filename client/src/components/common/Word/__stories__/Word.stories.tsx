import centered from "@storybook/addon-centered/react";
import { text, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React, { ChangeEvent, FC, useState } from "react";
import DisplayWord from "../DisplayWord";
import InputWord from "../InputWord";
import ParagraphDemoComponent from "./ParagraphDemoComponent";
import AnswerWord from "../AnswerWord";

const stories = storiesOf("Word", module);

stories.addDecorator(centered);

stories.add("DisplayWord", () => (
  <ParagraphDemoComponent>
    <DisplayWord displayValue={text("displayValue", "Single")} />
    <DisplayWord displayValue={text("displayValue2", "Word")} />
  </ParagraphDemoComponent>
));

const InputWordComponent: FC<{ wordLength?: number }> = ({ wordLength }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const lowercaseEqual = (val1: string, val2: string) => {
    return val1.toLocaleLowerCase() === val2.toLocaleLowerCase();
  };

  return (
    <ParagraphDemoComponent>
      <InputWord
        wordLength={wordLength}
        value={value}
        compareEqualFunction={lowercaseEqual}
        onChange={handleChange}
        correctValue={text("correctValue", "message")}
      />
    </ParagraphDemoComponent>
  );
};

stories.add("InputWord", () => <InputWordComponent />);

stories.add("InputWord with controlled width", () => (
  <InputWordComponent wordLength={number("wordLength", 15)} />
));

stories.add("AnswerWord", () => (
  <ParagraphDemoComponent>
    <AnswerWord
      userInputWord={text("userInputWord", "")}
      answerWord={text("answerWord", "message")}
    />
    <AnswerWord
      userInputWord={text("userInputWord2", "word")}
      answerWord={text("answerWord2", "word")}
    />
  </ParagraphDemoComponent>
));
