import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React, { FC, useState } from "react";
import Background from "../../Background/Background";
import Layout from "../../Layout/Layout";
import ParagraphArea from "../../ParagraphArea/ParagraphArea";
import Radio from "../Radio";
import centered from "@storybook/addon-centered/react";

const stories = storiesOf("Radio", module);

const RadioGroup: FC<{ name: string; defaultValue?: string }> = ({
  name,
  defaultValue
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Radio
        name={name}
        value="hello"
        selectedValue={value}
        onChange={handleChange}
        label="hello"
      />
      <Radio
        name={name}
        value="hello2"
        selectedValue={value}
        onChange={handleChange}
        label="hello2"
      />
      <Radio
        name={name}
        value="hello3"
        selectedValue={value}
        onChange={handleChange}
        label="hello3"
      />
      <Radio
        name={name}
        value="hello4"
        selectedValue={value}
        onChange={handleChange}
        label="hello4"
      />
    </>
  );
};

stories.add("Radio group", () => (
  <Background>
    <Layout>
      <ParagraphArea header={<RadioGroup defaultValue="hello" name="name" />}>
        sample text
      </ParagraphArea>
    </Layout>
  </Background>
));

stories
  .add("Radio", () => {
    return (
      <Radio
        name={text("name", "radio")}
        value={text("value", "radio")}
        selectedValue={text("selectedValue", "radio")}
        label={text("label", "radio el")}
        onChange={action("onChange")}
      />
    );
  })
  .addDecorator(centered);
