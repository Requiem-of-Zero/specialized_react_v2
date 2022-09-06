import React from "react";
import {
  BannerWrapper,
  BannerContainer,
  BannerContentContainer,
  BannerHeader,
  BannerSubHeader,
} from "./Banner.styles";
import Button from "../Button/Button";
import GlobalStyles from "../../pages/global.css";

const Banner = ({ imgUrl, subTitle, title, ctas, justify, align}) => {
  return (
    <BannerWrapper imgUrl={imgUrl}>
      <GlobalStyles />
      <BannerContainer justify={justify}>
      <BannerContentContainer align={align}>
        <BannerSubHeader>{subTitle}</BannerSubHeader>
        <BannerHeader>{title}</BannerHeader>
        {ctas.map((cta, i) => {
          const key = "cta_button-" + i;
          return (
            <Button
              {...cta}
              key={key}
              textColor="black"
              background="#FFF"
              border="transparent"
            />
          );
        })}
      </BannerContentContainer>
      </BannerContainer>
    </BannerWrapper>
  );
};

export default Banner;
