export const shopNowArgs = {
  url: "https://www.google.com",
  ctaTxt: "Shop Now",
  opensNewTab: true,
  textColor: 'black',
  background: '#FFF',
  border: 'transparent'
};

export const learnMoreArgs = {
  url: "https://www.google.com",
  ctaTxt: "Learn More",
  opensNewTab: true,
  background: 'transprent',
  textColor: '#FFF'
};

export const firstBannerArgs = {
  justify: "flex-start",
  align: "flex-start",
  bannerHeight: "1080px",
  textSize: '48px',
  imgUrl:
    "https://www.specialized.com/medias/BRD-10355-my-test-page-Homepage-Hero-2880x1620-2.3.jpg?context=bWFzdGVyfGltYWdlc3w4NzE4Nzl8aW1hZ2UvanBlZ3xoY2MvaDRjLzk2NDA5ODU4NTM5ODIvQlJELTEwMzU1X215LXRlc3QtcGFnZV9Ib21lcGFnZV9IZXJvXzI4ODB4MTYyMF8yLjMuanBnfGVjNDkxMzkwZjMzYmExMGJhZTUwZDE4MjQ3MTM3YWE5MGNjZDNmZDZiZmM4MmRjNDYzMjk4ZjY5MTI3OTlmMjM",
  subTitle: "Save on Select Bikes and Equipment",
  title: "End of Summer Savings",
  ctas: [shopNowArgs],
};

export const secondBannerArgs = {
  justify: "flex-end",
  align: "flex-start",
  bannerHeight: "1080px",
  textSize: "48px",
  imgUrl:
    "https://www.specialized.com/medias/ROAD-5536-Homepage-Hero-2880x1620.jpg?context=bWFzdGVyfGltYWdlc3wxMjc5MjUyfGltYWdlL2pwZWd8aGI3L2hjOS85NjQzMDIzMTcxNjE0L1JPQUQtNTUzNl9fSG9tZXBhZ2VfSGVyb18yODgweDE2MjAuanBnfGExYTAyZjY2NGRmN2U1ZDI0MzljZDAwYWE1MjlhNTNmMDJmOTgzNTY4Y2YzMjc2NjZkOGI1MjRhZGZiYmQwYWI",
  subTitle: "Remco and TT5 Helmet Dominate Vuelta TT",
  title: "Mach Against the Clock",
  ctas: [shopNowArgs, learnMoreArgs],
};
