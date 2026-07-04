const notifBar = document.querySelector(".notification-bar");
// const nameInput = document.querySelector(".name-div input");
const tick = document.querySelector(".tick img");
const tickContent = document.querySelector(".tick-content p");
nextBtn.addEventListener("click",(e)=>{
    if(!nameInput.value){
        notifBar.classList.add("fail");
        tick.src = "/images/red-cross.png";
        tickContent.innerHTML = "Please Enter Your Name";
        setTimeout(() => {
            notifBar.classList.remove("fail");
        }, 3000);
    }
    else{
        signupobj.name = nameInput.value;
        signupScreen.style.display="none";
        mainScreen.style.display = "none";
    }
})
submit.addEventListener("click",()=>{
    if(!mailInput.value||!passwordInput.value){
        notifBar.classList.add("fail");
        tick.src = "/images/red-cross.png";
        tickContent.innerHTML = "Either Email Or Password Isnt Entered";
        setTimeout(() => {
            notifBar.classList.remove("fail");
        }, 3000);
    }
    else{
        signupobj.email = mailInput.value;
        signupobj.password = passwordInput.value;
        console.log(signupobj);
        notifBar.classList.add("success");
        tick.src = "/images/green-new-tik.png";
        tickContent.innerHTML = "Signup Successful.... Please Wait A Moment";
        setTimeout(() => {
            notifBar.classList.remove("success");
        }, 3000);
        submit.disabled=true;
    }

})