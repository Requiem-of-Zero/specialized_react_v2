import styled from "styled-components";

export const DropDownWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  height: 400px;
  width: 100%;
  background: #fff;
`;

export const DropDownContentContainer = styled.div`
  display: flex;
`;

export const Divider = styled.div`
  background: #ededed;
  width: 1px;
  height: 400px;
`;

export const LeftContainer = styled.div`
  padding: 0 30px;
  max-width: 400px;
`;

export const MiddleContainer = styled.div`
  padding: 0 30px;
  min-width: 600px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  max-width: 400px;
`;

export const SectionLink = styled.a`
  color: black;
  text-decoration: none;
  &:hover {
    color: #ed1c24;
    transition: all 0.25s ease;
  }
`;

export const SectionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
  li {
    padding: 7px 0;
  }
`;
