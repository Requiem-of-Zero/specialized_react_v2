import React from "react";
import {
  TileWrapper,
  TileContainer,
  ProductImg,
  ProductLink,
  ProductTitle,
} from "./ShopTiles.styles";

const ShopTiles = ({ products }) => {
  return (
    <TileWrapper>
      <TileContainer>
        {products.map((product) => {
          return (
            <ProductLink href={product.redirectUrl}>
              <ProductImg src={product.productImgUrl} />
              <ProductTitle>Shop {product.productName}</ProductTitle>
            </ProductLink>
          );
        })}
      </TileContainer>
    </TileWrapper>
  );
};

export default ShopTiles;
