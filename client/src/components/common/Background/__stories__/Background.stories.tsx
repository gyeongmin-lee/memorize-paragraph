import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import Container from "../Background";
import { Strike } from "../Strikes";

const stories = storiesOf("Background", module);

stories.add("Background", () => <Container />);

stories.add("Strike", () => <Strike width={number("width", 500)} />);
