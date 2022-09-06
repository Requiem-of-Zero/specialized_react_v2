import React from "react";
import {
  CategoryWrapper,
  CategoryHeader,
  CategoryLink,
  ContentContainer,
  CategoryList,
} from "./CategorySection.styles";
import GlobalStyles from '../../pages/global.css'

const CategorySection = ({ sectionTitle, sectionUrl, sectionLinks }) => {
  return (
    <CategoryWrapper>
      <GlobalStyles/>
      <ContentContainer>
        <CategoryHeader href={sectionUrl}>{sectionTitle}</CategoryHeader>
        <CategoryList>  
        {sectionLinks.map((section) => (
          <li><CategoryLink href={section.url}>{section.label}</CategoryLink></li>
        ))}
        </CategoryList>
      </ContentContainer>
    </CategoryWrapper>
  );
};

export default CategorySection;
