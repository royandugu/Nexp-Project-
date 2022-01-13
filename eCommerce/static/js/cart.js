const inputBar=document.querySelector(".displayNumber");
let i=0;
function increment(){
        i++;
        inputBar.value=i;
}
function decrement(){
    if(i>0){
        i--;
        inputBar.value=i;
    }
}