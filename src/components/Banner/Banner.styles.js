import styled from "styled-components";

export const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ imgUrl }) => `url(${imgUrl})`};
  height: ${({bannerHeight}) => bannerHeight};
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: ${({justify}) => justify};
  width: 90%;
`;

export const BannerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align};
  text-align: ${({align}) => align};
  width: 500px;
  height: 183px;
  letter-spacing: 1.25px;
`;

export const BannerHeader = styled.h2`
  font-size: ${({textSize}) => textSize};
  color: #fff;
  padding-bottom: 20px;
`;

export const BannerSubHeader = styled.h5`
  color: #fff;
  font-size: 12px;
  text-transform: uppercase;
  padding-bottom: 7px;
`;

export const CtaContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

