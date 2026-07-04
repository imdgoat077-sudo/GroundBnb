const allCards = document.querySelectorAll(".card");
const parent = document.querySelector(".parent");
const radius = (parent.getBoundingClientRect().width) / 2;
const Visible = 0;
const wannaButton = document.querySelector(".cool");
const parentHolder = document.querySelector(".parent-container");
const cardDetail = document.querySelectorAll("card-detail");
const title = document.querySelector(".title");
// console.log(x,y);
console.log(allCards.length)
// console.log(x,y);
function RotateCard(){
    let index=0;
    allCards.forEach(
        card=>{
            // card.style.left = "100px"
            let angle = (index/(10))*2*Math.PI;
            let angleDeg = (angle/(2*Math.PI))*360;
            let x = Math.cos(angle)*radius;
            let y = Math.sin(angle)*radius;
            // console.log(x,y);
            card.style.left = `${x + radius - card.offsetWidth  / 2}px`;
            card.style.top = `${y + radius - card.offsetHeight / 2}px`;
            console.log(20*Math.cos(angle),20*Math.sin(angle))
            card.style.transform = `translate(${ 80 * Math.cos(angle) }px, ${ 80 * Math.sin(angle) }px) rotate(${angleDeg-270}deg)`
            card.style.zIndex = `${10 + index}`;
            index++;
        }
    )
}
//Wanna See Something Cool.
wannaButton
.addEventListener("click",()=>{
    console.dir(parentHolder.style)
    parentHolder.classList.toggle("active");
    setTimeout(RotateCard,500);
    title.classList.toggle("invisible");

})