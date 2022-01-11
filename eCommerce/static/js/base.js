//Cart system
let cartOpen=false;
let shoppingCart=document.querySelector(".fa-shopping-cart");
let cartStack=document.querySelector(".cartStack");
let cartBodyContent=document.querySelectorAll(".cartBody>*");
function cartToggler(classToBeRemoved,classToBeAdded,newStatus){
    cartStack.classList.remove(classToBeRemoved);
    cartStack.classList.add(classToBeAdded);
    cartOpen=newStatus;
}
function visibilityToggler(classToBeRemoved,classToBeAdded){
    cartBodyContent.forEach(index=>index.classList.remove(classToBeRemoved));
    cartBodyContent.forEach(index=>index.classList.add(classToBeAdded));
    console.log(cartBodyContent);
}
function cartBodyContentToggler(){
    if(cartOpen===false) visibilityToggler("visibilityVisible","visibilityHidden");
    else if(cartOpen===true) visibilityToggler("visibilityHidden","visibilityVisible");
}
shoppingCart.addEventListener("click",()=>{
    visibilityToggler("visibilityVisible","visibilityHidden"); 
    if(cartOpen===false) cartToggler("cardIconUnclicked","cartIconClicked",true);
    else if(cartOpen===true)cartToggler("cartIconClicked","cardIconUnclicked",false);
    this.addEventListener("transitionend",cartBodyContentToggler);
})
document.querySelector(".fa-times-circle").addEventListener("click",()=>{
    cartToggler("cartIconClicked","cardIconUnclicked",false)
    visibilityToggler("visibilityVisible","visibilityHidden");
})