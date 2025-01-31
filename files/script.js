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
 

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
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
    event.preventDefault();

    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({ behavior: "smooth" });

    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    link.classList.add("active");
  });
});

const srtop = ScrollReveal({
  origin: "top", // Animation origin
  distance: "80px", // Distance moved
  duration: 1000, // Animation duration
  reset: true, // Animation repeats on re-scroll
});

srtop.reveal("section", {
  interval: 200, // Delay between animations
});
