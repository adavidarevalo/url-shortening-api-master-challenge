// header
const menuButton:Element = document.querySelector(".fa-bars")
const navMenu = document.querySelector("#navMenu")
let displayNone: string = "displayNone"
menuButton.addEventListener("click", ()=>{
    navMenu.classList.toggle(`${displayNone}`)
})
// Api 
const mainInputUrl: any = document.querySelector("#mainInputUrl")
const mainButtonUrl: Element = document.querySelector("#mainButtonUrl")
const Api: string= "https://api.shrtco.de/v2/shorten?url="
const mainShortenResult: Element = document.querySelector("#mainShortenResult")
let buttonLoader: Element = document.querySelector("#buttonLoader")
let mainMessageError = document.querySelector("#mainMessageError")

mainButtonUrl.addEventListener("click", ()=>{
  if(mainInputUrl.value == ""){
    errorMessage()
  } else {
    checkUrl(mainInputUrl.value)
  }
})

function checkUrl(url:string | any) {
  if(url.includes(" ")){
    errorMessage();
    console.log(mainInputUrl.value == "")
  } else if(url.includes(".")){
    const makeApi: string = `${Api}${url}`
    urlFetch(makeApi);
    buttonLoader.innerHTML=`
    <img class="button-loader" src="https://acegif.com/wp-content/uploads/loading-11.gif" alt="loader git">
    `
    //delete error message
    mainInputUrl.style=`border: none;`
    mainMessageError.innerHTML=``
  }
}

function urlFetch(url:string) {
  fetch(url)
    .then(response => response.json())
    .then(data => templateResult(data.result.short_link))
    .catch(err => apiError(err))
}

function templateResult(data: object) {
  console.log(data)
  let infoDiv=document.createElement("div")
  infoDiv.innerHTML= `
  <div class="main-url_container">
    <div class="origin-Url">
      <p class="displayNone">${mainInputUrl.value}</p>
    </div>
    <div class="url-container_result">
      <a href="https://${data}" target="_blank" class="main-url">${data}</a>
      <button id="urlCopy">Copy</button>
    </div>
  </div>
  `
  mainShortenResult.append(infoDiv)
  buttonLoader.innerHTML=``
  mainInputUrl.value=""
}
function apiError(data) {
  console.log(data)
  let infoDiv=document.createElement("div")
  infoDiv.innerHTML= `
  <p>That Url is not accept. Try again.</p>
  `
  mainShortenResult.appendChild(infoDiv)
  buttonLoader.innerHTML=``
}


function errorMessage() {
  mainInputUrl.style=`border: 1px solid red;`
    mainMessageError.innerHTML=`
    <p>You need to review your url. Try again</p>
    `
}