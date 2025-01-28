var typed = new Typed(".text", {
  strings: ["Web Development" , "Mobile App Development" , "AI"],
  typeSpeed:50,
  backSpeed:70,
  backDelay:1000,
  loop:true
});
 
 
const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
  if (window.pageYOffset > 100){
      toTop.classList.add("active");
  }
  else{
      toTop.classList.remove("active");
  }
})
 

// Select all sections and nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

// Scroll Event Listener
window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60; // Adjust for sticky header height
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      const id = section.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(id)) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Click Event Listener
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor click behavior

    const targetId = link.getAttribute("href").substring(1); // Get target section ID
    const targetSection = document.getElementById(targetId);

    // Scroll smoothly to the section
    targetSection.scrollIntoView({ behavior: "smooth" });

    // Update active class on click
    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    link.classList.add("active");
  });
});

// Initialize ScrollReveal
const srtop = ScrollReveal({
  origin: "top", // Animation origin
  distance: "80px", // Distance moved
  duration: 1000, // Animation duration
  reset: true, // Animation repeats on re-scroll
});

// Apply ScrollReveal to all sections
srtop.reveal("section", {
  interval: 200, // Delay between animations
});
