const inputBar=document.querySelectorAll(".displayNumber");
const incrementButtonLists=document.querySelectorAll(".increment");
const decrementButtonLists=document.querySelectorAll(".decrement");
const arrayTransformationI=Array.from(incrementButtonLists);
const arrayTransformationD=Array.from(decrementButtonLists);
let i=0;
incrementButtonLists.forEach(index=>{
    index.addEventListener("click",increment);
})
decrementButtonLists.forEach(index=>{
    index.addEventListener("click",decrement);
})

function increment(event){
        i=i=inputBar[arrayTransformationI.indexOf(event.target)].value;
        i++;
        inputBar[arrayTransformationI.indexOf(event.target)].value=i;
}
function decrement(event){
     if(inputBar[arrayTransformationD.indexOf(event.target)].value!=0){
        i=inputBar[arrayTransformationD.indexOf(event.target)].value;
        i--;
        inputBar[arrayTransformationD.indexOf(event.target)].value=i;
     }
}