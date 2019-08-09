import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "../Button";

const stories = storiesOf("Button", module);

stories.add("Button", () => <Button>Hello</Button>);
