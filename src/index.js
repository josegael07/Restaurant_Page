import "./styles.css";
import { createAboutPage } from "./About.js";
import { createHomePage } from "./Home.js";
import { createOrderPage } from "./Order.js";
// Content Container 
const content = document.querySelector("#content");
// Nav Buttons
const homeBtn = document.querySelector("#home");
const orderBtn = document.querySelector("#order");
const aboutBtn = document.querySelector("#about");
function clear() {
    content.textContent = "";
}
homeBtn.addEventListener("click", () => {
    clear();
    createHomePage(content);
});
orderBtn.addEventListener("click", () => {
    clear();
    createOrderPage(content);
});
aboutBtn.addEventListener("click", () => {
    clear();
    createAboutPage(content);
});
createHomePage(content);
//# sourceMappingURL=index.js.map