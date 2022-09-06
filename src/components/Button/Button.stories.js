import React from "react";
import Button from "./Button";
import buttonData from "./data/model";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const PrimaryBtn = Template.bind({});

PrimaryBtn.args = {
  ...buttonData,
};


PrimaryBtn.parameters = {
  backgrounds: {
    values: [
      { name: "transparent", value: "transparent" },
      { name: "white", value: "#FFF" },
    ],
  },
};