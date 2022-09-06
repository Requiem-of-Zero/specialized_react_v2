import styled from "styled-components";

export const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ imgUrl }) => `url(${imgUrl})`};
  height: 1620px;
  width: 100%;
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
  width: 500px;
  height: 183px;
  letter-spacing: 1.25px;
`;

export const BannerHeader = styled.h2`
  font-size: 48px;
  color: #fff;
  padding-bottom: 20px;
`;

export const BannerSubHeader = styled.h5`
  color: #fff;
  font-size: 12px;
  text-transform: uppercase;
  padding-bottom: 7px;
`;
