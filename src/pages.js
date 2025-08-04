const context = require.context("./pages", false, /\.html$/);

const pages = [
  {
    html: context("./home.html").default,
    name: "home",
  },
  {
    html: context("./menu.html").default,
    name: "menu",
  },
  {
    html: context("./contact.html").default,
    name: "contact",
  },
];
export default pages;
