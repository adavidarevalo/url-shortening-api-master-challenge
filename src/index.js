// header
var menuButton = document.querySelector(".fa-bars");
var navMenu = document.querySelector("#navMenu");
var displayNone = "displayNone";
menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("" + displayNone);
});
