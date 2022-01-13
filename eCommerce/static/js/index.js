//Trending page
// We have to change the whole way we align things and align properly and responsively and fix it using vanilla
const parentCont=document.querySelector(".cardContainer");
for(let i=0;i<8;i++){
    let card=document.createElement("div");
    card.setAttribute("class","trendingCards");
    parentCont.appendChild(card);
}

const trendings=document.querySelectorAll(".cardContainer div");
let moveValue=103.5;
let maxMove=403;
let l=0;

//For Mobile

document.querySelector(".afterIcon").addEventListener("click",()=>{
    if(l<maxMove){
        jumpNumbers();
        console.log(moveValue+" "+maxMove);
        console.log()
        l=l+moveValue;
        trendings.forEach(index=>{
            index.style.transform="translateX("+ -l +"%)";
        })
    }
})
document.querySelector(".beforeIcon").addEventListener("click",()=>{
    if(l>0){
        jumpNumbers();
        console.log(moveValue+" "+maxMove);
        l=l-moveValue;
        trendings.forEach(index=>{
            index.style.transform="translateX("+-l+"%)";
        })
    }
})
function jumpNumbers(){
    if(window.matchMedia("(max-width:768px)").matches){
        moveValue=101.5;
        maxMove=600;
    }
    else{
         moveValue=103.5;
         maxMove=403;
    }
    console.log("You just clicked the left button");
}
//Button clicking link.. when the button is clicked it leads us to the Product.html
let buttonLists=document.querySelectorAll(".productCollection>a");
    buttonLists.forEach(indAnch=>{
        indAnch.setAttribute("href","../templates/product.html");
    })
console.log(buttonLists);




//Top sellers
let sellerContainer=document.querySelector(".topSellersInfo");
for(let i=0;i<5;i++){
    let indSeller=document.createElement("div");
    indSeller.setAttribute("class","seller");
    sellerContainer.appendChild(indSeller);
}

window.addEventListener("resize",()=>{
    trendings.forEach(index=>index.style.transform="translateX("+0+"% )");
    l=0;
});

function displayImages(){
    const imageHolder=document.querySelectorAll(".imageHolder");
    const realNode=document.querySelector(".imageHolderMain");
    for(let i=1;i<imageHolder.length;i++){
        imageHolder[i].appendChild(realNode.cloneNode(true));
    }
}
setTimeout(displayImages,0);