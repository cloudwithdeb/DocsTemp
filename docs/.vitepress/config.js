export default {
  themeConfig: {
    siteTitle: "Docs",
    logo: "../images/logo",

    nav: [
      {
        text: "Images",
        items: [{ text: "Images", link: "../images/image.md" }],
      },
      {
        text: "Pages",
        link: "../pages/pages.md",
      },
    ],

    sidebar: [
      {
        text: "Images",
        collapsible: true,
        collapsed: true,
        items: [{ text: "one", link: "../images/image.md"}]
      },
      {
        text: "Pages",
        collapsible: true,
        collapsed: true,
        items: [{ text: "one", link: "../pages/pages.md"}]
      },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Isaac'
    }
  }
};
