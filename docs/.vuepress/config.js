module.exports = {
  title: "Sensorium Dersler",
  description: "Just playing around",
  themeConfig: {
    logo: "/images/logo.png",
    nav: [
      { text: "Ana Sayfa", link: "/" },
      { text: "Dersler", link: "/guide/" },
      { text: "Doruktip", link: "http://doruktip.com" },
    ],
    // sidebar: "auto",
    sidebar: {
      "/guide/": ["", "frontend", "backend"],
    },
  },
};
