// Typing Animation
const text = [
  "Python Developer",
  "Web Developer",
  "AI Enthusiast",
  "Final Year BCS Student"
];

let index = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {
  
  if (!typing) return;
  
  if (!deleting) {
    
    typing.textContent = text[index].substring(0, charIndex + 1);
    charIndex++;
    
    if (charIndex === text[index].length) {
      deleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
    
  } else {
    
    typing.textContent = text[index].substring(0, charIndex - 1);
    charIndex--;
    
    if (charIndex === 0) {
      deleting = false;
      index = (index + 1) % text.length;
    }
  }
  
  setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


// Reveal Animation
const reveals = document.querySelectorAll(
  ".about-box,.skill-card,.card,.edu-card,form");

function revealOnScroll() {
  
  reveals.forEach(item => {
    
    const top = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (top < windowHeight - 100) {
      
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }
    
  });
  
}

reveals.forEach(item => {
  item.style.opacity = "0";
  item.style.transform = "translateY(40px)";
  item.style.transition = "0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// Active Navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  
  let current = "";
  
  sections.forEach(section => {
    
    const sectionTop = section.offsetTop - 150;
    
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
    
  });
  
  navLinks.forEach(link => {
    
    link.classList.remove("active");
    
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
    
  });
  
});


// Smooth Button Effect
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  
  anchor.addEventListener("click", function(e) {
    
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute("href"));
    
    if (target) {
      
      target.scrollIntoView({
        behavior: "smooth"
      });
      
    }
    
  });
  
});


// Profile Image Hover Glow
const profile = document.querySelector(".hero-image img");

if (profile) {
  
  profile.addEventListener("mouseenter", () => {
    profile.style.boxShadow = "0 0 60px #00d4ff";
  });
  
  profile.addEventListener("mouseleave", () => {
    profile.style.boxShadow = "0 0 40px #00d4ff";
  });
  
}


// Footer Year
const footer = document.querySelector("footer p");

if (footer) {
  
  footer.innerHTML =
    `© ${new Date().getFullYear()} Krushna Chandre | Designed with ❤️`;
  
}