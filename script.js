const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".nav-list ul");
const menuItem = document.querySelectorAll(".nav-list ul li a");
const header = document.querySelector(".header");
console.log("header")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

menuItem.forEach(item => {
    item.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
    });
});

document.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY; // Use window.scrollY to get the vertical scroll position
    if (scrollPosition > 250) {
        header.style.backgroundColor = "#29323c";
    } else {
        header.style.backgroundColor = "transparent"; // Correct spelling here
    }
});

// Smooth scrolling on anchor links
