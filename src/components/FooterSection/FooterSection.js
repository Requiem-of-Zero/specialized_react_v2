import React from "react";
import {
  FooterSectionWrapper,
  FooterSectionContentContainer,
  FooterSectionHeaderLink,
  FooterList,
  FooterLink
} from "./FooterSection.styles";
const FooterSection = (section) => {

  return (
    <FooterSectionWrapper>
      <FooterSectionContentContainer>
        <FooterSectionHeaderLink>
          {section.sectionTitle}
        </FooterSectionHeaderLink>
        <FooterList>
          {section.sectionLinks.map((link, i) => {
            const key = "footer_link-" + i;
            return (
              <li>
                <FooterLink href={link.url} key={key}>{link.linkText}</FooterLink>
              </li>
            );
          })}
        </FooterList>
      </FooterSectionContentContainer>
    </FooterSectionWrapper>
  );
};

export default FooterSection;
