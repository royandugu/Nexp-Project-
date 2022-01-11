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
let product=document.querySelector(".product");
let spaces=document.querySelectorAll(".space");
for(let i=0;i<spaces.length;i++) {
    spaces[i].appendChild(product.cloneNode(true));
}
let productList=document.querySelectorAll(".product");
productList[spaces.length].classList.add("finalProduct");
let buttons=document.querySelectorAll(".firstButton");
console.log(buttons);
//Media check
let cart=document.createElement("i");

window.addEventListener("resize",buttonSet);
function buttonSet(){
    
    if(window.matchMedia("(max-width:860px)").matches) buttons.forEach(index=>index.innerHTML="<i class='fas fa-cart-arrow-down'></i>");
    else buttons.forEach(index=>index.innerHTML="<i class='fas fa-cart-arrow-down'></i> Add to cart");
}
buttonSet();