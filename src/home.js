import { createDiv } from "./helper";

function loadHome() {
    console.log("home function");

    const tabContainer = document.getElementsByClassName("tab-container")[0];
    tabContainer.innerHTML = "";

    const homeSection = createDiv("home-section");
    //homeSection.style.backgroundColor = "#FFFFFF"
    const homeText = createDiv("home-text");
    homeText.innerText = "Have a taste of mercenary-approved delicacies, all in one shop!";
    
    const locationText = createDiv("location-text");
    const img = document.createElement("img");
    img.src = "imgs/2Fort.png";
    locationText.innerText = "Location";
    const subtext = document.createElement("p")
    subtext.classList.add("sub-text")
    subtext.innerText = "2 Fort"

    locationText.appendChild(document.createElement("br"))
    locationText.appendChild(img)
    locationText.appendChild(subtext)
    homeSection.appendChild(homeText);
    homeSection.appendChild(locationText);
    tabContainer.appendChild(homeSection);

    homeSection.animate({opacity:[0,1]}, {duration:300, fill:"forwards"})
}

export { loadHome };