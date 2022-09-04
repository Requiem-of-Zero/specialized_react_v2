import React from 'react';
import NavBar from './NavBar';
import navBarData from './data/model';

export default {
    title: 'NavBar',
    component: NavBar,
};

const Template = (args) => <NavBar {...args} />;

export const PrimaryNav = Template.bind({});

PrimaryNav.args = {
    ...navBarData
};