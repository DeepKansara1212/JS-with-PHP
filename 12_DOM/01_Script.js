// Selection of elements in the DOM
const heading1 = document.getElementById("heading-1");
const para1 = document.getElementsByClassName("para1")
const para2 = document.querySelector(".container") 
const para = document.querySelectorAll(".para1")
// const tag = document.getElementsByTagName(p)


// para.style.color = "blue";


const googleLink = document.getElementById('google-link') 
const googleAtr = googleLink.getAttribute('href')

googleLink.setAttribute('href', 'https://google.com')

// console.log(googleAtr);



document.querySelector('#p1') 


const p1 = document.querySelector('#p1')
p1.innerHTML = "<h4>Hello Javascript</h4>"

p1.style.backgroundColor = "blue"
p1.style.color = "white"