import styled from "styled-components";

export const DropDownWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
  width: 100%;
  background: #fff;
  font-size: 12px;
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
  padding: 30px 30px 0 30px;
  width: 200px;
`;

export const MiddleContainer = styled.div`
  padding: 30px 30px 0 30px;
  width: 600px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px 0 30px;
  width: 200px;
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
