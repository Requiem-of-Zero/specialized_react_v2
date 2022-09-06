import styled from "styled-components";

export const NavBarWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 32px;
  z-index: 999;
`;

export const NavBarContainer = styled.div`
  width: inherit;
  background: #FFF;
`;

export const SecondaryNavBarContainer = styled.div`
  overflow: hidden;
  background: black;
  height: inherit;
  display: flex;
  width: inherit;
  align-items: center;
  justify-content: space-between;
  p {
    padding-left: 45px;
  }
  a {
    color: white;
  }
`;

export const SecondaryNavRightCol = styled.div`
ul {
    display: flex;
    list-style: none; 
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    align-items: center;

    li:nth-child(2){
        display: flex;
        align-items: center;
        height: 32px;
        padding-left: 45px;
    }

    a{
        text-decoration: none;
        color: white;
    }
    img{ 
        center;
    }
}
`;

export const SignInLink = styled.a`
  @media (min-width: 901px) {
    padding: 10px 45px !important;
  }
  background: #414141;
`;

export const LanguageLink = styled.a`
  padding: 0 45px 0 5px;
`;

export const RetailerLink = styled.a`
  display: flex;
  align-items: center;
  .location-icon {
    font-size: 16px;
    padding-right: 10px;
  }
`;

export const NavBarSectionContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 64px;
  justify-content: space-between;
  padding: 0 45px;
`;

export const LeftSection = styled.div``;

export const Logo = styled.img`
  width: 150px;
`;

export const MiddleSection = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    text-align: center;
    font-size: 12px;
    li{
        padding: 18px 24px;
    }
  }
  width: 600px;
`;

export const RightSection = styled.div`
  a {
    &:hover {
      color: red;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBarLink = styled.a`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  :hover {
    color: red;
    transition: all 0.3s ease;
  }
`;

export const WishlistLink = styled.a`
  color: black;
  padding: 13px 16px;
`;

export const SearchLink = styled.a`
  color: black;
  padding: 13px 16px;
`;

export const ShoppingCartLink = styled.a`
  color: black;
  padding: 13px 9px;
  .shopping_cart {
    transform: scaleX(-1);
  }
`;

