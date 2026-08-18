import freshImage from "./photos/fresh.webp";
import tacoImage from "./photos/tacos.png";
import birriaImage from "./photos/quesabirrias.png";
import eloteImage from "./photos/elote-preparado.png";
import { createOrderPage } from "./Order.js";
function createHomePage(content) {
    // =========================
    // SLOGAN
    // =========================
    const slogan = document.createElement("div");
    slogan.classList.add("slogan");
    const tacoSlogan = document.createElement("div");
    tacoSlogan.classList.add("slogan-container");
    tacoSlogan.id = "tacos";
    tacoSlogan.textContent = "Tacos.";
    const flavorSlogan = document.createElement("div");
    flavorSlogan.classList.add("slogan-container");
    flavorSlogan.id = "flavor";
    flavorSlogan.textContent = "Flavor.";
    const traditionSlogan = document.createElement("div");
    traditionSlogan.classList.add("slogan-container");
    traditionSlogan.id = "tradition";
    traditionSlogan.textContent = "Tradition.";
    slogan.appendChild(tacoSlogan);
    slogan.appendChild(flavorSlogan);
    slogan.appendChild(traditionSlogan);
    // =========================
    // DESCRIPTION
    // =========================
    const description = document.createElement("div");
    description.classList.add("description");
    const descTitle = document.createElement("div");
    descTitle.classList.add("title");
    descTitle.textContent = "MADE THE RIGHT WAY";
    const desc = document.createElement("div");
    desc.classList.add("desc");
    // Fresh image
    const fresh = document.createElement("img");
    fresh.src = freshImage;
    fresh.alt = "Fresh";
    // Description text/container
    const descContainer = document.createElement("div");
    descContainer.classList.add("container");
    descContainer.textContent =
        "At EL COMAL, we bring the bold, vibrant flavors of Mexican street food straight to your table. " +
            "Our menu is built around fresh ingredients, handmade tortillas, slow-cooked meats, and traditional " +
            "recipes with a modern twist. From sizzling carne asada and smoky al pastor to tender birria and " +
            "crispy quesabirrias, every dish is prepared with care and packed with flavor. Whether you're stopping " +
            "by for a quick lunch, grabbing tacos with friends, or sitting down for a full meal, there's something " +
            "for everyone. Pair your tacos with freshly made guacamole, street-style elote, crispy chips and " +
            "house-made salsa, then finish things off with a warm churro or a refreshing horchata. We believe " +
            "great food doesn't have to be complicated—it just needs fresh ingredients, bold flavors, and a lot of love.";
    // Order button
    const orderNowBtn = document.createElement("button");
    orderNowBtn.id = "order-now";
    orderNowBtn.type = "button";
    orderNowBtn.textContent = "[ ORDER NOW ]";
    // Order button functionality
    orderNowBtn.addEventListener("click", () => {
        createOrderPage(content);
    });
    descContainer.appendChild(orderNowBtn);
    desc.appendChild(fresh);
    desc.appendChild(descContainer);
    description.appendChild(descTitle);
    description.appendChild(desc);
    // =========================
    // FAVORITES
    // =========================
    const favs = document.createElement("div");
    favs.classList.add("favs");
    const favTitle = document.createElement("div");
    favTitle.classList.add("title");
    favTitle.textContent = "OUR FAVORITES";
    favs.appendChild(favTitle);
    const foods = document.createElement("div");
    foods.classList.add("foods");
    // -------------------------
    // TACOS
    // -------------------------
    const tacos = document.createElement("div");
    tacos.classList.add("fav-tacos");
    const tacoImg = document.createElement("img");
    tacoImg.src = tacoImage;
    tacoImg.alt = "Tacos";
    const tacoDesc = document.createElement("div");
    tacoDesc.classList.add("name");
    tacoDesc.textContent = "Tacos de Asada";
    const tacoPrice = document.createElement("div");
    tacoPrice.classList.add("price");
    tacoPrice.textContent = "$3.50";
    tacos.appendChild(tacoImg);
    tacos.appendChild(tacoDesc);
    tacos.appendChild(tacoPrice);
    // -------------------------
    // BIRRIA
    // -------------------------
    const birria = document.createElement("div");
    birria.classList.add("fav-birria");
    const birriaImg = document.createElement("img");
    birriaImg.src = birriaImage;
    birriaImg.alt = "Quesabirrias";
    const birriaDesc = document.createElement("div");
    birriaDesc.classList.add("name");
    birriaDesc.textContent = "Quesabirrias";
    const birriaPrice = document.createElement("div");
    birriaPrice.classList.add("price");
    birriaPrice.textContent = "$4.25";
    birria.appendChild(birriaImg);
    birria.appendChild(birriaDesc);
    birria.appendChild(birriaPrice);
    // -------------------------
    // ELOTE
    // -------------------------
    const elote = document.createElement("div");
    elote.classList.add("fav-elote");
    const eloteImg = document.createElement("img");
    eloteImg.src = eloteImage;
    eloteImg.alt = "Elote";
    const eloteDesc = document.createElement("div");
    eloteDesc.classList.add("name");
    eloteDesc.textContent = "Elote Preparado";
    const elotePrice = document.createElement("div");
    elotePrice.classList.add("price");
    elotePrice.textContent = "$4.00";
    elote.appendChild(eloteImg);
    elote.appendChild(eloteDesc);
    elote.appendChild(elotePrice);
    // Add foods to foods container
    foods.appendChild(tacos);
    foods.appendChild(birria);
    foods.appendChild(elote);
    // Add foods container to favorites
    favs.appendChild(foods);
    // =========================
    // FOOTER
    // =========================
    const footer = document.createElement("footer");
    // -------------------------
    // CONTACT
    // -------------------------
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    const contactTitle = document.createElement("div");
    contactTitle.classList.add("footer-title");
    contactTitle.textContent = "Contact Us";
    const contactWays = document.createElement("div");
    contactWays.classList.add("footer-container", "contact");
    // Phone
    const phoneContact = document.createElement("div");
    phoneContact.classList.add("contact-way");
    const phoneTitle = document.createElement("div");
    phoneTitle.textContent = "Phone";
    const phoneNum = document.createElement("div");
    phoneNum.textContent = "123-456-7890";
    phoneContact.appendChild(phoneTitle);
    phoneContact.appendChild(phoneNum);
    // Email
    const emailContact = document.createElement("div");
    emailContact.classList.add("contact-way");
    const emailTitle = document.createElement("div");
    emailTitle.textContent = "Email";
    const emailAt = document.createElement("a");
    emailAt.href = "mailto:tacosrgud@gmail.com";
    emailAt.textContent = "tacosrgud@gmail.com";
    emailContact.appendChild(emailTitle);
    emailContact.appendChild(emailAt);
    // Add phone and email
    contactWays.appendChild(phoneContact);
    contactWays.appendChild(emailContact);
    // Add contact title and contact information
    contactContainer.appendChild(contactTitle);
    contactContainer.appendChild(contactWays);
    footer.appendChild(contactContainer);
    // -------------------------
    // ADDRESS
    // -------------------------
    const addyContainer = document.createElement("div");
    addyContainer.classList.add("footer-container");
    const addyTitle = document.createElement("div");
    addyTitle.classList.add("footer-title");
    addyTitle.textContent = "Address";
    const addy = document.createElement("div");
    addy.textContent = "1234 Adress Dr 12345";
    addyContainer.appendChild(addyTitle);
    addyContainer.appendChild(addy);
    footer.appendChild(addyContainer);
    // -------------------------
    // HOURS
    // -------------------------
    const hoursContainer = document.createElement("div");
    hoursContainer.classList.add("footer-container", "hours");
    const hoursTitle = document.createElement("div");
    hoursTitle.classList.add("footer-title");
    hoursTitle.textContent = "Hours";
    const weekdays = document.createElement("div");
    weekdays.textContent = "Mon - Thurs: 9am - 12am";
    const lateDays = document.createElement("div");
    lateDays.textContent = "Fri - Sat: 9am - 2am";
    const sunday = document.createElement("div");
    sunday.textContent = "Sun: 10am - 10pm";
    hoursContainer.appendChild(hoursTitle);
    hoursContainer.appendChild(weekdays);
    hoursContainer.appendChild(lateDays);
    hoursContainer.appendChild(sunday);
    footer.appendChild(hoursContainer);
    // =========================
    // ADD EVERYTHING TO CONTENT
    // =========================
    content.appendChild(slogan);
    content.appendChild(description);
    content.appendChild(favs);
    content.appendChild(footer);
}
export { createHomePage };
//# sourceMappingURL=Home.js.map