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
// //GSAP
const button=document.querySelector("#theButton");
console.log(button);
const tml=new TimelineMax({});
function armAnimation(){
    tml.to(button,.5,{scaleY:2.2});
    tml.to(button,.5,{scaleY:2});
    setTimeout(window.requestAnimationFrame(armAnimation),1000);
}
window.requestAnimationFrame(armAnimation);