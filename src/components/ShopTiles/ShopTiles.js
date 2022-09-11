import React from "react";
import {
  TileWrapper,
  TileContainer,
  ProductImg,
  ProductLink,
  ProductTitle,
} from "./ShopTiles.styles";

const ShopTiles = ({ products }) => {
  
  const shopTileImgUrls = (productData) => {
    const urls = [];
    for(const product of productData){
      const imgUrl = product.fields.productImg.fields.file.url
      urls.push(imgUrl)
    }
    
    return urls;
  }

  const shopTilesImgUrlsArr = shopTileImgUrls(products)
  return (
    <TileWrapper>
      <TileContainer>
        {products.map((product, i ) => {
          const key = 'tile-' + i;
          return (
            <ProductLink href={product.fields.redirectUrl} key={key}>
              <ProductImg src={shopTilesImgUrlsArr[i]} />
              <ProductTitle>Shop {product.fields.productName}</ProductTitle>
            </ProductLink>
          );
        })}
      </TileContainer>
    </TileWrapper>
  );
};

export default ShopTiles;
