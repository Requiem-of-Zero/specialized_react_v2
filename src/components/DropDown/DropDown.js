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
  leftSection,
  middleSection,
  rightSection,
}) => {
  const {links} = leftSection.fields
  const {categorySections, sectionTitle} = middleSection.fields;
  
  const cta = leftSection.fields.cta ? leftSection.fields.cta.fields : '';

  return (
    <DropDownWrapper>
      <DropDownContentContainer>
        <LeftContainer>
          <SectionList>
            {links &&
              links.map((section, i) => {
                const key = "section_link-" + i;
                const { label, url } = section.fields;
                return (
                  <li>
                    <SectionLink href={url} key={key}>
                      {label}
                    </SectionLink>
                  </li>
                );
              })}
          </SectionList>
          {cta ? (
            <Button {...cta} />
          ) : (
            <></>
          )}
        </LeftContainer>
        <Divider />
        <MiddleContainer>
          {categorySections.map((section, i) => {
            const key = "middle_category_section-" + i;
            console.log(section);
            return (
              <CategorySection
                key={key}
                sectionWidth="25%"
                textColor="black"
                {...section.fields}
              />
            );
          })}
        </MiddleContainer>
        <Divider />
        <RightContainer>
          {rightSection ? rightSection.fields.categorySections.map((section, i) => {
            const key = "category_section-" + i;
            return <CategorySection {...section.fields} key={key} textColor="black" />;
          }) : <></>}
        </RightContainer>
      </DropDownContentContainer>
    </DropDownWrapper>
  );
};

export default DropDown;
