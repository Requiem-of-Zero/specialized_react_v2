import styled from "styled-components";

export const TileWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const TileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  padding: 32px 32px;
`;

export const ProductImg = styled.img`
  height: calc(25vw - 37.5px);
  width: 100%;
  background-size: cover;
`;

export const ProductLink = styled.a`
  text-align: center;
  text-decoration: none;
  color: #414141;
  height: 100%;
`;

export const ProductTitle = styled.h2`
  padding: 2rem 2rem;
  font-size: 16px;
  font-weight: 400;
`;

export const NewProductImg = styled.div``;
