import styled from "styled-components";

export const FooterWrapper = styled.div``;

export const FooterContentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 45px;
  gap: 35px;
  height: 414px;
  background: #121212;
  letter-spacing: 1px;
`;

export const FooterSectionContainer = styled.div`
gap: 30px;
display: flex;
width: 1080px
height: inherit;
`;

export const FooterAppContainer = styled.div``;

export const RideAppContainer = styled.div`
  text-transform: uppercase;
  padding-bottom: 30px;
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const MissionControlContainer = styled.div`
  text-transform: uppercase;
  padding-bottom: 30px;
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const SocialLinksContainer = styled.ul`
  display: flex;
  gap: 6px;
  list-style: none;
  padding: 0 0 0 0;
  li a {
    color: #fff;
  }
`;

export const AppleGoogleFlexBox = styled.div`
  display: flex;
  gap: 16px;
  padding-top: 12px;
`;

export const FooterCTA = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  h5 {
    color: #fff;
    margin: 0;
    padding-bottom: 12px;
    text-transform: uppercase;
  }

  p {
    color: #8e8e8e;
    padding-bottom: 46px;
    padding-top: 14px;
    font-size: 12px;
  }

  a {
    color: #fff;
  }
`;

export const NewsLetterInput = styled.input`
  height: 100%;
  outline: none;
  background-color: #414141;
  font-size: 14px;
  padding-left: 9px;
  border: none;
  color: #fff;
`;

export const NewsLetterBtn = styled.button`
  background-color: red;
  color: white;
  width: 80px;
  height: 100%;
  border-color: red;
  cursor: pointer;
  text-transform: uppercase;
  border-top: 7px solid red;
  border-bottom: 5px solid red;
`;

export const NewsLetterForm = styled.div`
  height: 44px;
`;

export const LegalFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background: black;
  height: 158px;
  padding: 30px 0 0 0;
  font-size: 12px;
  text-transform: uppercase;
`;

export const LegalLinksList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const LegalLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

export const CopyRight = styled.div`
  color: #fff;
`;
