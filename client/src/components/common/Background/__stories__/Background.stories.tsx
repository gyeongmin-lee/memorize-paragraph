import { number, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import Background from "../Background";
import { Strike } from "../Strikes";

const stories = storiesOf("Background", module);

stories.add("Background", () => (
  <Background hideStrikeOnMobile={boolean("hideStrikeOnMobile", false)} />
));

stories.add("Strike", () => <Strike width={number("width", 500)} />);
