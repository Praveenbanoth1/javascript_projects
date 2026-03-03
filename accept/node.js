let yesBtn = document.getElementById("yesBtn");
let noBtn= document.getElementById("noBtn");
let imgContainerEl = document.getElementById("imgContainer");
let mainImage = document.getElementById("mainImage");


let noClickcount = 0;
let yesSize = 20;
let noSize = 20;
let images = [
    "yesPlease1.gif",
    "yesPlease2.gif",
    "yesPlease3.gif",
    "yesPlease4.gif",
    "yesPlease5.gif",
    "yesPlease6.gif"
];
noBtn.onclick = function(){
    if (noClickcount <6) {
        mainImage.src = images[noClickcount];
        yesSize +=10
        yesBtn.style.fontSize = yesSize + "px";
        
        noSize -= 3;
        noBtn.style.fontSize = noSize + "px";
        noBtn.style.height = noSize + "px";
        noBtn.style.width = noSize + "px";
        noClickcount ++;
    }
    if(noClickcount === 6){
        noBtn.style.display = "none";
    }
};
yesBtn.onclick = function(){
    mainImage.src = "yes1.gif";
    noBtn.style.display = "none";
}