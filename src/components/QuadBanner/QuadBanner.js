import React from "react";
import {
  QuadBannerWrapper,
  QuadBannerContentContainer,
  BannerContainer,
} from "./QuadBanner.styles";
import Banner from "../Banner/Banner";

const QuadBanner = ({ banners } ) => {
  const quadBannerImgUrls = (banners) => {
    const urls = [];
    for(let i=0; i < banners.length; i++){
      const indivBanner = banners[i];
      const imgUrl = indivBanner.fields.bannerImage.fields.file.url
      urls.push(imgUrl)
    }
    return urls;
  }

  const quadBannerUrlArray = quadBannerImgUrls(banners);
  return (
    <QuadBannerWrapper>
      <QuadBannerContentContainer>
        {banners.map((banner, i) => {
            const key = 'banner_block-' + i;
            return (
              <BannerContainer key={key}>
                <Banner {...banner.fields} imgUrl={quadBannerUrlArray[i]}/>
              </BannerContainer>
            );
        })}
      </QuadBannerContentContainer>
    </QuadBannerWrapper>
  );
};

export default QuadBanner;
