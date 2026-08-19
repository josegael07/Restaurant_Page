import birriaImage from "./photos/birria.jpeg";
import churrosImage from "./photos/churros.jpeg";
import guacImage from "./photos/guacamole.jpeg";
import horchataImage from "./photos/horchata.jpeg";
import jarritosImage from "./photos/jarritos.jpeg";
import salsaImage from "./photos/salsa.jpeg";
import tacosAlPastorImage from "./photos/tacos-de-pastor.png";
import tacosDePolloImage from "./photos/tacos-de-pollo.png";
import tacosDeAsadaImage from "./photos/tacos.png";
import quesabirriasImage from "./photos/quesabirrias.png";
import elotePreparado from "./photos/elote-preparado.png";

function createOrderPage(content: HTMLDivElement): void {
    // =========================
    // MENU HEADER
    // =========================

    const menuHero = document.createElement("div");
    menuHero.classList.add("menu-hero");

    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-hero-title");
    menuTitle.textContent = "THE MENU";

    const menuSubtitle = document.createElement("div");
    menuSubtitle.classList.add("menu-hero-subtitle");
    menuSubtitle.textContent = "FRESH. BOLD. TRADITIONAL.";

    menuHero.appendChild(menuTitle);
    menuHero.appendChild(menuSubtitle);


    // =========================
    // MENU CONTAINER
    // =========================

    const menu = document.createElement("div");
    menu.classList.add("menu");


    // =========================
    // TACOS
    // =========================

    const tacosSection = document.createElement("section");
    tacosSection.classList.add("menu-section");

    const tacosTitle = document.createElement("h2");
    tacosTitle.textContent = "TACOS";

    tacosSection.appendChild(tacosTitle);


    // -------------------------
    // TACOS DE ASADA
    // -------------------------

    const asada = document.createElement("div");
    asada.classList.add("menu-item");

    const asadaImg = document.createElement("img");
    asadaImg.src = tacosDeAsadaImage;
    asadaImg.alt = "Tacos de Asada";

    const asadaInfo = document.createElement("div");
    asadaInfo.classList.add("menu-item-info");

    const asadaName = document.createElement("div");
    asadaName.classList.add("menu-item-name");
    asadaName.textContent = "Tacos de Asada";

    const asadaDescription = document.createElement("div");
    asadaDescription.classList.add("menu-item-description");
    asadaDescription.textContent =
        "Grilled carne asada, onion, cilantro and fresh salsa on handmade corn tortillas.";

    asadaInfo.appendChild(asadaName);
    asadaInfo.appendChild(asadaDescription);

    const asadaPrice = document.createElement("div");
    asadaPrice.classList.add("menu-item-price");
    asadaPrice.textContent = "$3.50";

    asada.appendChild(asadaImg);
    asada.appendChild(asadaInfo);
    asada.appendChild(asadaPrice);

    tacosSection.appendChild(asada);


    // -------------------------
    // TACOS AL PASTOR
    // -------------------------

    const pastor = document.createElement("div");
    pastor.classList.add("menu-item");

    const pastorImg = document.createElement("img");
    pastorImg.src = tacosAlPastorImage;
    pastorImg.alt = "Tacos al Pastor";

    const pastorInfo = document.createElement("div");
    pastorInfo.classList.add("menu-item-info");

    const pastorName = document.createElement("div");
    pastorName.classList.add("menu-item-name");
    pastorName.textContent = "Tacos al Pastor";

    const pastorDescription = document.createElement("div");
    pastorDescription.classList.add("menu-item-description");
    pastorDescription.textContent =
        "Marinated pork, pineapple, onion, cilantro and salsa roja.";

    pastorInfo.appendChild(pastorName);
    pastorInfo.appendChild(pastorDescription);

    const pastorPrice = document.createElement("div");
    pastorPrice.classList.add("menu-item-price");
    pastorPrice.textContent = "$3.25";

    pastor.appendChild(pastorImg);
    pastor.appendChild(pastorInfo);
    pastor.appendChild(pastorPrice);

    tacosSection.appendChild(pastor);


    // -------------------------
    // TACOS DE POLLO
    // -------------------------

    const chicken = document.createElement("div");
    chicken.classList.add("menu-item");

    const chickenImg = document.createElement("img");
    chickenImg.src = tacosDePolloImage;
    chickenImg.alt = "Tacos de Pollo";

    const chickenInfo = document.createElement("div");
    chickenInfo.classList.add("menu-item-info");

    const chickenName = document.createElement("div");
    chickenName.classList.add("menu-item-name");
    chickenName.textContent = "Tacos de Pollo";

    const chickenDescription = document.createElement("div");
    chickenDescription.classList.add("menu-item-description");
    chickenDescription.textContent =
        "Seasoned grilled chicken, onion, cilantro and house-made salsa.";

    chickenInfo.appendChild(chickenName);
    chickenInfo.appendChild(chickenDescription);

    const chickenPrice = document.createElement("div");
    chickenPrice.classList.add("menu-item-price");
    chickenPrice.textContent = "$3.25";

    chicken.appendChild(chickenImg);
    chicken.appendChild(chickenInfo);
    chicken.appendChild(chickenPrice);

    tacosSection.appendChild(chicken);


    // =========================
    // BIRRIA
    // =========================

    const birriaSection = document.createElement("section");
    birriaSection.classList.add("menu-section");

    const birriaTitle = document.createElement("h2");
    birriaTitle.textContent = "BIRRIA";

    birriaSection.appendChild(birriaTitle);


    // -------------------------
    // QUESABIRRIAS
    // -------------------------

    const quesabirria = document.createElement("div");
    quesabirria.classList.add("menu-item");

    const quesabirriaImg = document.createElement("img");
    quesabirriaImg.src = quesabirriasImage;
    quesabirriaImg.alt = "Quesabirrias";

    const quesabirriaInfo = document.createElement("div");
    quesabirriaInfo.classList.add("menu-item-info");

    const quesabirriaName = document.createElement("div");
    quesabirriaName.classList.add("menu-item-name");
    quesabirriaName.textContent = "Quesabirrias";

    const quesabirriaDescription = document.createElement("div");
    quesabirriaDescription.classList.add("menu-item-description");
    quesabirriaDescription.textContent =
        "Slow-cooked birria beef, melted cheese, onion and cilantro with a side of consommé.";

    quesabirriaInfo.appendChild(quesabirriaName);
    quesabirriaInfo.appendChild(quesabirriaDescription);

    const quesabirriaPrice = document.createElement("div");
    quesabirriaPrice.classList.add("menu-item-price");
    quesabirriaPrice.textContent = "$4.25";

    quesabirria.appendChild(quesabirriaImg);
    quesabirria.appendChild(quesabirriaInfo);
    quesabirria.appendChild(quesabirriaPrice);

    birriaSection.appendChild(quesabirria);


    // -------------------------
    // BIRRIA PLATE
    // -------------------------

    const birriaPlate = document.createElement("div");
    birriaPlate.classList.add("menu-item");

    const birriaPlateImg = document.createElement("img");
    birriaPlateImg.src = birriaImage;
    birriaPlateImg.alt = "Birria Plate";

    const birriaPlateInfo = document.createElement("div");
    birriaPlateInfo.classList.add("menu-item-info");

    const birriaPlateName = document.createElement("div");
    birriaPlateName.classList.add("menu-item-name");
    birriaPlateName.textContent = "Birria Plate";

    const birriaPlateDescription = document.createElement("div");
    birriaPlateDescription.classList.add("menu-item-description");
    birriaPlateDescription.textContent =
        "Tender slow-cooked birria served with rice, beans, tortillas and consommé.";

    birriaPlateInfo.appendChild(birriaPlateName);
    birriaPlateInfo.appendChild(birriaPlateDescription);

    const birriaPlatePrice = document.createElement("div");
    birriaPlatePrice.classList.add("menu-item-price");
    birriaPlatePrice.textContent = "$14.50";

    birriaPlate.appendChild(birriaPlateImg);
    birriaPlate.appendChild(birriaPlateInfo);
    birriaPlate.appendChild(birriaPlatePrice);

    birriaSection.appendChild(birriaPlate);


    // =========================
    // SIDES
    // =========================

    const sidesSection = document.createElement("section");
    sidesSection.classList.add("menu-section");

    const sidesTitle = document.createElement("h2");
    sidesTitle.textContent = "SIDES";

    sidesSection.appendChild(sidesTitle);


    // -------------------------
    // ELOTE
    // -------------------------

    const elote = document.createElement("div");
    elote.classList.add("menu-item");

    const eloteImg = document.createElement("img");
    eloteImg.src = elotePreparado;
    eloteImg.alt = "Elote Preparado";

    const eloteInfo = document.createElement("div");
    eloteInfo.classList.add("menu-item-info");

    const eloteName = document.createElement("div");
    eloteName.classList.add("menu-item-name");
    eloteName.textContent = "Elote Preparado";

    const eloteDescription = document.createElement("div");
    eloteDescription.classList.add("menu-item-description");
    eloteDescription.textContent =
        "Mexican street corn topped with crema, cotija cheese, chili and lime.";

    eloteInfo.appendChild(eloteName);
    eloteInfo.appendChild(eloteDescription);

    const elotePrice = document.createElement("div");
    elotePrice.classList.add("menu-item-price");
    elotePrice.textContent = "$4.00";

    elote.appendChild(eloteImg);
    elote.appendChild(eloteInfo);
    elote.appendChild(elotePrice);

    sidesSection.appendChild(elote);


    // -------------------------
    // CHIPS & SALSA
    // -------------------------

    const chips = document.createElement("div");
    chips.classList.add("menu-item");

    const chipsImg = document.createElement("img");
    chipsImg.src = salsaImage;
    chipsImg.alt = "Chips and Salsa";

    const chipsInfo = document.createElement("div");
    chipsInfo.classList.add("menu-item-info");

    const chipsName = document.createElement("div");
    chipsName.classList.add("menu-item-name");
    chipsName.textContent = "Chips & Salsa";

    const chipsDescription = document.createElement("div");
    chipsDescription.classList.add("menu-item-description");
    chipsDescription.textContent =
        "Crispy house-made tortilla chips served with fresh salsa roja.";

    chipsInfo.appendChild(chipsName);
    chipsInfo.appendChild(chipsDescription);

    const chipsPrice = document.createElement("div");
    chipsPrice.classList.add("menu-item-price");
    chipsPrice.textContent = "$5.00";

    chips.appendChild(chipsImg);
    chips.appendChild(chipsInfo);
    chips.appendChild(chipsPrice);

    sidesSection.appendChild(chips);


    // -------------------------
    // GUACAMOLE
    // -------------------------

    const guacamole = document.createElement("div");
    guacamole.classList.add("menu-item");

    const guacamoleImg = document.createElement("img");
    guacamoleImg.src = guacImage;
    guacamoleImg.alt = "Fresh Guacamole";

    const guacamoleInfo = document.createElement("div");
    guacamoleInfo.classList.add("menu-item-info");

    const guacamoleName = document.createElement("div");
    guacamoleName.classList.add("menu-item-name");
    guacamoleName.textContent = "Fresh Guacamole";

    const guacamoleDescription = document.createElement("div");
    guacamoleDescription.classList.add("menu-item-description");
    guacamoleDescription.textContent =
        "Fresh avocado, lime, onion, cilantro and jalapeño served with chips.";

    guacamoleInfo.appendChild(guacamoleName);
    guacamoleInfo.appendChild(guacamoleDescription);

    const guacamolePrice = document.createElement("div");
    guacamolePrice.classList.add("menu-item-price");
    guacamolePrice.textContent = "$7.00";

    guacamole.appendChild(guacamoleImg);
    guacamole.appendChild(guacamoleInfo);
    guacamole.appendChild(guacamolePrice);

    sidesSection.appendChild(guacamole);


    // =========================
    // DESSERTS
    // =========================

    const dessertSection = document.createElement("section");
    dessertSection.classList.add("menu-section");

    const dessertTitle = document.createElement("h2");
    dessertTitle.textContent = "DESSERTS";

    dessertSection.appendChild(dessertTitle);


    // -------------------------
    // CHURROS
    // -------------------------

    const churros = document.createElement("div");
    churros.classList.add("menu-item");

    const churrosImg = document.createElement("img");
    churrosImg.src = churrosImage;
    churrosImg.alt = "Churros";

    const churrosInfo = document.createElement("div");
    churrosInfo.classList.add("menu-item-info");

    const churrosName = document.createElement("div");
    churrosName.classList.add("menu-item-name");
    churrosName.textContent = "Churros";

    const churrosDescription = document.createElement("div");
    churrosDescription.classList.add("menu-item-description");
    churrosDescription.textContent =
        "Warm, crispy churros coated in cinnamon sugar and served with chocolate sauce.";

    churrosInfo.appendChild(churrosName);
    churrosInfo.appendChild(churrosDescription);

    const churrosPrice = document.createElement("div");
    churrosPrice.classList.add("menu-item-price");
    churrosPrice.textContent = "$5.00";

    churros.appendChild(churrosImg);
    churros.appendChild(churrosInfo);
    churros.appendChild(churrosPrice);

    dessertSection.appendChild(churros);


    // =========================
    // DRINKS
    // =========================

    const drinksSection = document.createElement("section");
    drinksSection.classList.add("menu-section");

    const drinksTitle = document.createElement("h2");
    drinksTitle.textContent = "DRINKS";

    drinksSection.appendChild(drinksTitle);


    // -------------------------
    // HORCHATA
    // -------------------------

    const horchata = document.createElement("div");
    horchata.classList.add("menu-item");

    const horchataImg = document.createElement("img");
    horchataImg.src = horchataImage;
    horchataImg.alt = "Horchata";

    const horchataInfo = document.createElement("div");
    horchataInfo.classList.add("menu-item-info");

    const horchataName = document.createElement("div");
    horchataName.classList.add("menu-item-name");
    horchataName.textContent = "Horchata";

    const horchataDescription = document.createElement("div");
    horchataDescription.classList.add("menu-item-description");
    horchataDescription.textContent =
        "Traditional Mexican rice drink flavored with cinnamon and vanilla.";

    horchataInfo.appendChild(horchataName);
    horchataInfo.appendChild(horchataDescription);

    const horchataPrice = document.createElement("div");
    horchataPrice.classList.add("menu-item-price");
    horchataPrice.textContent = "$3.50";

    horchata.appendChild(horchataImg);
    horchata.appendChild(horchataInfo);
    horchata.appendChild(horchataPrice);

    drinksSection.appendChild(horchata);


    // -------------------------
    // JARRITOS
    // -------------------------

    const jarritos = document.createElement("div");
    jarritos.classList.add("menu-item");

    const jarritosImg = document.createElement("img");
    jarritosImg.src = jarritosImage;
    jarritosImg.alt = "Jarritos";

    const jarritosInfo = document.createElement("div");
    jarritosInfo.classList.add("menu-item-info");

    const jarritosName = document.createElement("div");
    jarritosName.classList.add("menu-item-name");
    jarritosName.textContent = "Jarritos";

    const jarritosDescription = document.createElement("div");
    jarritosDescription.classList.add("menu-item-description");
    jarritosDescription.textContent =
        "Choose from a variety of classic Mexican fruit flavors.";

    jarritosInfo.appendChild(jarritosName);
    jarritosInfo.appendChild(jarritosDescription);

    const jarritosPrice = document.createElement("div");
    jarritosPrice.classList.add("menu-item-price");
    jarritosPrice.textContent = "$2.75";

    jarritos.appendChild(jarritosImg);
    jarritos.appendChild(jarritosInfo);
    jarritos.appendChild(jarritosPrice);

    drinksSection.appendChild(jarritos);


    // =========================
    // ADD SECTIONS TO MENU
    // =========================

    menu.appendChild(tacosSection);
    menu.appendChild(birriaSection);
    menu.appendChild(sidesSection);
    menu.appendChild(dessertSection);
    menu.appendChild(drinksSection);


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

    contactWays.appendChild(phoneContact);
    contactWays.appendChild(emailContact);

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

    content.appendChild(menuHero);
    content.appendChild(menu);
    content.appendChild(footer);
}

export { createOrderPage };