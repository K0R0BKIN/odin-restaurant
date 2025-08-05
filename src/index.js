import { getPage, swapPage } from "./pageManager";
import buildNav from "./nav";

const navbar = document.getElementById("navbar");
buildNav(navbar);

const defaultPage = getPage("home");
swapPage(defaultPage);
