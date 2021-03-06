import "./style.css";
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
var mainMessageError = document.querySelector("#mainMessageError");
mainButtonUrl.addEventListener("click", function () {
    notError();
    if (mainInputUrl.value == "") {
        errorMessage();
    }
    else {
        checkUrl(mainInputUrl.value);
    }
});
function checkUrl(url) {
    if (url.includes(" ")) {
        errorMessage();
        console.log(mainInputUrl.value == "");
    }
    else if (url.includes(".")) {
        var makeApi = "" + Api + url;
        urlFetch(makeApi);
        buttonLoader.innerHTML = `
        <div class="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
        `;
        //delete error message
        notError();
    }
}
function urlFetch(url) {
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (data) { return templateResult(data.result.short_link); })["catch"](function (err) { return apiError(err); });
}
const CopyText = () =>{
    alert('Yes Baby')
}
function templateResult(data) {
    console.log(data);
    var infoDiv = document.createElement("div");
    infoDiv.innerHTML = `<div class="main-url_container">
                            <div class="origin-Url">
                                <p class="displayNone">${mainInputUrl.value}</p>
                            </div>
                            <div class="url-container_result">
                                <a href="https://${data}" target="_blank" class="main-url">${data}</a>    
                                <button id="urlCopy" onclick="{navigator.clipboard.writeText('${data}')}">Copy</button>    
                            </div>  
                        </div>  `;
    mainShortenResult.append(infoDiv);
    buttonLoader.innerHTML = "";
    mainInputUrl.value = "";
}
function apiError(data) {
    console.log(data);
    var infoDiv = document.createElement("div");
    infoDiv.innerHTML = "\n  <p>That Url is not accept. Try again.</p>\n  ";
    mainShortenResult.appendChild(infoDiv);
    buttonLoader.innerHTML = "";
}
function errorMessage() {
    mainInputUrl.style = "border: 1px solid red;";
    mainMessageError.innerHTML = "\n    <p>You need to review your url. Try again</p>\n    ";
}
function notError() {
    mainInputUrl.style = "border: none;";
    mainMessageError.innerHTML = "\n    <p></p>\n    ";
}
