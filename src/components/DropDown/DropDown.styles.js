import styled from "styled-components";

export const DropDownWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
  width: 100%;
  background: #fff;
`;

export const DropDownContentContainer = styled.div`
  display: flex;
`;

export const LeftContainer = styled.div`
padding: 0 30px;
`;

export const MiddleContainer = styled.div`
padding: 0 30px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`;

export const SectionLink = styled.a`
  color: black;
  text-decoration: none;
`;

export const SectionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    padding: 7px 0;
  }
`;
