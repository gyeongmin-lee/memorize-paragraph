import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "../Button";
import { text, select } from "@storybook/addon-knobs";

const stories = storiesOf("Button", module);

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
