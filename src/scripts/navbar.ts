// Hamburger menu toggle functionality
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const navbar = document.querySelector(".navbar-sticky");

if (hamburgerBtn && mobileMenu) {
  hamburgerBtn.addEventListener("click", () => {
    const isExpanded = hamburgerBtn.getAttribute("aria-expanded") === "true";

    hamburgerBtn.setAttribute("aria-expanded", (!isExpanded).toString());
    hamburgerBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerBtn.classList.remove("active");
      mobileMenu.classList.remove("active");
      hamburgerBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// Add shadow on scroll
if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}