const svgButton=document.querySelector("#theButton");
const textFeild=document.querySelector("#text");
const planets=document.querySelector("#planets");
const componenetList=[svgButton,textFeild,planets];
const tml=new TimelineMax({});
function armAnimation(){
    tml.staggerTo(componenetList,.5,{scale:1.07});
    
    tml.staggerTo(componenetList,.5,{scale:1});

    setTimeout(window.requestAnimationFrame(armAnimation),1000);
}
window.requestAnimationFrame(armAnimation);