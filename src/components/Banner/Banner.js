import React from "react";
import {
  BannerWrapper,
  BannerContainer,
  BannerContentContainer,
  BannerHeader,
  BannerSubHeader,
  CtaContainer,
} from "./Banner.styles";
import Button from "../Button/Button";

const Banner = ({
  imgUrl,
  subTitle,
  title,
  ctas,
  justify,
  align,
  bannerHeight,
  textSize
}) => {
  return (
    <BannerWrapper imgUrl={imgUrl} bannerHeight={bannerHeight}>
      <BannerContainer justify={justify}>
        <BannerContentContainer align={align}>
          <BannerSubHeader>{subTitle}</BannerSubHeader>
          <BannerHeader textSize={textSize} >{title}</BannerHeader>
          <CtaContainer>
            {ctas.map((cta, i) => {
              const key = "cta_button-" + i;
              return <Button {...cta} key={key} width="134px" />;
            })}
          </CtaContainer>
        </BannerContentContainer>
      </BannerContainer>
    </BannerWrapper>
  );
};

export default Banner;
