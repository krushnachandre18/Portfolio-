// =====================
// Loading Screen
// =====================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1000);
});

// =====================
// Typing Animation
// =====================

const words = [
    "Python Developer",
    "Web Developer",
    "AI Enthusiast",
    "Software Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type() {

    if (!typing) return;

    let current = words[wordIndex];

    if (!deleting) {

        typing.textContent =
        current.substring(0, charIndex++);

        if (charIndex > current.length) {
            deleting = true;

            setTimeout(type, 1200);

            return;
        }

    } else {

        typing.textContent =
        current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex == words.length)
                wordIndex = 0;

        }

    }

    setTimeout(type, deleting ? 60 : 120);

}

type();

// =====================
// Scroll To Top
// =====================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// =====================
// Active Navbar
// =====================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

// =====================
// Dark Mode
// =====================

const themeBtn =
document.getElementById("theme-toggle");

themeBtn.onclick=function(){

document.body.classList.toggle("light-mode");

};

// =====================
// Mobile Menu
// =====================

const menu =
document.querySelector(".menu-toggle");

const nav =
document.querySelector(".nav-links");

menu.onclick=function(){

if(nav.style.display=="flex"){

nav.style.display="none";

}else{

nav.style.display="flex";

nav.style.flexDirection="column";

}

};

// =====================
// Hero Image Effect
// =====================

const image =
document.querySelector(".hero-image img");

image.addEventListener("mousemove",()=>{

image.style.transform="scale(1.05)";

});

image.addEventListener("mouseleave",()=>{

image.style.transform="scale(1)";

});

// =====================
// Footer Year
// =====================

const year =
new Date().getFullYear();

document.querySelector("footer p:last-child").innerHTML =
"© "+year+" All Rights Reserved | Krushna Ravindra Chandre";

