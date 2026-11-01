
// Mobile Navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.innerHTML = isOpen
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';

    if (window.lucide) lucide.createIcons();
});

// Close menu after clicking a navigation link
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.innerHTML = '<i data-lucide="menu"></i>';

        if (window.lucide) lucide.createIcons();
    });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach(element => {
        element.classList.add("show");
    });
}

// Back to top button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    topBtn.classList.toggle("visible", window.scrollY > 400);
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Dynamic copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Initialize icons
if (window.lucide) {
    lucide.createIcons();
}
