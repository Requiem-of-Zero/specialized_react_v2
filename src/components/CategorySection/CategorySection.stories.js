import React from "react";
import CategorySection from "./CategorySection";
import categorySectionArgs from "./data/model";

export default {
  title: "CategorySection",
  component: CategorySection,
};

const Template = (args) => <CategorySection {...args} />;

export const PrimarySection = Template.bind({});

PrimarySection.args = {
  ...categorySectionArgs,
};
