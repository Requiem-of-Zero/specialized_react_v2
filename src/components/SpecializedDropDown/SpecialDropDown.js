import React from "react";
import {
  SpecialDropDownWrapper,
  SpecialDropDownContainer,
  BackgroundImg,
  LinksList,
  NavLink,
  CtaContainer,
} from "./SpecialDropDown.styles";

const SpecialDropDown = ({ leftSection }) => {
  const {links, backgroundImage, subHeader, header} = leftSection.fields
  const imgUrl = backgroundImage[0].fields.file.url
  return (
    <SpecialDropDownWrapper>
      <SpecialDropDownContainer>
        <LinksList>
          {links.map((link, i) => {
            const key = "specialized_link-" + i;
            return (
              <li key={key}>
                <NavLink href={link.fields.url}>{link.fields.label}</NavLink>
              </li>
            );
          })}
        </LinksList>
        <BackgroundImg src={imgUrl}/>
        <CtaContainer>
          <h2>{header}</h2>
          <p>{subHeader}</p>
        </CtaContainer>
      </SpecialDropDownContainer>
    </SpecialDropDownWrapper>
  );
};

export default SpecialDropDown;
