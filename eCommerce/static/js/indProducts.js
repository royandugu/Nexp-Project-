const opContainer=document.querySelectorAll(".opContainer");
const products=document.querySelectorAll(".otherProduct");
let array=Array.from(opContainer);
opContainer.forEach(index=>{
    index.addEventListener("mouseenter",productDisplay);
    index.addEventListener("mouseleave",productHide);
});
function productDisplay(event){
    products[array.indexOf(event.target)].classList.remove("visibilityHidden");
    products[array.indexOf(event.target)].classList.add("visibilityVisible");
}
function productHide(event){
    products[array.indexOf(event.target)].classList.remove("visibilityVisible");
    products[array.indexOf(event.target)].classList.add("visibilityHidden");
}
