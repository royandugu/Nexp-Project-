//Trending page
// We have to change the whole way we align things and align properly and responsively and fix it using vanilla
const parentCont=document.querySelector(".cardContainer");
for(let i=0;i<8;i++){
    let card=document.createElement("div");
    card.setAttribute("class","trendingCards");
    parentCont.appendChild(card);
}

const trendings=document.querySelectorAll(".cardContainer div");
let moveValue=103.5;
let maxMove=403;
let l=0;

//For Mobile
if(window.matchMedia("(max-width:768px)").matches){
    moveValue=101.5;
    maxMove=600;
}
document.querySelector(".afterIcon").addEventListener("click",()=>{
    if(l<maxMove){
        l=l+moveValue;
        trendings.forEach(index=>{
            index.style.transform="translateX("+ -l +"%)";
        })
    }
})
document.querySelector(".beforeIcon").addEventListener("click",()=>{
    
    if(l>0){
        l=l-moveValue;
        trendings.forEach(index=>{
            index.style.transform="translateX("+-l+"%)";
        })
    }
})
