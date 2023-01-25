const navToggle = document.querySelector(".menu-button")
const nav = document.querySelector("nav")
const welcome = document.querySelector(".welcome")

const bodyClassList = document.body.classList
const welcomeStyle = welcome.style


navToggle.addEventListener("click", _ => {
  // document.body.classList.toggle("nav-is-open")
  bodyClassList.toggle("nav-is-open")
  //transition v js, drugače bug. druga je skrajšana verzija
  // welcome.style.transition = "transform ease-out 250ms"
  welcomeStyle.transition = "transform ease-out 250ms"
})

//click na katerikoli element nav vrne nav in .welcome
//nazaj levo v izhodiščno pozicijo
nav.addEventListener("click", _ => {
  // document.body.classList.remove("nav-is-open")
  bodyClassList.remove("nav-is-open")
  // welcome.style.transition = "0ms"
  welcomeStyle.transition = "0ms"
})