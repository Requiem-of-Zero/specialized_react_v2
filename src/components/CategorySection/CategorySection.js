import React, {useEffect} from "react";
import {
  CategoryWrapper,
  CategoryHeader,
  CategoryLink,
  ContentContainer,
  CategoryList,
} from "./CategorySection.styles";
import getEntryById from "../../util/getEntryById";
import resolveResponse from "contentful-resolve-response";
const CategorySection = ({
  sectionTitle,
  sectionUrl,
  sectionLinks,
  textColor,
  sectionWidth
}) => {
  console.log('sectionLinks: ', sectionLinks);
  return (
    <CategoryWrapper sectionWidth={sectionWidth}>
      <ContentContainer>
        <CategoryHeader href={sectionUrl} textColor={textColor}>
          {sectionTitle}
        </CategoryHeader>
        <CategoryList>
          {sectionLinks.map((section, i) => (
            <li key={i}>
              <CategoryLink href={section.url} textColor={textColor}>
                {section.label}
              </CategoryLink>
            </li>
          ))}
        </CategoryList>
      </ContentContainer>
    </CategoryWrapper>
  );
};

export default CategorySection;
