import styled from "styled-components";

export const CategoryWrapper = styled.div`
  height: inherit;
  width: ${({sectionWidth}) => sectionWidth};
  float: left;
  padding-bottom: 30px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 140px;
`;

export const CategoryHeader = styled.a`
  color: ${({ textColor }) => textColor};
  text-decoration: none;
  padding: 3px 0 7px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  &:hover {
    color: #ed1c24;
    transition: all 0.25s ease;
  }
`;

export const CategoryList = styled.ul`
  list-style: none;
  font-size: 12px;
  padding-bottom: 30px;
  padding: 0;
  li {
    margin-bottom: 10px;
  }
`;

export const CategoryLink = styled.a`
  color: ${({ textColor }) => textColor};
  text-decoration: none;
  &:hover {
    color: #ed1c24;
    transition: all 0.25s ease;
  }
`;
