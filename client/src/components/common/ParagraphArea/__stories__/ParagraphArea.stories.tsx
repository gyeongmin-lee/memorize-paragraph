import { storiesOf } from "@storybook/react";
import React from "react";
import Background from "../../Background/Background";
import Layout from "../../Layout/Layout";
import ParagraphArea from "../ParagraphArea";
import { text } from "@storybook/addon-knobs";

const stories = storiesOf("ParagraphArea", module);

stories.add("ParagraphArea", () => (
  <Background>
    <Layout>
      <ParagraphArea header={text("header", "Header text")}>
        {text("children", "This is a children")}
      </ParagraphArea>
    </Layout>
  </Background>
));
