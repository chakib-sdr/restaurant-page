import forkIcon from "./restaurant-fork-svgrepo-com.svg";
import dishIcon from "./pasta-svgrepo-com.svg";
import dessertIcon from "./cake-svgrepo-com.svg"
import drinkIcon from "./drinks-party-svgrepo-com.svg";
import snackIcone from "./pretzel-svgrepo-com.svg";

export const img = document.createElement("img")
export const buttons = document.querySelectorAll("button")
export const containersvg = document.querySelector(".containersvg")
export const menu = document.querySelector("#menu")
export const about = document.querySelector("#about")
export const home = document.querySelector(".home")
export const display = document.querySelector(".display")
export const information = document.querySelector(".information")
export const time = document.querySelector(".time")
export const contact = document.querySelector("#contact")
export const contactcontainer = document.querySelector(".contactcontainer")
img.className = "img"
img.src = forkIcon
containersvg.appendChild(img)

buttons.forEach(btn => {
     const  img1 = document.createElement("img")
     img1.className = "img1"
    if(btn.textContent ==="Dishes"){
        img1.src = dishIcon
        btn.appendChild(img1)
    }
    if(btn.textContent === "Dessert"){
        img1.src = dessertIcon
        btn.appendChild(img1)
    }
    if(btn.textContent === "Drinks"){
        img1.src = drinkIcon
        btn.appendChild(img1)
    }
    if(btn.textContent === "Snacks"){
        img1.src = snackIcone
        btn.appendChild(img1)
    }
});

menu.addEventListener("click", () =>{
    home.style.display = "flex"
    display.style.display = "block"
    information.style.display = "none"
    time.style.display = "none"
    contactcontainer.style.display = "none"
})
about.addEventListener("click", () =>{
    time.style.display = "block"
    home.style.display = "none"
    display.style.display = "none"
    information.style.display = "block"
    contactcontainer.style.display = "none"
})
contact.addEventListener("click", () =>{
    contactcontainer.style.display = "flex"
    contactcontainer.style.flexDirection = "column"
    contactcontainer.style.justifyContent = "center"
    contactcontainer.style.alignItems = "center"
    
    home.style.display = "none"
    display.style.display = "none"
    information.style.display = "none"
    time.style.display = "none"
})
