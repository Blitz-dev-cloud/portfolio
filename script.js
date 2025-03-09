document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    once: false,
    mirror: false,
    offset: 100,
  });

  // Implement smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navBarContents = document.querySelector(".nav-bar-contents");

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      menuToggle.classList.toggle("active");
      navBarContents.classList.toggle("active");
    });
  }

  // Typewriter effect for the "Web Developer" text
  const text = document.querySelector(".typewriter");
  if (text) {
    const textContent = text.textContent;
    text.textContent = "";
    let i = 0;

    function typeWriter() {
      if (i < textContent.length) {
        text.textContent += textContent.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }

    setTimeout(typeWriter, 1000);
  }

  // Rotating icons for skills
  const skillIcons = document.querySelectorAll(".skill-icon");
  skillIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", function () {
      this.classList.add("rotate");
    });

    icon.addEventListener("mouseleave", function () {
      this.classList.remove("rotate");
    });
  });

  // Back to top button functionality
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// Function to scroll to a specific section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 70,
      behavior: "smooth",
    });
  }
}
