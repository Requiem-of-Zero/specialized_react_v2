import React from "react";
import Banner from "./Banner";
import {firstBannerArgs, secondBannerArgs} from "./data/model";

export default {
  title: "Banner",
  component: Banner,
};

const Template = (args) => <Banner {...args} />;

export const PrimaryBanner = Template.bind({});

export const SecondaryBanner = Template.bind({});

PrimaryBanner.args = {
  ...firstBannerArgs,
};


SecondaryBanner.args = {
  ...secondBannerArgs
}
