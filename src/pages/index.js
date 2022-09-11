import Head from "next/head";
import GlobalStyle from "./global.css";
import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import ShopTiles from "../components/ShopTiles/ShopTiles";
import QuadBanner from "../components/QuadBanner/QuadBanner";
import Footer from "../components/Footer/Footer";

import axios from "axios";
import navBarData from "../components/NavBar/data/model";
import {
  firstBannerArgs,
  secondBannerArgs,
} from "../components/Banner/data/model";
import shopTilesArgs from "../components/ShopTiles/data/model";
import quadBannerData from "../components/QuadBanner/data/model";
import footerData from "../components/Footer/data/model";
import getEntryById from "../util/getEntryById";

// const contentful = require("contentful");
// const client = contentful.createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// });

// export async function getStaticProps() {
//   const bannerData = await client.getEntry("5K75AlmWdrMgGx8oaTGxJl")
//   await axios.get('')
//     return {
//       props: {
//         ...bannerData.fields
//       }
//     }
// }

export async function getStaticProps() {
  const firstBannerData = await getEntryById("5K75AlmWdrMgGx8oaTGxJl");

  const secondBannerData = await getEntryById("5cgpQwBIJKUrPOirROXl7u");

  const quadBannerData = await getEntryById("5x5jWcqG2TefEAgDnbt6tK");

  const shopTilesData = await getEntryById("WIZyeiugk3K0rOvfZ81Jx");

  return {
    props: {
      firstBannerData,
      secondBannerData,
      quadBannerData,
      shopTilesData
    },
  };
}

export default function Home({
  firstBannerData,
  secondBannerData,
  quadBannerData,
  shopTilesData
}) {
  const bannerImageUrl = (bannerData) => {
    const url = bannerData.bannerImage.file.url;
    return url;
  };

  const firstBannerImgUrl = bannerImageUrl(firstBannerData);
  const secondBannerImageUrl = bannerImageUrl(secondBannerData);

  console.log(shopTilesData)
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>Made for riders, by riders. | Specialized.com</title>
        <meta name="Specialized Clone" content="Generated by Sam Wong" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar {...navBarData} />
      <Banner {...firstBannerData} imgUrl={firstBannerImgUrl} />
      <Banner {...secondBannerData} imgUrl={secondBannerImageUrl} />
      <ShopTiles {...shopTilesData} />
      <QuadBanner {...quadBannerData} />
      <Footer {...footerData} />
    </div>
  );
}
