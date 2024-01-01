let body = document.querySelector("body");
let navBar = document.getElementById("navbar");
let hamburger = document.getElementById("hamburger");
let sidebar = document.getElementById("sidebar");
let modeBtn = document.getElementById("mode-btn");
let lightMode = document.getElementById("light-mode");
let darkMode = document.getElementById("dark-mode");
let portfolioOptions = document.querySelector(".portfolio-options");
let projects = document.querySelectorAll(".projects");
let sidebarLinks = document.querySelectorAll(".sidebar-link");
let gradientEffect = document.querySelector(".black-gradient");
let slides = document.querySelectorAll(".slide");
let indicators = document.querySelectorAll(".indicator");
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");

// DARK MODE / LIGHT MODE

modeBtn.onclick = () => {
  lightMode.classList.toggle("hidden");
  darkMode.classList.toggle("hidden");
  body.classList.toggle("dark");
};

// NAVBAR BACKGROUNG COLOR EFFECT

window.onscroll = () => {
  if (window.scrollY > 100) {
    navBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
  }
};

// SIDEBAR TOGGLE

hamburger.onclick = () => {
  sidebarToggle();
};

sidebarLinks.forEach((link) => {
  link.onclick = () => {
    sidebarToggle();
  };
});

gradientEffect.onclick = () => {
  sidebarToggle();
};

function sidebarToggle() {
  hamburger.classList.toggle("close");
  sidebar.classList.toggle("show-sidebar");
  gradientEffect.classList.toggle("active");
  body.classList.toggle("overflow-hide");
}

// PROJECT CAROUSEL

let slideCount = 0;

prevBtn.onclick = () => {
  slides[slideCount].style.animation = "prevHide 0.5s ease-in forwards";
  if (slideCount === 0) {
    slideCount = slides.length - 1;
  } else {
    slideCount--;
  }
  slides[slideCount].style.animation = "prevShow 0.5s ease-in forwards";

  indicators.forEach((item) => {
    item.classList.remove("active");
  });

  indicators[slideCount].classList.add("active");
};

nextBtn.onclick = () => {
  slides[slideCount].style.animation = "nextHide 0.5s ease-in forwards";

  if (slideCount === slides.length - 1) {
    slideCount = 0;
  } else {
    slideCount++;
  }
  slides[slideCount].style.animation = "nextShow 0.5s ease-in forwards";

  indicators.forEach((item) => {
    item.classList.remove("active");
  });

  indicators[slideCount].classList.add("active");
};
