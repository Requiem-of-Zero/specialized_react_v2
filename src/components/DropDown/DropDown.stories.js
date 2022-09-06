import React from "react";
import DropDown from "./DropDown";
import megaNavData from "./data/model";

export default {
  title: "DropDown",
  component: DropDown,
};

const Template = (args) => <DropDown {...args} />;

export const PrimaryDropDown = Template.bind({});

PrimaryDropDown.args = {
  ...megaNavData,
};
