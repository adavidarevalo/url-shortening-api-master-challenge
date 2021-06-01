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

mainButtonUrl.addEventListener("click", ()=>{
  if(mainInputUrl.value == ""){
    console.log("Ingrese un dato")
  } else {
    checkUrl(mainInputUrl.value)
  }
})

function checkUrl(url:string | any) {
  if(url.includes(".")){
    const makeApi: string = `${Api}${url}`
    urlFetch(makeApi);
    buttonLoader.innerHTML=`
    <img class="button-loader" src="https://acegif.com/wp-content/uploads/loading-11.gif" alt="loader git">
    `
  } else {
    console.log("This Url is not Valid")
  }
}

function urlFetch(url:string) {
  fetch(url)
    .then(response => response.json())
    .then(data => templateResult(data))
    .catch(err => console.log("Error"))
}

function templateResult(data: object) {
  console.log(data)
  let infoDiv=document.createElement("div")
  let infoP= document.createElement("p")
  infoP.innerText= `${data}`
  infoDiv.appendChild(infoP)
  mainShortenResult.appendChild(infoDiv)
  buttonLoader.innerHTML=``
}