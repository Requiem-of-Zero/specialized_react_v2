import React from "react";
import {
  DropDownWrapper,
  Divider,
  DropDownContentContainer,
  LeftContainer,
  MiddleContainer,
  RightContainer,
  SectionList,
  SectionLink,
} from "./DropDown.styles";
import Button from "../Button/Button";
import CategorySection from "../CategorySection/CategorySection";

const DropDown = ({
  megaNavLeftSection,
  megaNavMiddleSection,
  megaNavRightSection,
}) => {
  const { categorySections } = megaNavMiddleSection;

  return (
    <DropDownWrapper>
      <DropDownContentContainer>
        <LeftContainer>
          <SectionList>
            {megaNavLeftSection ? megaNavLeftSection.links.map((section, i) => {
              const key = "section_link-" + i;
              return (
                <li>
                  <SectionLink href={section.url} key={key}>
                    {section.label}
                  </SectionLink>
                </li>
              );
            }) : <></>}
          </SectionList>
          {megaNavLeftSection.cta ? (
            <Button {...megaNavLeftSection.cta} width="166px" />
          ) : (
            <></>
          )}
        </LeftContainer>
        <Divider />
        <MiddleContainer>
          {categorySections.map((section, i) => {
            const key = "middle_category_section-" + i;
            return (
              <CategorySection
                key={key}
                sectionWidth="25%"
                textColor="black"
                {...section}
              />
            );
          })}
        </MiddleContainer>
        <Divider />
        <RightContainer>
          {megaNavRightSection ? megaNavRightSection.categorySections.map((section, i) => {
            const key = "category_section-" + i;
            return <CategorySection {...section} key={key} textColor="black" />;
          }) : <></>}
        </RightContainer>
      </DropDownContentContainer>
    </DropDownWrapper>
  );
};

export default DropDown;
