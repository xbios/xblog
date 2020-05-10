module.exports = {
  title: "Xbios Dersler",
  description: "Just playing around",
  themeConfig: {
    // logo: "assets/img/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "External", link: "http://doruktip.com" },
    ],
    // sidebar: "auto",
    sidebar: {
      "/guide/": ["", "frontend", "backend"],
    },
  },
};
