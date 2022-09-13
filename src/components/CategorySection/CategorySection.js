import React, {useEffect} from "react";
import {
  CategoryWrapper,
  CategoryHeader,
  CategoryLink,
  ContentContainer,
  CategoryList,
} from "./CategorySection.styles";

const CategorySection = ({
  sectionTitle,
  sectionUrl,
  sectionLinks,
  textColor,
  sectionWidth
}) => {

  return (
    <CategoryWrapper sectionWidth={sectionWidth}>
      <ContentContainer>
        <CategoryHeader href={sectionUrl} textColor={textColor}>
          {sectionTitle}
        </CategoryHeader>
        <CategoryList>
          {sectionLinks.map((section, i) => {
            return <li key={i}>
              <CategoryLink href={section.fields.url} textColor={textColor}>
                {section.fields.label}
              </CategoryLink>
            </li>
        })}
        </CategoryList>
      </ContentContainer>
    </CategoryWrapper>
  );
};

export default CategorySection;
