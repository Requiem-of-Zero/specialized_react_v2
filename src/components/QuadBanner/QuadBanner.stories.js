import React from "react";
import QuadBanner from "./QuadBanner";
import quadBannerData from "./data/model";

export default {
  title: "QuadBanner",
  component: QuadBanner,
};

const Template = (args) => <QuadBanner {...args} />;

export const PrimaryTiles = Template.bind({});

PrimaryTiles.args = {
  ...quadBannerData,
};
