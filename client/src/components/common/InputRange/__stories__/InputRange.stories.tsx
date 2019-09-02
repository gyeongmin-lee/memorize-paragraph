import centered from "@storybook/addon-centered/react";
import { storiesOf } from "@storybook/react";
import React, { FC, useState } from "react";
import InputRange from "../InputRange";
import ParagraphArea from "../../ParagraphArea/ParagraphArea";
import Layout from "../../Layout/Layout";
import Background from "../../Background/Background";
import { number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("InputRange", module);

stories.addDecorator(centered);

const InputRangeComponent: FC = () => {
  const [value, setValue] = useState(20);
  const onChange = (newVal: number) => {
    setValue(newVal);
  };
  return (
    <Background>
      <Layout>
        <ParagraphArea
          header={
            <InputRange
              value={value}
              onChange={onChange}
              step={number("step", 1)}
            />
          }
        >
          sample text
        </ParagraphArea>
      </Layout>
    </Background>
  );
};

const ControlledInputrangeComponent: FC = () => {
  return (
    <Background>
      <Layout>
        <ParagraphArea
          header={
            <InputRange
              value={number("value", 0)}
              onChange={action("onChange")}
              min={number("min", 0)}
              max={number("max", 0)}
            />
          }
        >
          sample text
        </ParagraphArea>
      </Layout>
    </Background>
  );
};

stories.add("InputRange", () => <InputRangeComponent />);

stories.add("Controlled InputRange", () => <ControlledInputrangeComponent />);
