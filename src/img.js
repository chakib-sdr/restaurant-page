import forkIcon from "./restaurant-fork-svgrepo-com.svg";
import dishIcon from "./pasta-svgrepo-com.svg";
import dessertIcon from "./cake-svgrepo-com.svg"
import drinkIcon from "./drinks-party-svgrepo-com.svg";
import snackIcone from "./pretzel-svgrepo-com.svg";

export const img = document.createElement("img")
export const buttons = document.querySelectorAll("button")
export const containersvg = document.querySelector(".containersvg")

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