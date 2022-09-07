import React from "react";
import FooterSection from './FooterSection';
import footerSectionData from "./data/model";

export default {
    title: 'FooterSection',
    component: FooterSection,
};

const Template = (args) => <FooterSection {...args}/>;

export const PrimaryFooterSection = Template.bind({});

PrimaryFooterSection.args = {
    ...footerSectionData
}