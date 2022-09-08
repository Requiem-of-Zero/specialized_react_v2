import React from 'react';
import SpecialDropDown from './SpecialDropDown';
import specialBannerData from './data/model';

export default {
    title: 'SpecialDropDown',
    component: SpecialDropDown,
}

const Template = (args) => <SpecialDropDown {...args} />;

export const InsideSpecializedDropDown = Template.bind({});

InsideSpecializedDropDown.args = {
    ...specialBannerData
}