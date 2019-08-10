import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import Separator from "../Separator";

const stories = storiesOf("Separator", module);

stories.add("Separator", () => <Separator label={text("label", "Or")} />);
