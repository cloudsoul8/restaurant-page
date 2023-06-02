import { createDiv } from "./helper";

function loadContact() {
    const tabContainer = document.getElementsByClassName("tab-container")[0];
    tabContainer.innerHTML = "";
    console.log("contact function");

    const contactSection = createDiv("contact-section")
    const contactTextBox = createDiv("contact-text-box")
    const emailHeader = createDiv("contact-header-text")
    emailHeader.innerText = "Email"
    const emailSub = createDiv("contact-sub-text")
    emailSub.innerText = "heavyshungerhub@mann.co"
    const numberHeader = createDiv("contact-header-text")
    numberHeader.innerText = "Contact Number"
    const numberSub = createDiv("contact-sub-text")
    numberSub.innerText = "123-4321"

    const creditTextBox = createDiv("contact-text-box")
    const creditText = createDiv("contact-sub-text")
    creditText.innerText = "Images and details displayed are from TF2 Wiki and Steam Community."
    creditTextBox.style.marginTop = "8px"

    contactTextBox.appendChild(emailHeader)
    contactTextBox.appendChild(emailSub)
    contactTextBox.appendChild(document.createElement("br"))
    contactTextBox.appendChild(numberHeader)
    contactTextBox.appendChild(numberSub)

    creditTextBox.appendChild(creditText)

    contactSection.appendChild(contactTextBox)
    contactSection.appendChild(creditTextBox)
    tabContainer.appendChild(contactSection)

    contactSection.animate({opacity:[0,1]}, {duration:300, fill:"forwards"})
}

export { loadContact }