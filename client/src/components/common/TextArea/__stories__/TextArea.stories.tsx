import { storiesOf } from "@storybook/react";
import React from "react";
import TextArea from "../TextArea";
import { text, number } from "@storybook/addon-knobs";
import Layout from "../../Layout/Layout";
import Background from "../../Background/Background";

const stories = storiesOf("TextArea", module);

stories.add("TextArea", () => (
  <Background>
    <Layout>
      <TextArea
        placeholder={text("placeholder", "Type something")}
        rows={number("rows", 15)}
      />
    </Layout>
  </Background>
));
