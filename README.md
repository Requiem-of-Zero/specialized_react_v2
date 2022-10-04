This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Specialized Clone
This is a clone of [Specialized](https://www.specialized.com/us/en) created with Contentful CMS and NextJS/React stack. Utility libraries used for organization was Styled-Components and Storybook for component documentation.

This project was my own individual test of taking on a challenge of learning new technologies by myself I wasn't familiar with in order to gain even more understanding of the full-stack development cycle.

```zsh
npm install
# then
npm run dev

# or

yarn install
#then
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Banners Component
### My Version
<img src='/src/assets/images/specialized_mine.png' width='800' height='auto'>

### Actual Site
<img src='/src/assets/images/specialized-real-home.png' width='800' height='auto'>

For my banner component, on the actual site while cloning it, I noticed it will sometime have multiple banners, buttons, and justification of the content container are all dynamic. This is where I saw fit to add props that will handle what data will be sent to the component.

```js
const Banner = ({
  imgUrl,
  subTitle,
  title,
  ctas,
  justify,
  align,
  bannerHeight,
  textSize,
}) => {
  return (
    <BannerWrapper imgUrl={imgUrl} bannerHeight={bannerHeight}>
      <BannerContainer justify={justify}>
        <BannerContentContainer align={align}>
          <BannerSubHeader>{subTitle}</BannerSubHeader>
          <BannerHeader textSize={textSize}>{title}</BannerHeader>
          <CtaContainer>
            {ctas && ctas.map((cta, i) => {
              const key = "cta_button-" + i;
              return <Button {...cta.fields} key={key} width="134px" />;
            })} 
          </CtaContainer>
        </BannerContentContainer>
      </BannerContainer>
    </BannerWrapper>
  );
};
```

## Dynamic Nav Bar
### My Version
<img src='/src/assets/images/my-nav.gif' width='800' height='auto'>

## Actual Site
<img src='/src/assets/images/actual-nav.gif width='800' height='auto'>

Using styled-components makes it easier to differentiate between divs and parent-children relationships.

```js
const NavBar = ({ navigation }) => {
  const [dropDownId, setDropDownId] = useState(0);
  const [isShown, setIsShown] = useState(false);

  const currentDropDown = navigation[dropDownId];

  const handleDropDown = (currentMenu) => {
    if (currentMenu.categoryTitle === "Sale") {
      return <></>;
    } else if (currentMenu.categoryTitle === "Inside Specialized") {
      return <SpecialDropDown {...currentMenu} />;
    } else {
      return <DropDown {...currentMenu} />;
    }
  };

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
                <SignInLink href="http://localhost:3000/login">
                  Sign In
                </SignInLink>
              </li>
            </ul>
          </SecondaryNavRightCol>
        </SecondaryNavBarContainer>
        <NavBarSectionContainer selected={isShown}>
          <LeftSection>
            <a href="">
              <Logo src="https://cdn.shopify.com/s/files/1/0904/4132/files/spec-logo-bp.jpg?v=1585000290" />
            </a>
          </LeftSection>
          <MiddleSection>
            <ul>
              {navigation.map((category, i) => {
                const key = "navbar_link-" + i;
                return (
                  <li key={key}>
                    <NavBarLink
                      href={category.categoryUrl}
                      onMouseEnter={() => {
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
      {isShown && handleDropDown(currentDropDown)}
    </NavBarWrapper>
  );
};
```

## Nav Bar Document Model

I separated the navigation data into three sections to make it easier to organize and find data when code bases get larger

```js
export const navBarData = {
  categories: [
    {
      categoryTitle: "Bikes",
      categoryUrl: "https://www.google.com",
      megaNav: {
        megaNavLeftSection: {
          links: [
            {
              label: "S-Works",
              url: "https://www.google.com",
            },
            {
              label: "Bikes In Stock",
              url: "https://www.google.com",
            },
            {
              label: "Demo & Events",
              url: "https://www.google.com",
            },
          ],
          cta: {
            ctaTxt: "Shop By Model",
            url: "https://www.google.com",
            opensNewTab: true,
            hover: 'e6e6e6'
          },
        },

        megaNavMiddleSection: {
          categorySections: [
            {
              sectionTitle: "Mountain",
              sectionUrl: "https://www.google.com",
              sectionLinks: [
                {
                  label: "Cross Country",
                  url: "https://www.google.com",
                },
                {
                  label: "Trail",
                  url: "https://www.google.com",
                },
                {
                  label: "Downhill",
                  url: "https://www.google.com",
                },
                {
                  label: "BMX / Dirt Jump",
                  url: "https://www.google.com",
                },
                {
                  label: "Frames",
                  url: "https://www.google.com",
                },
              ],
            },
            {
              column: 2,
              sectionTitle: "Road",
              sectionUrl: "https://www.google.com",
              sectionLinks: [
                {
                  label: "Performancer",
                  url: "https://www.google.com",
                },
                {
                  label: "Gravel",
                  url: "https://www.google.com",
                },
                {
                  label: "Cyclocross",
                  url: "https://www.google.com",
                },
                {
                  label: "Triathlon",
                  url: "https://www.google.com",
                },
                {
                  label: "Frames",
                  url: "https://www.google.com",
                },
              ],
            },
            {
              column: 3,
              sectionTitle: "Active",
              sectionUrl: "https://www.google.com",
              sectionLinks: [
                {
                  label: "Fitness",
                  url: "https://www.google.com",
                },
                {
                  label: "Transport",
                  url: "https://www.google.com",
                },
                {
                  label: "Comfort",
                  url: "https://www.google.com",
                },
              ],
            },
            {
              column: 4,
              sectionTitle: "Turbo E-Bikes",
              sectionUrl: "https://www.google.com",
              sectionLinks: [
                {
                  label: "Road",
                  url: "https://www.google.com",
                },
                {
                  label: "Mountain",
                  url: "https://www.google.com",
                },
                {
                  label: "Active",
                  url: "https://www.google.com",
                },
              ],
            },
            {
              column: 3,
              sectionTitle: "Kids",
              sectionUrl: "https://www.google.com",
              sectionLinks: [
                {
                  label: "Toddler (1.5-4Y)",
                  url: "https://www.google.com",
                },
                {
                  label: "Little Kids (4-7Y)",
                  url: "https://www.google.com",
                },
                {
                  label: "Big Kids (7-10+ Y)",
                  url: "https://www.google.com",
                },
              ],
            },
          ],
        },

        megaNavRightSection: {
          categorySections: [
            {
              sectionTitle: "Innovation",
              sectionUrl: "https://www.google.com",
              sectionLinks: [
                { label: "Aero is Everything", url: "https://www.google.com" },
                { label: "Turbo Technology", url: "https://www.google.com" },
                { label: "Brain Technology", url: "https://www.google.com" },
                { label: "FACT™ Carbon Fiber", url: "https://www.google.com" },
              ],
            },
            {
              sectionTitle: "Resources",
              sectionUrl: "https://www.google.com",
              sectionLinks: [
                {
                  label: "Suspension Calculator",
                  url: "https://www.google.com",
                },
                { label: "Ride App", url: "https://www.google.com" },
                { label: "Tire Finder", url: "https://www.google.com" },
              ],
            },
          ],
        },
      },
    },
  ],
}
```

## Future Features
    * Working on backend with Prisma, initial database set up is done
    * Design the cart feature and adding products to the cart
    * Incorporating CRUD features with Contentful as backend