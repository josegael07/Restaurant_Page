function createAboutPage(content: HTMLDivElement): void {

    // =========================
    // ABOUT HERO
    // =========================

    const aboutHero = document.createElement("div");
    aboutHero.classList.add("about-hero");

    const aboutTitle = document.createElement("div");
    aboutTitle.classList.add("about-hero-title");
    aboutTitle.textContent = "ABOUT EL COMAL";

    const aboutSubtitle = document.createElement("div");
    aboutSubtitle.classList.add("about-hero-subtitle");
    aboutSubtitle.textContent = "BUILT ON FLAVOR. ROOTED IN TRADITION.";

    aboutHero.appendChild(aboutTitle);
    aboutHero.appendChild(aboutSubtitle);


    // =========================
    // ABOUT CONTENT
    // =========================

    const about = document.createElement("div");
    about.classList.add("about");


    // =========================
    // OUR STORY
    // =========================

    const storySection = document.createElement("section");
    storySection.classList.add("about-section");

    const storyTitle = document.createElement("h2");
    storyTitle.textContent = "OUR STORY";

    const storyText = document.createElement("p");
    storyText.textContent =
        "EL COMAL started with a simple idea: good food should bring people together. " +
        "Inspired by the street food, family kitchens, and traditional flavors of Mexico, " +
        "we wanted to create a place where every meal feels familiar, fresh, and full of life.";

    storySection.appendChild(storyTitle);
    storySection.appendChild(storyText);


    // =========================
    // OUR FOOD
    // =========================

    const foodSection = document.createElement("section");
    foodSection.classList.add("about-section");

    const foodTitle = document.createElement("h2");
    foodTitle.textContent = "OUR FOOD";

    const foodText = document.createElement("p");
    foodText.textContent =
        "Everything we serve starts with fresh ingredients and traditional techniques. " +
        "Our tortillas are made to complement every taco, our meats are slow-cooked and seasoned " +
        "with care, and our salsas are prepared fresh. From tacos and birria to elote and churros, " +
        "we keep our food simple, bold, and full of flavor.";

    foodSection.appendChild(foodTitle);
    foodSection.appendChild(foodText);


    // =========================
    // OUR PHILOSOPHY
    // =========================

    const philosophySection = document.createElement("section");
    philosophySection.classList.add("about-section");

    const philosophyTitle = document.createElement("h2");
    philosophyTitle.textContent = "OUR PHILOSOPHY";

    const philosophyText = document.createElement("p");
    philosophyText.textContent =
        "We believe great food doesn't need to be complicated. It needs quality ingredients, " +
        "time, tradition, and a little love. Whether you're grabbing a few tacos on your lunch " +
        "break or sitting down with friends for a full meal, our goal is to make every visit memorable.";

    philosophySection.appendChild(philosophyTitle);
    philosophySection.appendChild(philosophyText);


    // =========================
    // QUOTE
    // =========================

    const quote = document.createElement("div");
    quote.classList.add("about-quote");
    quote.textContent = "\"Tacos. Flavor. Tradition.\"";


    // =========================
    // FAKE ORDER FORM
    // =========================

    const formContainer = document.createElement("div");
    formContainer.classList.add("about-form-container");

    const formTitle = document.createElement("h2");
    formTitle.classList.add("about-form-title");
    formTitle.textContent = "PLACE AN ORDER";


    const form = document.createElement("form");
    form.classList.add("about-form");


    // =========================
    // NAME
    // =========================

    const nameGroup = document.createElement("div");
    nameGroup.classList.add("form-group");

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name";
    nameLabel.htmlFor = "customer-name";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "customer-name";
    nameInput.placeholder = "Enter your name";

    nameGroup.appendChild(nameLabel);
    nameGroup.appendChild(nameInput);


    // =========================
    // ADDRESS
    // =========================

    const addressGroup = document.createElement("div");
    addressGroup.classList.add("form-group");

    const addressLabel = document.createElement("label");
    addressLabel.textContent = "Address";
    addressLabel.htmlFor = "customer-address";

    const addressInput = document.createElement("input");
    addressInput.type = "text";
    addressInput.id = "customer-address";
    addressInput.placeholder = "Enter your address";

    addressGroup.appendChild(addressLabel);
    addressGroup.appendChild(addressInput);


    // =========================
    // ORDER
    // =========================

    const orderGroup = document.createElement("div");
    orderGroup.classList.add("form-group");

    const orderLabel = document.createElement("label");
    orderLabel.textContent = "Order";
    orderLabel.htmlFor = "customer-order";

    const orderTextarea = document.createElement("textarea");
    orderTextarea.id = "customer-order";
    orderTextarea.placeholder =
        "Example: 3 tacos de asada, 1 quesabirria, 1 elote...";

    orderGroup.appendChild(orderLabel);
    orderGroup.appendChild(orderTextarea);


    // =========================
    // FORM MESSAGE
    // =========================

    const message = document.createElement("div");
    message.classList.add("order-message");


    // =========================
    // SUBMIT BUTTON
    // =========================

    const submitButton = document.createElement("button");
    submitButton.id = "place-order";
    submitButton.type = "submit";
    submitButton.textContent = "[ PLACE ORDER ]";


    // =========================
    // FAKE SUBMIT
    // =========================

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        form.reset();

        message.textContent = "ORDER CLEARED";
    });


    // =========================
    // BUILD FORM
    // =========================

    form.appendChild(nameGroup);
    form.appendChild(addressGroup);
    form.appendChild(orderGroup);
    form.appendChild(message);
    form.appendChild(submitButton);

    formContainer.appendChild(formTitle);
    formContainer.appendChild(form);


    // =========================
    // FOOTER
    // =========================

    const footer = document.createElement("footer");


    // Contact

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    const contactTitle = document.createElement("div");
    contactTitle.classList.add("footer-title");
    contactTitle.textContent = "Contact Us";

    const contactWays = document.createElement("div");
    contactWays.classList.add("footer-container", "contact");


    const phoneContact = document.createElement("div");
    phoneContact.classList.add("contact-way");

    const phoneTitle = document.createElement("div");
    phoneTitle.textContent = "Phone";

    const phoneNum = document.createElement("div");
    phoneNum.textContent = "123-456-7890";

    phoneContact.appendChild(phoneTitle);
    phoneContact.appendChild(phoneNum);


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


    // Address

    const addressContainer = document.createElement("div");
    addressContainer.classList.add("footer-container");

    const addressTitle = document.createElement("div");
    addressTitle.classList.add("footer-title");
    addressTitle.textContent = "Address";

    const address = document.createElement("div");
    address.textContent = "1234 Adress Dr 12345";

    addressContainer.appendChild(addressTitle);
    addressContainer.appendChild(address);

    footer.appendChild(addressContainer);


    // Hours

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
    // ADD EVERYTHING
    // =========================

    about.appendChild(storySection);
    about.appendChild(foodSection);
    about.appendChild(philosophySection);
    about.appendChild(quote);
    about.appendChild(formContainer);

    content.appendChild(aboutHero);
    content.appendChild(about);
    content.appendChild(footer);
}


export { createAboutPage };