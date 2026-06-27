let formBtns = document.querySelectorAll(".filter-options");
let inputs = document.querySelectorAll(".filter-options input");
const nav = document.querySelector("nav");
let searchBtn = document.querySelector(".searchBtn");
let likeBtns = document.querySelectorAll("#like-btn");
const navBar = document.querySelector(".nav-container");
const Mover = document.querySelector(".Mover");
let scrollBtn = document.querySelector(".search");

const mainContainer = document.querySelector("main");

likeBtns.forEach(likeBtn => {
    likeBtn.addEventListener("click", () => {
        likeBtn.children[0].children[0].classList.toggle("like-btn-color");
    });
});

const child = navBar.children[0].getBoundingClientRect();
let navBarisFocused = false;

formBtns.forEach(formBtn => {
    formBtn.addEventListener("click", () => {
        console.log(formBtn.offsetLeft);
        console.log(formBtn.getBoundingClientRect().right - formBtn.getBoundingClientRect().left);
        Mover.style.transform = `translateX(${formBtn.offsetLeft - 7}px)`;
        Mover.classList.add("Focused");
        navBarisFocused = true;
    });
});

scrollBtn.addEventListener("click", () => {
    nav.classList.remove("scrolled");
    navBarisFocused = true;
});

mainContainer.addEventListener("scroll", () => {
    if (!navBarisFocused) {
        nav.classList.toggle("scrolled", mainContainer.scrollTop > 80);
    }
});

window.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) {
        navBarisFocused = false;
        nav.classList.toggle("scrolled", mainContainer.scrollTop > 80);
        Mover.classList.remove("Focused");
    }
});