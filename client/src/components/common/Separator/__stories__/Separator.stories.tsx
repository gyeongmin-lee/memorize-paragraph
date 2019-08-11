import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import Separator from "../Separator";
import Layout from "../../Layout/Layout";
import Background from "../../Background/Background";

const stories = storiesOf("Separator", module);

stories.add("Separator", () => (
  <Background>
    <Layout>
      <Separator label={text("label", "Or")} />
    </Layout>
  </Background>
));
