import React from "react";
import DropDown from "./DropDown";
import navBarData from "../NavBar/data/model";

export default {
  title: "DropDown",
  component: DropDown,
};

const Template = (args) => <DropDown {...args} />;

export const PrimaryDropDown = Template.bind({});

PrimaryDropDown.args = {
  ...navBarData.megaNav,
};
