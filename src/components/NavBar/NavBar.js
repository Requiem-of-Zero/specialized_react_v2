import React from "react";
import {
  NavBarWrapper,
  NavBarContainer,
  SecondaryNavBarContainer,
  SecondaryNavRightCol,
  SignInLink,
  LanguageLink,
  RetailerLink
} from "./NavBar.styles";
import GlobalStyle from "../../pages/global.css";

const NavBar = ({ categories }) => {
  return (
    <NavBarWrapper>
      <GlobalStyle />
      <SecondaryNavBarContainer>
        <p>
          <a href="#Shipping">Free Shipping on orders over $50</a>
        </p>
        <SecondaryNavRightCol>
          <ul>
            <li>
              <RetailerLink href="#Retailer">Find a Retailer</RetailerLink>
            </li>
            <li>
              <img src="https://www.specialized.com/_ui/addons/specializedstorefrontaddon/desktop/common/images/flags/country-US.svg" alt="language" />
              <LanguageLink href="#En">En</LanguageLink>
            </li>
            <li>
              <SignInLink href="#SignIn">Sign In</SignInLink>
            </li>
          </ul>
        </SecondaryNavRightCol>
      </SecondaryNavBarContainer>
      <NavBarContainer></NavBarContainer>
    </NavBarWrapper>
  );
};

export default NavBar;
