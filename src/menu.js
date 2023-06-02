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

    addMenuItem("imgs/sandvich.png", "Sandvich", "Eat to regain up to 300 health.");
    addMenuItem("imgs/steak.png", "Buffalo Steak Sandvich", "After consuming, move speed is increased, attacks mini-crit, and the player may only use melee weapons. Lasts 16 seconds.");
    addMenuItem("imgs/choco.png", "Dalokohs Bar", "Adds +50 max health for 30 seconds. Eat to gain up to 100 health.");
    addMenuItem("imgs/banana.png", "Second Banana", "+50% increase in charge recharge rate. -33% healing effect. Eat to gain health");
    addMenuItem("imgs/milk.png", "Mad Milk", "Players heal 60% of the damage done to an enemy covered with milk. Can be used to extinguish fires.");
    addMenuItem("imgs/cac.png", "Crit-a-Cola", "While effect is active: each attack mini-crits and sets Mark-For-Death for 8 seconds.");
    addMenuItem("imgs/bonk.png", "Bonk! Atomic Punch", "Drink to become invulnerable for 8 seconds. Cannot attack during this time. Damage absorbed will slow you when the effect ends.");
    addMenuItem("imgs/piss.png", "??????", "?????????????????");

    tabContainer.appendChild(menuSection);
    menuSection.animate({opacity:[0,1]}, {duration:300, fill:"forwards"})
}

export { loadMenu };