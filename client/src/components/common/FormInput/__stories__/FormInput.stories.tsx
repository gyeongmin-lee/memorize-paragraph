import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React, { ChangeEvent, FC, useState } from "react";
import Background from "../../Background/Background";
import Layout from "../../Layout/Layout";
import FormInput from "../FormInput";

const stories = storiesOf("FormInput", module);

const FormInputComponent: FC<{
  placeholder?: string;
  type: string;
  label: string;
  alert?: string;
}> = ({ placeholder, type, label, alert }) => {
  const [value, setValue] = useState();

  return (
    <FormInput
      value={value}
      placeholder={placeholder}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      type={type}
      label={label}
      alert={alert}
    />
  );
};

stories.add("FormInput", () => (
  <Background>
    <Layout layoutType="narrow">
      <FormInputComponent
        placeholder={text("placeholder", "Input ID here.")}
        type={text("type", "text")}
        label={text("label", "ID")}
        alert={text("alert", "there is an error")}
      />
      <FormInputComponent
        type="email"
        label="Email"
        placeholder="e.g. example@email.com"
      />
      <FormInputComponent type="password" label="Password" />
    </Layout>
  </Background>
));
