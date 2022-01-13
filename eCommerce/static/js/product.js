let productList=document.querySelectorAll(".product");
let pageType=document.querySelector(".pageType>div");
let product=document.querySelector(".product");
let spaces=document.querySelectorAll(".space");
let buttons=document.querySelectorAll(".firstButton");
let lastIcons=document.querySelectorAll(".lastButton i");
let popUps=document.querySelectorAll(".popUp input");
let numberEnter=false;

let cart=document.createElement("i");
function cloneAddition(){
    for(let i=0;i<spaces.length;i++) {
        spaces[i].appendChild(product.cloneNode(true));
    }
    idAssignment();
}
setTimeout(cloneAddition,0);
function idAssignment(){
    productList.forEach((index,i)=>{
    index.setAttribute("id",pageType.getAttribute("class")+i);
})

productList[spaces.length].classList.add("finalProduct");
}


//Media check

window.addEventListener("resize",buttonSet);
function buttonSet(){
    
    if(window.matchMedia("(max-width:860px)").matches) buttons.forEach(index=>index.innerHTML="<i class='fas fa-cart-arrow-down'></i>");
    else buttons.forEach(index=>index.innerHTML="<i class='fas fa-cart-arrow-down'></i> Add to cart");
}
buttonSet();

//Last button
lastIcons.forEach(index=>index.addEventListener("click",displayForm));
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
