var randomnumber1=Math.floor(Math.random()*6)+1;
var randomdiceimage1="dice"+randomnumber1+".png";
var randimagesrc1="images/"+randomdiceimage1;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randimagesrc1);
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdiceimage2="dice"+randomnumber2+".png";
var randimagesrc2="images/"+randomdiceimage2;
var img1=document.querySelectorAll("img")[1];
img1.setAttribute("src",randimagesrc2);
if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="player2 wins";
}
else{
    document.querySelector("h1").innerHTML="draw";
}
    