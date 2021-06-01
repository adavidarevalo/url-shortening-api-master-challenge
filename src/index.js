// header
var menuButton = document.querySelector(".fa-bars");
var navMenu = document.querySelector("#navMenu");
var displayNone = "displayNone";
menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("" + displayNone);
});
// Api 
var mainInputUrl = document.querySelector("#mainInputUrl");
var mainButtonUrl = document.querySelector("#mainButtonUrl");
var Api = "https://api.shrtco.de/v2/shorten?url=";
var mainShortenResult = document.querySelector("#mainShortenResult");
var buttonLoader = document.querySelector("#buttonLoader");
mainButtonUrl.addEventListener("click", function () {
    if (mainInputUrl.value == "") {
        console.log("Ingrese un dato");
    }
    else {
        checkUrl(mainInputUrl.value);
    }
});
function checkUrl(url) {
    if (url.includes(".")) {
        var makeApi = "" + Api + url;
        urlFetch(makeApi);
        buttonLoader.innerHTML = "\n    <img class=\"button-loader\" src=\"https://acegif.com/wp-content/uploads/loading-11.gif\" alt=\"loader git\">\n    ";
    }
    else {
        console.log("This Url is not Valid");
    }
}
function urlFetch(url) {
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (data) { return templateResult(data); })["catch"](function (err) { return console.log("Error"); });
}
function templateResult(data) {
    console.log(data);
    var infoDiv = document.createElement("div");
    var infoP = document.createElement("p");
    infoP.innerText = "" + data;
    infoDiv.appendChild(infoP);
    mainShortenResult.appendChild(infoDiv);
    buttonLoader.innerHTML = "";
}
