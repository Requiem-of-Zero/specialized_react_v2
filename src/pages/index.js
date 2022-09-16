import Head from "next/head";
import GlobalStyle from "./global.css";
import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import ShopTiles from "../components/ShopTiles/ShopTiles";
import QuadBanner from "../components/QuadBanner/QuadBanner";
import Footer from "../components/Footer/Footer";
import {useSession, signIn, signOut } from 'next-auth/react'
import getEntryById from "../util/getEntryById";
import handleData from "../util/handleListData";

export async function getStaticProps() {
  const homePageData = await getEntryById("2yDnaEl7GGyAaeEZ9Rzhir");

  return {
    props: {
      homePageData
    },
  };
}

export default function Home({
  homePageData
}) {
  const bannerImageUrl = (bannerData) => {
    const {url} = bannerData.bannerImage.fields.file;
    return url;
  };

  const {navigation, banners, shopTiles, quadBanner, footer} = homePageData;
  const navBarData = handleData(navigation, 'navigation');
  const bannerData = handleData(banners, 'banners');
  
  const firstBannerImgUrl = bannerImageUrl(bannerData.banners[0]);
  const secondBannerImageUrl = bannerImageUrl(bannerData.banners[1]);

  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>Made for riders, by riders. | Specialized.com</title>
        <meta name="Specialized Clone" content="Generated by Sam Wong" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='navBarDivider'></div>
      <NavBar {...navBarData} />
      <Banner {...bannerData.banners[0]} imgUrl={firstBannerImgUrl} />
      <Banner {...bannerData.banners[1]} imgUrl={secondBannerImageUrl} />
      <ShopTiles {...shopTiles} />
      <QuadBanner {...quadBanner} />
      <Footer {...footer} />
    </div>
  );
}
