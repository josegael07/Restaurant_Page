import freshImage from "./photos/fresh.webp";
import tacoImage from "./photos/tacos.png";
import birriaImage from "./photos/quesabirrias.png";
import eloteImage from "./photos/elote-preparado.png"

import { createOrderPage } from "./Order.js";

// Slogan: Tacos. Flavor. Tradition
const slogan = document.createElement("div") as HTMLDivElement;
slogan.classList.add("slogan");
// Description of Restaurant
const description = document.createElement("div") as HTMLDivElement;
description.classList.add("description");
// Favorites Section
const favs = document.createElement("div") as HTMLDivElement;
favs.classList.add("favs");
// Footer
const footer = document.createElement("footer") as HTMLDivElement;

function createHomePage(): void {
    // Slogan Create and Add
    const tacoSlogan = document.createElement("div") as HTMLDivElement;
    tacoSlogan.classList.add("slogan-container");
    tacoSlogan.id = "tacos";

    const flavorSlogan = document.createElement("div") as HTMLDivElement;
    flavorSlogan.classList.add("slogan-container");
    flavorSlogan.id = "flavor";

    const traditionSlogan = document.createElement("div") as HTMLDivElement;
    traditionSlogan.classList.add("slogan-container");
    traditionSlogan.id = "tradition";

    slogan.appendChild(tacoSlogan);
    slogan.appendChild(flavorSlogan);
    slogan.appendChild(traditionSlogan);

    // Description creation and add
    const descTitle = document.createElement("div") as HTMLDivElement;
    descTitle.classList.add("title");
    descTitle.textContent = "MADE THE RIGHT WAY";

    const desc = document.createElement("div") as HTMLDivElement;
    desc.classList.add("desc");
    // Description
    const fresh = document.createElement("img") as HTMLImageElement;
    fresh.src = freshImage;
    fresh.alt = "Fresh";

    const descContainer = document.createElement("div") as HTMLDivElement;
    descContainer.classList.add("container");
    descContainer.textContent =
        "At EL COMAL, we bring the bold, vibrant flavors of Mexican street food straight to your table. Our menu is built around fresh ingredients, handmade tortillas, slow-cooked meats, and traditional recipes with a modern twist. From sizzling carne asada and smoky al pastor to tender birria and crispy quesabirrias, every dish is prepared with care and packed with flavor. Whether you're stopping by for a quick lunch, grabbing tacos with friends, or sitting down for a full meal, there's something for everyone. Pair your tacos with freshly made guacamole, street-style elote, crispy chips and house-made salsa, then finish things off with a warm churro or a refreshing horchata. We believe great food doesn't have to be complicated—it just needs fresh ingredients, bold flavors, and a lot of love.";
    // Inside ORDER button 
    const orderNowBtn = document.createElement("button") as HTMLButtonElement;
    orderNowBtn.id = "order-now";
    orderNowBtn.textContent = "[ ORDER NOW]";

    // ADD EVENT LISTENER

    descContainer.appendChild(orderNowBtn);
    desc.appendChild(fresh);
    desc.appendChild(descContainer);
    description.appendChild(descTitle);
    description.appendChild(desc);

    // Favorite Food Section
    const favTitle = document.createElement("div") as HTMLDivElement;
    favTitle.classList.add("title");
    favTitle.textContent = "OUR FAVORITES";
    favs.appendChild(favTitle);

    const foods = document.createElement("div") as HTMLDivElement;
    foods.classList.add("foods");
    // Specific foods
    // Taco
    const tacos = document.createElement("div") as HTMLDivElement;
    tacos.classList.add("fav-tacos");
    // Taco Image
    const tacoImg = document.createElement("img") as HTMLImageElement;
    tacoImg.src = tacoImage;
    tacoImg.alt = "Tacos";
    const tacoDesc = document.createElement("div") as HTMLDivElement;
    tacoDesc.classList.add("name");
    tacoDesc.textContent = "Tacos de Asada";
    const tacoPrice = document.createElement("div") as HTMLDivElement;
    tacoPrice.classList.add("price");
    tacoPrice.textContent = "$3.50";

    tacos.appendChild(tacoImg);
    tacos.appendChild(tacoDesc);
    tacos.appendChild(tacoPrice);
    favs.append(tacos);

    // Birria
    const birria = document.createElement("div") as HTMLDivElement;
    tacos.classList.add("fav-birria");
    // Birria Image
    const birriaImg = document.createElement("img") as HTMLImageElement;
    birriaImg.src = birriaImage;
    birriaImg.alt = "Birria";
    const birriaDesc = document.createElement("div") as HTMLDivElement;
    birria.classList.add("name");
    birriaDesc.textContent = "Quesabirria";
    const birriaPrice = document.createElement("div") as HTMLDivElement;
    birriaPrice.classList.add("price");
    birriaPrice.textContent = "$4.25";

    birria.appendChild(birriaImg);
    birria.appendChild(birriaDesc);
    birria.appendChild(birriaPrice);
    favs.append(birria);

    // Elote
    const elote = document.createElement("div") as HTMLDivElement;
    elote.classList.add("fav-elote");
    // Taco Image
    const eloteImg = document.createElement("img") as HTMLImageElement;
    eloteImg.src = eloteImage;
    eloteImg.alt = "Elote";
    const eloteDesc = document.createElement("div") as HTMLDivElement;
    elote.classList.add("name");
    eloteDesc.textContent = "Elote Preparado";
    const elotePrice = document.createElement("div") as HTMLDivElement;
    elotePrice.classList.add("price");
    elotePrice.textContent = "$4.00";

    elote.appendChild(eloteImg);
    elote.appendChild(eloteDesc);
    elote.appendChild(elotePrice);
    favs.append(elote);


    // Footer
    const contactContainer = document.createElement("div") as HTMLDivElement;
    contactContainer.classList.add("contact-container");

    // Footer Title
    const footerTitle = document.createElement("div") as HTMLDivElement;
    footerTitle.classList.add("footer-title");
    footerTitle.textContent = "Contact Us";
    footer.appendChild(footerTitle)

    // Contact Ways
    const contactWays = document.createElement("div") as HTMLDivElement;
    contactWays.classList.add("footer-container", "contact");
    // Phone Contact
    const phoneContact = document.createElement("div") as HTMLDivElement;
    phoneContact.classList.add("contact-way");
    // Phone Details
    const phoneTitle = document.createElement("div") as HTMLDivElement;
    phoneTitle.textContent = "Phone";
    const phoneNum = document.createElement("div") as HTMLDivElement;
    phoneNum.textContent = "123-456-7890";

    phoneContact.appendChild(phoneTitle);
    phoneContact.appendChild(phoneNum);
    contactWays.appendChild(phoneContact);

    // Email Contact
    const emailContact = document.createElement("div") as HTMLDivElement;
    phoneContact.classList.add("contact-way");
    // Email Details
    const emailTitle = document.createElement("div") as HTMLDivElement;
    emailTitle.textContent = "Email";
    const emailAt = document.createElement("a") as HTMLAnchorElement;
    emailAt.href = "mailto:tacosrgud@gmail.com";
    emailAt.textContent = "123-456-7890";

    emailContact.appendChild(emailTitle);
    emailContact.appendChild(emailAt);
    contactWays.appendChild(emailContact);

    contactContainer.appendChild(contactWays);
    footer.appendChild(contactContainer);


    // Address
    const addyContainer = document.createElement("div") as HTMLDivElement;
    addyContainer.classList.add("footer-container");
    // Addy Title
    const addyTitle = document.createElement("div") as HTMLDivElement;
    addyTitle.classList.add("footer-title");
    addyTitle.textContent = "Title";
    const addy = document.createElement("div") as HTMLDivElement;
    addy.textContent = "1234 Adress Dr 12345";

    addyContainer.appendChild(addyTitle);
    addyContainer.appendChild(addy);
    footer.appendChild(addyContainer);

    // Hours
    const hoursContainer = document.createElement("div") as HTMLDivElement;
    hoursContainer.classList.add("footer-container", "hours");
    // Hours Title
    const hoursTitle = document.createElement("div") as HTMLDivElement;
    hoursTitle.classList.add("footer-title");
    hoursTitle.textContent = "Hours";
    const weekdays = document.createElement("div") as HTMLDivElement;
    const lateDays = document.createElement("div") as HTMLDivElement;
    const sunday = document.createElement("div") as HTMLDivElement;
    weekdays.textContent = "Mon - Thurs: 9am - 12am";
    lateDays.textContent = "Fri - Sat: 9am - 2am";
    sunday.textContent = "Sun: 10am - 10pm";

    hoursContainer.appendChild(hoursTitle);
    hoursContainer.appendChild(weekdays);
    hoursContainer.appendChild(lateDays);
    hoursContainer.appendChild(sunday);
    footer.appendChild(hoursContainer);
}

export { createHomePage };
