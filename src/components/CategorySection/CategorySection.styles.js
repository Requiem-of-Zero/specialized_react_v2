import styled from "styled-components";

export const CategoryWrapper = styled.div``;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryHeader = styled.a`
  color: black;
  text-decoration: none;
  padding: 3px 0 7px;
  font-size: 12px;
  text-transform: uppercase;
  &:hover {
    color: #ed1c24;
    transition: all 0.25s ease;
  }
`;

export const CategoryList = styled.ul`
  list-style: none;
  font-size: 12px;
  li {
    margin-bottom: 10px;
  }
`;

export const CategoryLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    color: #ed1c24;
    transition: all 0.25s ease;
  }
`;
