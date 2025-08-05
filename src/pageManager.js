const context = require.context("./pages", false, /\.html$/);

export const pages = [
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

export function getPage(name) {
  return pages.find((page) => page.name === name);
}

export function swapPage(page) {
  const node = document.getElementById("content");
  node.innerHTML = page.html;
}
