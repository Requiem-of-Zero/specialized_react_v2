import React from "react";
import Banner from "./Banner";
import {firstBannerArgs} from "./data/model";

export default {
  title: "Banner",
  component: Banner,
};

const Template = (args) => <Banner {...args} />;

export const PrimaryBanner = Template.bind({});

PrimaryBanner.args = {
  ...firstBannerArgs,
};
