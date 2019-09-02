import centered from "@storybook/addon-centered/react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import Typography, { TypographyProps } from "../Typography";

const stories = storiesOf("Typography", module);

stories.addDecorator(centered);

stories.add("Typography", () => (
  <Typography
    color={
      select(
        "color",
        ["light", "mid", "dark", "primary", "secondary"],
        "light"
      ) as TypographyProps["color"]
    }
    shadow={boolean("shadow", true)}
    size={
      select(
        "size",
        ["default", "large", "mid"],
        "default"
      ) as TypographyProps["size"]
    }
  >
    {text("children", "sample text")}
  </Typography>
));

stories.add("Typography with span", () => (
  <>
    <Typography>
      I want to put{" "}
      <Typography as="span" color="secondary">
        Emphasis{" "}
      </Typography>{" "}
      on this text
    </Typography>
  </>
));
