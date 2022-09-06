import React from "react";
import {
  QuadBannerWrapper,
  QuadBannerContentContainer,
  BannerContainer,
} from "./QuadBanner.styles";
import Banner from "../Banner/Banner";

const QuadBanner = ({ banners }) => {
  return (
    <QuadBannerWrapper>
      <QuadBannerContentContainer>
        {banners.map((banner, i) => {
            const key = 'banner_block-' + i;
            return (
                <BannerContainer>
                    <Banner {...banner} key={key} bannerHeight='600px'/>
                </BannerContainer>
            )
        })}
      </QuadBannerContentContainer>
    </QuadBannerWrapper>
  );
};

export default QuadBanner;
