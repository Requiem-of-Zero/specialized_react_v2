import React, { useState } from "react";
import {
  NavBarWrapper,
  NavBarContainer,
  NavBarSectionContainer,
  SecondaryNavBarContainer,
  SecondaryNavRightCol,
  SignInLink,
  LanguageLink,
  RetailerLink,
  LeftSection,
  MiddleSection,
  RightSection,
  NavBarLink,
  ShoppingCartLink,
  WishlistLink,
  SearchLink,
  Logo,
} from "./NavBar.styles";
import DropDown from "../DropDown/DropDown";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = ({ categories }) => {
  const [dropDownId, setDropDownId] = useState(0);
  const [isShown, setIsShown] = useState(false);
  
  return (
    <NavBarWrapper onMouseLeave={() => setIsShown(false)}>
      <NavBarContainer>
        <SecondaryNavBarContainer>
          <p>
            <a href="#Shipping">Free Shipping on orders over $50*</a>
          </p>
          <SecondaryNavRightCol>
            <ul>
              <li>
                <RetailerLink href="#Retailer">
                  <LocationOnIcon className="location-icon" />
                  Find a Retailer
                </RetailerLink>
              </li>
              <li>
                <img
                  src="https://www.specialized.com/_ui/addons/specializedstorefrontaddon/desktop/common/images/flags/country-US.svg"
                  alt="language"
                />
                <LanguageLink href="#En">En</LanguageLink>
              </li>
              <li>
                <SignInLink href="#SignIn">Sign In</SignInLink>
              </li>
            </ul>
          </SecondaryNavRightCol>
        </SecondaryNavBarContainer>
        <NavBarSectionContainer>
          <LeftSection>
            <a href="">
              <Logo src="https://cdn.shopify.com/s/files/1/0904/4132/files/spec-logo-bp.jpg?v=1585000290" />
            </a>
          </LeftSection>
          <MiddleSection>
            <ul>
              {categories.map((category, i) => {
                return (
                  <li>
                    <NavBarLink
                      href={category.categoryUrl}
                      onMouseEnter={() => {
                        console.log(category)
                        setIsShown(true);
                        setDropDownId(i);
                      }}
                    >
                      {category.categoryTitle}
                    </NavBarLink>
                  </li>
                );
              })}
            </ul>
          </MiddleSection>
          <RightSection>
            <SearchLink href="#shopping_cart">
              <SearchIcon />
            </SearchLink>
            <WishlistLink href="#shopping_cart">
              <FavoriteBorderIcon />
            </WishlistLink>
            <ShoppingCartLink href="#shopping_cart">
              <ShoppingCartIcon className="shopping_cart" />
            </ShoppingCartLink>
          </RightSection>
        </NavBarSectionContainer>
      </NavBarContainer>
      {isShown && <DropDown {...categories[dropDownId].megaNav} />}

    </NavBarWrapper>
  );
};

export default NavBar;
