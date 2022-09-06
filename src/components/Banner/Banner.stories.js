import React from "react";
import Banner from "./Banner";
import bannerData from "./data/model";

export default {
  title: "Banner",
  component: Banner,
};

const Template = (args) => <Banner {...args} />;

export const PrimaryBanner = Template.bind({});

PrimaryBanner.args = {
  ...bannerData,
};
