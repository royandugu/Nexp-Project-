//Trending page
// We have to change the whole way we align things and align properly and responsively and fix it using vanilla
const parentCont=document.querySelector(".cardContainer");
for(let i=0;i<10;i++){
    let card=document.createElement("div");
    card.setAttribute("class","trendingCards");
    parentCont.appendChild(card);
}
const slideCont=document.querySelector(".cardContainer").querySelectorAll("div");
slideCont.forEach((item,i)=>{
	item.style.left=i*210+"px";
})
