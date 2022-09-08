import styled from "styled-components";

export const SpecialDropDownWrapper = styled.div``;

export const SpecialDropDownContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 500px;
`;

export const BackgroundImg = styled.img`
  background-size: cover;
  width: 100%;
  height: 500px;
  border: 1px solid #121212;
`;

export const LinksList = styled.ul`
  list-style: none;
  background: #121212;
  width: 460px;
  margin: 0;
  padding: 0;
  padding: 40px 30px 0 45px;
  font-size: 12px;
  li {
    padding: 7px 0; 
  }
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: #7c7c7c;
    transition: all 0.4s ease;
  }
`;

export const CtaContainer = styled.div`
  position: absolute;
  top: 90px;
  right: 7%;
  width: 30%;
  h2 {
    font-size: 42px;
    padding: 0;
  }

  p {
    font-size: 16px;
    padding: 0;
    margin: 0;
  }
  * {
    margin: 0 0 16px;
    color: #fff;
  }
`;