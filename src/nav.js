import { capitalize } from "./utils";

export default function buildNav(container, pages) {
  const buttons = pages.map((p) => buildButton(p));
  container.append(...buttons);
}

function buildButton(page) {
  const node = document.createElement("button");
  node.textContent = capitalize(page.name);
  node.dataset.page = page.name;
  return node;
}
