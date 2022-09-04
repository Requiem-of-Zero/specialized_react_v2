import styled from "styled-components";

export const NavBarWrapper = styled.div`
  display: fixed;
  top: 0;
  width: 100%;
  height: 32px;
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
`;

export const NavBarContainer = styled.div``;
