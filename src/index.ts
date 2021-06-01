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

mainButtonUrl.addEventListener("click", ()=>{
  if(mainInputUrl.value == ""){
    console.log("Ingrese un dato")
  } else {
    checkUrl(mainInputUrl.value)
  }
})

function checkUrl(url:string | any) {
  if(url.includes(".")){
    ApiFetch("https://api.shrtco.de/v2/shorten?url=", mainInputUrl.value)
  } else {
    console.log("This Url is not Valid")
  }
}

function ApiFetch(api: string, complement: string|any) {
  fetch(`${api}+${complement}`)
    .then(response => response.json())
    console.log(response)
    .catch(error => console.log(error.message)))
}

