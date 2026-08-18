import "./styles.css";
import { createAboutPage } from "./About.js";
import { createHomePage } from "./Home.js";
import { createOrderPage } from "./Order.js";

// Content Container 
const content = document.querySelector("#content") as HTMLDivElement;
// Nav Buttons
const homeBtn = document.querySelector("#home") as HTMLButtonElement;
const orderBtn = document.querySelector("#order") as HTMLButtonElement;
const aboutBtn = document.querySelector("#about") as HTMLButtonElement;


function clear(): void{
    content.textContent = "";
}

homeBtn.addEventListener("click", createHomePage);
orderBtn.addEventListener("click", createOrderPage);
aboutBtn.addEventListener("click", createAboutPage);



createHomePage();