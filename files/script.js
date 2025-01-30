// Typed.js for dynamic text effect
var typed = new Typed(".text", {
  strings: ["Web Development", "Mobile App Development", "AI"],
  typeSpeed: 50,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

// Scroll-to-top button functionality
const toTop = document.querySelector(".top");
window.addEventListener("scroll", () => {
  toTop.classList.toggle("active", window.pageYOffset > 100);
});

// Navbar highlighting on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document.querySelector(`.navbar a[href="#${sectionId}"]`)?.classList.add("active");
    }
  });
});

// Smooth scrolling when clicking navbar links
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ScrollReveal Animations
ScrollReveal().reveal("section", { origin: "top", distance: "80px", duration: 1000, reset: true });
