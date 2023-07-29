// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "WeeboGitOps",
  tagline: "WeeboGitOps is a POC to learn GitOps",
  favicon: "img/favicon.ico",
  url: "https://batleforc.weebo.fr",
  baseUrl: "/WeeboGitOps/",
  organizationName: "batleforc",
  projectName: "WeeboGitOps",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/batleforc/WeeboGitOps/tree/Doc/Main",
        },
        blog: {
          showReadingTime: true,

          editUrl: "https://github.com/batleforc/WeeboGitOps/tree/Doc/Main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
      },
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "WeebpGitOps",
        logo: {
          alt: "WeeboGitOps Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "intro",
            position: "left",
            label: "Doc",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/batleforc/WeeboGitOps",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/batleforc/WeeboGitOps",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WeeboGitOps by Batleforc. Built with Docusaurus and lot's of coffee.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  customFields: {
    GITHUB_TOKEN: process.env.REACT_APP_GITHUB_TOKEN,
  },
};

module.exports = config;
