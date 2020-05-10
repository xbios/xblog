module.exports = {
  title: "Xbios Dersler",
  description: "Just playing around",
  themeConfig: {
    logo: "/images/logo.png",
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
