import React from "react";
import DropDown from "./DropDown";
import SpecialDropDown from "../SpecializedDropDown/SpecialDropDown";
import specialBannerData from "../SpecializedDropDown/data/model";
import megaNavData from "./data/model";

export default {
  title: "DropDown",
  component: DropDown,
};

const Template = (args) => <DropDown {...args} />;
const SecondTemplate = (args) => <SpecialDropDown {...args}/>

export const PrimaryDropDown = Template.bind({});
export const SecondDropDown = SecondTemplate.bind({});

PrimaryDropDown.args = {
  ...megaNavData,
};

SecondDropDown.args = {
  ...specialBannerData
}
