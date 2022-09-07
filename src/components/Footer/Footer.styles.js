import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 45px;
  gap: 30px;
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
  width: 300px;
  h5 {
    color: #fff;
    margin: 0;
    padding-bottom: 12px;
    text-transform: uppercase;
  }

  p {
    color: #8e8e7e;
    padding-bottom: 46px;
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
`;

export const NewsLetterBtn = styled.button`
  background-color: #c61017;
  color: white;
  width: 80px;
  height: 100%;
  border-color: #c61017;
  cursor: pointer;
  text-transform: uppercase;
  border-top: 7px solid #c61017;
  border-bottom: 5px solid #c61017;
`;


export const NewsLetterForm = styled.div`
    height: 44px;
`;

