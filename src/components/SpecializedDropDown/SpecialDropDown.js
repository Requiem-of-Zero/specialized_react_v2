import React from "react";
import {
  SpecialDropDownWrapper,
  SpecialDropDownContainer,
  BackgroundImg,
  LinksList,
  NavLink,
  CtaContainer,
} from "./SpecialDropDown.styles";

const SpecialDropDown = ({ links, imgUrl, header, subHeader }) => {

    console.log(links)
  return (
    <SpecialDropDownWrapper>
      <SpecialDropDownContainer>
        <LinksList>
          {links.map((link, i) => {
            const key = "specialized_link-" + i;
            return (
              <li key={key}>
                <NavLink href={link.url}>{link.label}</NavLink>
              </li>
            );
          })}
        </LinksList>
        <BackgroundImg imgUrl={imgUrl} src={imgUrl}/>
        <CtaContainer>
          <h2>{header}</h2>
          <p>{subHeader}</p>
        </CtaContainer>
      </SpecialDropDownContainer>
    </SpecialDropDownWrapper>
  );
};

export default SpecialDropDown;
