const text = document.querySelector(".Hello")
const btn = document.querySelector("button")
const stor = localStorage.getItem("userEmail")

text.innerHTML = `Hello, ${localStorage.getItem("userEmail")}!`


btn.addEventListener("click" , () =>{
    localStorage.removeItem("userEmail")
    text.innerHTML = "No Email is found"
    window.open("./index.html")
}) 



