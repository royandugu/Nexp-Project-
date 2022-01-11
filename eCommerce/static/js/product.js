const productContainer=document.querySelector(".userOptions");
const titles=["locals","art","book","auction","music","designs","school","parts"];
for(let i=0;i<titles.length;i++){
    let paragraph=document.createElement("a");
    paragraph.setAttribute("class","otherProducts");
    paragraph.innerHTML=titles[i];
    productContainer.appendChild(paragraph);
}
//Top sellers
const topSellers=document.querySelector(".sellerOptions");
for(let i=0;i<6;i++){
    let circle=document.createElement("div");
    circle.setAttribute("class","sellers");
    topSellers.appendChild(circle);
}
//Product card
let productsNumber=10;

for(let i=0;i<6;i++){

}
