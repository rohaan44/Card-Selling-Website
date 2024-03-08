
let  btn1 = document.querySelector(".inc")
let btn2 = document.querySelector(".dec")
let head =document.querySelector(".para")
let i=25
btn1.addEventListener("click", ()=>{
  head.innerText=i++
})
btn2.addEventListener("click", ()=>{
//document.querySelector("h1").innerText=i++
head.innerText=i--

})