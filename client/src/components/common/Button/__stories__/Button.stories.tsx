import centered from "@storybook/addon-centered/react";
import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "../Button";

const stories = storiesOf("Button", module);

stories.addDecorator(centered);

stories.add("Button", () => (
  <Button
    buttonType={select(
      "buttonType",
      {
        default: "default",
        inverted: "inverted"
      },
      "default"
    )}
    size={select("size", { default: "default", small: "small" }, "default")}
  >
    {text("children", "Check Answer")}
  </Button>
));
