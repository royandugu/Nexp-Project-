
let product=document.querySelector(".product");
let spaces=document.querySelectorAll(".space");
for(let i=0;i<spaces.length;i++) {
    spaces[i].appendChild(product.cloneNode(true));
}
let productList=document.querySelectorAll(".product");
let pageType=document.querySelector(".pageType>div");
productList.forEach((index,i)=>{
    index.setAttribute("id",pageType.getAttribute("class")+i);
})
console.log(productList);
productList[spaces.length].classList.add("finalProduct");
let buttons=document.querySelectorAll(".firstButton");

//Media check
let cart=document.createElement("i");

window.addEventListener("resize",buttonSet);
function buttonSet(){
    
    if(window.matchMedia("(max-width:860px)").matches) buttons.forEach(index=>index.innerHTML="<i class='fas fa-cart-arrow-down'></i>");
    else buttons.forEach(index=>index.innerHTML="<i class='fas fa-cart-arrow-down'></i> Add to cart");
}
buttonSet();

//Last button
let lastIcons=document.querySelectorAll(".lastButton i");
let popUps=document.querySelectorAll(".popUp input");
console.log(popUps);
lastIcons.forEach(index=>index.addEventListener("click",displayForm));
let numberEnter=false;
function displayForm(event){
    if(numberEnter===false){
        popUps[Array.from(lastIcons).indexOf(event.target)].classList.remove("invisible");
        popUps[Array.from(lastIcons).indexOf(event.target)].classList.add("visible");
        numberEnter=true;
    }
    else {
        popUps[Array.from(lastIcons).indexOf(event.target)].classList.remove("visible");
        popUps[Array.from(lastIcons).indexOf(event.target)].classList.add("invisible");
        numberEnter=false;
    }
}   
