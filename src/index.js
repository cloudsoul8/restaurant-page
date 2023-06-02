import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

function loadHeader() {
    console.log("index.js init");

    function createListBtn(text, func) {
        const line = document.createElement("li");
        line.innerText = text;
        line.addEventListener("click", func)
        return line;
    }

    const content = document.createElement("div");
    content.id = "content"

    const header = document.createElement("header");
    const tabContainer = document.createElement("div");
    tabContainer.classList.add("tab-container");
    const headerNav = document.createElement("div");
    const buttonContainer = document.createElement("ul")
    const img = document.createElement("img");
    img.src = "imgs/thumbupstroke.png"

    headerNav.classList.add("header-nav");
    const h1 = document.createElement("h1")
    h1.innerText = "Heavy's Hunger Hub"
    headerNav.appendChild(h1)

    buttonContainer.classList.add("button-container")
    buttonContainer.appendChild(createListBtn("Home", loadHome))
    buttonContainer.appendChild(createListBtn("Menu", loadMenu))
    buttonContainer.appendChild(createListBtn("Contact", loadContact))

    headerNav.appendChild(buttonContainer);
    header.appendChild(headerNav);
    header.appendChild(img)
    content.appendChild(header);
    content.appendChild(tabContainer)
    document.body.appendChild(content);

    loadHome()
}

loadHeader()