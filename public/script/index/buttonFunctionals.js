
const loginBtn = document.querySelector(".login");
const signupBtn = document.querySelector(".sign-up")
const mainScreen = document.querySelector(".work-screen")
const loginScreen = document.querySelector(".login-screen")
const signupScreen = document.querySelector(".signup-screen")
const signupScreen2 = document.querySelector(".signup-screen-2")
const nextBtn = document.querySelector(".next-btn");
loginBtn.addEventListener("click",()=>{
    loginScreen.style.display="flex";
    mainScreen.style.display = "none";
})
let signupobj={};
const nameInput = document.querySelector(".name-div input");
const mailInput = document.querySelector(".signup-screen-2 .username");
const passwordInput = document.querySelector(".signup-screen-2 .pass-div input")
const submit = document.querySelector(".signup-btn")
const loginRedirect = document.querySelector(".login-text a");
const signupRedirect = document.querySelector(".signup-text a");
signupBtn.addEventListener("click",()=>{
    signupScreen.style.display="flex";
    signupScreen2.style.display="flex";
    mainScreen.style.display = "none";
})

loginRedirect.addEventListener("click",(e)=>{
    e.preventDefault();
    loginScreen.style.display="flex";
    mainScreen.style.display = "none";
    signupScreen.style.display = "none";
})
signupRedirect.addEventListener("click",(e)=>{
    e.preventDefault();
    loginScreen.style.display="none";
    mainScreen.style.display = "none";
    signupScreen.style.display = "flex";
})
