import React from "react";
import {
  BannerWrapper,
  BannerContainer,
  BannerContentContainer,
  BannerHeader,
  BannerSubHeader,
  CtaContainer
} from "./Banner.styles";
import Button from "../Button/Button";
import GlobalStyles from "../../pages/global.css";

const Banner = ({ imgUrl, subTitle, title, ctas, justify, align, bannerHeight}) => {
  return (
    <BannerWrapper imgUrl={imgUrl} bannerHeight={bannerHeight}>
      <GlobalStyles />
      <BannerContainer justify={justify}>
      <BannerContentContainer align={align}>
        <BannerSubHeader>{subTitle}</BannerSubHeader>
        <BannerHeader>{title}</BannerHeader>
        <CtaContainer>
        {ctas.map((cta, i) => {
          const key = "cta_button-" + i;
          return (
            <Button
              {...cta}
              key={key}
            />
          );
        })}
        </CtaContainer>
      </BannerContentContainer>
      </BannerContainer>
    </BannerWrapper>
  );
};

export default Banner;
