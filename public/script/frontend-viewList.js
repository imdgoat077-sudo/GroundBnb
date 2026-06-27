let formBtns = document.querySelectorAll(".filter-options");
let inputs = document.querySelectorAll(".filter-options input");
const nav = document.querySelector("nav");
let searchBtn = document.querySelector(".searchBtn");
let likeBtns = document.querySelectorAll(".like-btn");
const navBar = document.querySelector(".nav-container");
const Mover = document.querySelector(".Mover");
scrollBtn = document.querySelector(".search");

//Scroll Animation : 

nav.classList.add("scrolled")
// Dynamic Like Buttons Toggle
likeBtns.forEach(likeBtn => {
    likeBtn.addEventListener("click", () => {
        likeBtn.children[0].children[0].classList.toggle("like-btn-color");
    });
});
const child = navBar.children[0].getBoundingClientRect();

formBtns.forEach(formBtn=>{
    formBtn.addEventListener("click",()=>{
        console.log(formBtn.offsetLeft);
        console.log(formBtn.getBoundingClientRect().right-formBtn.getBoundingClientRect().left);
        Mover.style.transform = `translateX(${formBtn.offsetLeft-7}px)`;
        Mover.classList.add("Focused");
    })
})
let navBarisFocused = false;

scrollBtn.addEventListener("click", () => {
    nav.classList.remove("scrolled");
    navBarisFocused = true;
});

window.addEventListener("scroll", () => {
    if (!navBarisFocused) {
        nav.classList.toggle("scrolled", window.scrollY > 80);
    }
});

window.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) {
        navBarisFocused = false;
        nav.classList.toggle("scrolled", window.scrollY > 80);
    }
});
const rightContainer = document.querySelector(".right-container");
nav.classList.add("scrolled")
function handleOutsideClick(event) {
    if (!nav.contains(event.target)) {
        navBarisFocused = false;
        nav.classList.add("scrolled");
    }
}
window.addEventListener("click", handleOutsideClick);

//Price And Date Logic : 

const priceHolder = document.querySelector(".price-box-holder")
const guestCount =priceHolder.querySelector(".guest-count");
const increment = priceHolder.querySelector("#plus-btn")
const decrement = priceHolder.querySelector("#minus-btn")
let guestInit = 1;
const maxGuests = 7;
const maxoguests = priceHolder.querySelector(".max-guests")
increment.addEventListener("click",()=>{
    if(guestInit<7){
        guestInit+=1;
        guestCount.innerHTML = `${guestInit} Guests`;
        maxoguests.classList.remove("maxed-out");
    }
    else{
        maxoguests.classList.remove("maxed-out");
        setTimeout(() => {
                maxoguests.classList.add("maxed-out");
            }, 1);
        }
})
decrement.addEventListener("click",()=>{
    if(guestInit>1){
        guestInit-=1;
        guestCount.innerHTML = `${guestInit} Guests`;
        decrement.classList.remove("inactive");
        maxoguests.classList.remove("maxed-out");
    }
    else{
        decrement.classList.add("inactive");
    }
})
const expanded = document.querySelector(".expanded");
const minimize = document.querySelector(".minimize");
const maximize = document.querySelector(".maximize");
const infoBox = document.querySelector(".info-box")
const img = maximize.querySelector("img");
const description = document.querySelector(".description")
let backdrop = document.querySelector(".body-backdrop");

function addModal(){
    backdrop.classList.add("active")
}
function closeModal(){
    backdrop.classList.remove("active")
}
if(maximize) maximize.addEventListener("click",addModal);
expanded.addEventListener("click",(e)=>{
    e.stopPropagation()
})
minimize.addEventListener("click",(e)=>{
    e.stopPropagation();
    closeModal();
})
backdrop.addEventListener("click",()=>{
    closeModal()
})