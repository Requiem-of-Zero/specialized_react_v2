import React from "react";
import {
  FooterWrapper,
  FooterSectionContainer,
  FooterAppContainer,
  FooterCTA,
  SocialLinksContainer,
  RideAppContainer,
  MissionControlContainer,
  AppleGoogleFlexBox,
  NewsLetterInput,
  NewsLetterBtn,
  NewsLetterForm,
  LegalFooter
} from "./Footer.styles";

import Button from "../Button/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FooterSection from "../FooterSection/FooterSection";

const Footer = ({ sections, legalLinks }) => {
  return (
    <FooterWrapper>
      <FooterSectionContainer>
        {sections.map((section, i) => {
          const key = "footer_section-" + i;
          return <FooterSection {...section} key={key} />;
        })}
      </FooterSectionContainer>
      <FooterAppContainer>
        <RideAppContainer>
          <a href="htttps://www.google.com">Ride App</a>
          <AppleGoogleFlexBox>
            <a href="">
              <img
                src="https://www.specialized.com/_ui/addons/specializedstorefrontaddon/desktop/common/images/apps/app-store-black.svg"
                alt="specialized ride app apple download"
                width="100px"
              />
            </a>
            <a href="">
              <img
                src="https://www.specialized.com/_ui/addons/specializedstorefrontaddon/desktop/common/images/apps/google-play-black.svg"
                alt="specialized ride app google download"
                width="100px"
              />
            </a>
          </AppleGoogleFlexBox>
        </RideAppContainer>
        <MissionControlContainer>
          <a href="https://www.google.com">Mission Control</a>
          <AppleGoogleFlexBox>
            <a href="">
              <img
                src="https://www.specialized.com/_ui/addons/specializedstorefrontaddon/desktop/common/images/apps/app-store-black.svg"
                alt="specialized ride app apple download"
                width="100px"
              />
            </a>
            <a href="">
              <img
                src="https://www.specialized.com/_ui/addons/specializedstorefrontaddon/desktop/common/images/apps/google-play-black.svg"
                alt="specialized ride app google download"
                width="100px"
              />
            </a>
          </AppleGoogleFlexBox>
        </MissionControlContainer>
        <SocialLinksContainer>
          <li>
            <a href="https://www.instagram.com">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com">
              <YouTubeIcon />
            </a>
          </li>
        </SocialLinksContainer>
      </FooterAppContainer>
      <FooterCTA>
        <form action="submit">
          <h5>Newsletter</h5>
          <NewsLetterForm>
            <NewsLetterInput type="email" placeholder="Email Address" />
            <NewsLetterBtn>Join</NewsLetterBtn>
          </NewsLetterForm>
        </form>
        <p>
          By submitting your email address you agree to the{" "}
          <a href="#terms">Terms & Conditions</a>
        </p>
        <Button
          ctaTxt="Find A Retailer"
          url="https://www.google.com"
          opensNewTab={true}
          background="#292929"
          border='transparent'
          width='225px'
        />
      </FooterCTA>
        <LegalFooter>
            
        </LegalFooter>
    </FooterWrapper>
  );
};

export default Footer;
