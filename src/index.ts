// header
const menuButton = document.querySelector(".fa-bars")
const navMenu = document.querySelector("#navMenu")
let displayNone: string = "displayNone"
menuButton.addEventListener("click", ()=>{
    navMenu.classList.toggle(`${displayNone}`)
})
