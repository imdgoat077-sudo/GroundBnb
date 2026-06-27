console.log("--- SCRIPT IS RUNNING ---");
let dates = document.querySelectorAll(".dates");
let monthNames = document.querySelectorAll(".main-calendar .month-name");
const next = document.querySelector(".next-month");
const prev = document.querySelector(".prev-month");
document.querySelector(".check-in")?.classList.remove("check-in");
document.querySelector(".check-out")?.classList.remove("check-out");
let selectedDate = new Date();
const breakText = document.querySelector("#breakdown-text")
let year = selectedDate.getFullYear();
let month = selectedDate.getMonth();
let currCheckIn = null;
let currCheckOut  = null;
let savedCheckOut  = null;
let savedCheckIn  = null;
const priceBox = document.querySelector(".price-box");
const checkInInput = document.querySelector("#check-in input");
const checkOutInput = document.querySelector("#check-out input");
if (checkInInput) checkInInput.readOnly = true;
if (checkOutInput) checkOutInput.readOnly = true;
const today = new Date();
const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
let BookedDays = 0;
const breakAmount = document.querySelector("#breakdown-amount");
const finalAmount = document.querySelector("#final-total");
const displayDates = () => {
    for (let j = 0; j < 2; j++) {
        dates[j].innerHTML = "";
        
        const currentMonthData = new Date(year, month + j, 1);
        const targetYear = currentMonthData.getFullYear();
        const targetMonth = currentMonthData.getMonth();

        const startDayOfWeek = currentMonthData.getDay();
        for (let i = 0; i < startDayOfWeek; i++) {
            const blankButton = createBtns(" ", true, false);
            dates[j].appendChild(blankButton);
        }

        const lastOfMonth = new Date(year, month + j + 1, 0);
        const totalDays = lastOfMonth.getDate();

        for (let i = 1; i <= totalDays; i++) {
            const currentLoopDate = new Date(targetYear, targetMonth, i);
            const nextLoopDate = new Date(targetYear, targetMonth, i+1);
            const isPast = currentLoopDate < todayMidnight;
            
            const isItToday = 
                i === today.getDate() && 
                targetMonth === today.getMonth() && 
                targetYear === today.getFullYear();
            let currBtnDate = `${i}/${targetMonth + 1}/${targetYear}`;
            const dayButton = createBtns(i, isPast, isItToday);
            dayButton.dataset.time = currentLoopDate.getTime();
            dayButton.dataset.datename = currBtnDate;
            dates[j].appendChild(dayButton);
            if((savedCheckIn)&&(savedCheckIn === Number(dayButton.dataset.time))) dayButton.classList.add("check-in")
            else if((savedCheckOut)&&(savedCheckOut === Number(dayButton.dataset.time))) dayButton.classList.add("check-out")
        }

        const monthString = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentMonthData);
        monthNames[j].innerHTML = `${monthString} ${targetYear}`;
    }
};

const createBtns = (text, isDisabled = false, isToday = false) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.disabled = isDisabled;
    button.classList.toggle("isToday", isToday); 
    return button;
};

next.addEventListener("click", () => {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    displayDates();
});

prev.addEventListener("click", () => {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    displayDates();
});
displayDates();
calendarTitle = document.querySelector(".title-cal p");
allDates = document.querySelectorAll(".dates");
currentStatusIn = 0;
allDates.forEach(date=>{
    date.addEventListener("click",(e)=>{
        const clickedButton = e.target.closest("button");
        if (!clickedButton || clickedButton.disabled || clickedButton.textContent.trim() === "") return;
        try{
        const checkIn = document.querySelector(".check-in");
        const checkOut = document.querySelector(".check-out")
            if((currCheckIn===null)||(currCheckIn>Number(clickedButton.dataset.time))){
                BookedDays = 0;
                savedCheckOut=null;
                savedCheckIn=null;
                checkInInput.value = "";
                checkOutInput.value = "";
                if(checkIn) checkIn.classList.remove("check-in");
                if(checkOut) checkOut.classList.remove("check-out");
                clickedButton.classList.add("check-in");
                currCheckIn = Number(clickedButton.dataset.time);
                savedCheckIn = currCheckIn;
                calendarTitle.innerText = "Select Check-Out Date"
                calendarTitle.style.color = "rgb(27, 172, 27)"
                checkInInput.value = clickedButton.dataset.datename
                priceBox.classList.remove("new-height")
                
            }
            else if((currCheckIn!=null)&&(currCheckIn<Number(clickedButton.dataset.time))&&(currCheckOut===null)){
                clickedButton.classList.add("check-out");
                const millisecondsPerDay = 24 * 60 * 60 * 1000;
                currCheckOut = Number(clickedButton.dataset.time);
                const nights = Math.round((currCheckOut - currCheckIn) / millisecondsPerDay);
                calendarTitle.innerText = `${nights} Nights In ${window.listingLocation}`;
                BookedDays = nights;
                calendarTitle.style.color = "black";
                savedCheckOut = currCheckOut;
                currCheckIn=null;
                currCheckOut=null;
                checkOutInput.value = clickedButton.dataset.datename
                priceBox.classList.add("new-height");
                breakText.innerHTML = `₹ ${window.price} × ${BookedDays} nights`
                breakAmount.innerHTML = `₹ ${window.price*BookedDays}`;
                finalAmount.innerHTML = `₹ ${window.price*BookedDays}`
            }
        }
        catch(err){
            console.log(err);
        }

    })
})
console.log(calendarTitle.innerText)
const dateBoxes = document.querySelectorAll(".date-box");
const calendarSection = document.querySelector("#calendar");

document.addEventListener("click", (e) => {
    const box = e.target.closest(".date-box");

    if (box) {
        console.log("A date box was clicked! (Delegated)");

        const calendarSection = document.querySelector("#calendar");

        if (calendarSection) {
            const getScrollParent = (el) => {
                while (el && el !== document.body) {
                    const { overflow, overflowY } = getComputedStyle(el);
                    if (/(auto|scroll)/.test(overflow + overflowY)) return el;
                    el = el.parentElement;
                }
                return window;
            };

            const scrollContainer = getScrollParent(calendarSection);
            const containerTop = scrollContainer === window ? 0 : scrollContainer.getBoundingClientRect().top;
            const top = calendarSection.getBoundingClientRect().top - containerTop + scrollContainer.scrollTop - 10;

            scrollContainer.scrollTo({
                top: top,
                behavior: "smooth"
            });
        } else {
            console.error("Could not find an element with id='calendar' on the page!");
        }
    }
});
