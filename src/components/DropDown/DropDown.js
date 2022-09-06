import React from "react";
import {
  DropDownWrapper,
  DropDownContentContainer,
  LeftContainer,
  MiddleContainer,
  RightContainer,
  SectionList,
  SectionLink,
} from "./DropDown.styles";
import GlobalStyles from "../../pages/global.css";
import Button from "../Button/Button";
import CategorySection from "../CategorySection/CategorySection";

const DropDown = ({
  megaNavLeftSection,
  megaNavMiddleSection,
  megaNavRightSection,
}) => {

  const handleMiddleColumns = (categories) => {
    const uniqueColumns = [...new Set(categories.map((category) => category.column))]

    const sections = uniqueColumns.map((column) => {
      return categories.filter((section) => section.column === column)
    });

    return sections;
  }
  return (
    <DropDownWrapper>
      <GlobalStyles />
      <DropDownContentContainer>
        <LeftContainer>
          <SectionList>
            {megaNavLeftSection.links.map((section, i) => {
              const key = "section_link-" + i;
              return (
                <li>
                  <SectionLink href={section.url} key={key}>
                    {section.label}
                  </SectionLink>
                </li>
              );
            })}
          </SectionList>
          {megaNavLeftSection.cta ? (
            <Button {...megaNavLeftSection.cta} />
          ) : (
            <></>
          )}
        </LeftContainer>
        <MiddleContainer>

        </MiddleContainer>
        <RightContainer>
          {megaNavRightSection.categorySections.map((section, i) => {
            const key = "category_section-" + i;
            return <CategorySection {...section} key={key} />;
          })}
        </RightContainer>
      </DropDownContentContainer>
    </DropDownWrapper>
  );
};

export default DropDown;