import React from "react";
import ShopTiles from "./ShopTiles";
import shopTilesArgs from "./data/model";

export default {
  title: "ShopTiles",
  component: ShopTiles,
};

const Template = (args) => <ShopTiles {...args} />;

export const PrimaryTiles = Template.bind({});

PrimaryTiles.args = {
  ...shopTilesArgs
};
