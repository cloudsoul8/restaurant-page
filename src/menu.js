import { createDiv } from "./helper";

function loadMenu() {
    const tabContainer = document.getElementsByClassName("tab-container")[0];
    tabContainer.innerHTML = "";
    console.log("menu function");

    const menuSection = createDiv("menu-section")

    function addMenuItem(imgsrc, title, desc) {
        const item = createDiv("menu-item")
        const itemDetails = createDiv("item-details")
        const img = document.createElement("img");
        img.src = imgsrc;
        const itemTitle = createDiv("item-title");
        itemTitle.innerText = title;
        const itemDesc = createDiv("item-desc");
        itemDesc.innerText = desc;

        
        itemDetails.appendChild(itemTitle);
        itemDetails.appendChild(itemDesc);
        item.appendChild(img);
        item.appendChild(itemDetails)
        menuSection.appendChild(item);
    }

    addMenuItem("imgs/sandvich.png", "Sandvich", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra lectus tortor, a porta mauris porta non. Aliquam vel tempor magna. Praesent in finibus orci");
    addMenuItem("imgs/steak.png", "Buffalo Steak Sandvich", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra lectus tortor, a porta mauris porta non. Aliquam vel tempor magna. Praesent in finibus orci");
    addMenuItem("imgs/choco.png", "Dalokohs Bar", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra lectus tortor, a porta mauris porta non. Aliquam vel tempor magna. Praesent in finibus orci");
    addMenuItem("imgs/banana.png", "Second Banana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra lectus tortor, a porta mauris porta non. Aliquam vel tempor magna. Praesent in finibus orci");
    addMenuItem("imgs/milk.png", "Mad Milk", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra lectus tortor, a porta mauris porta non. Aliquam vel tempor magna. Praesent in finibus orci");
    addMenuItem("imgs/cac.png", "Crit-a-Cola", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra lectus tortor, a porta mauris porta non. Aliquam vel tempor magna. Praesent in finibus orci");
    addMenuItem("imgs/bonk.png", "Bonk! Atomic Punch", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra lectus tortor, a porta mauris porta non. Aliquam vel tempor magna. Praesent in finibus orci");
    addMenuItem("imgs/piss.png", "??????", "?????????????????");

    tabContainer.appendChild(menuSection);
    menuSection.animate({opacity:[0,1]}, {duration:300, fill:"forwards"})
}

export { loadMenu };