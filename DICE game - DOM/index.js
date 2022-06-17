var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

// math.random used to generate a random number
// math.floor used to round of the decimal number generated

var randomDiceImage = "dice" + randomNumber1 + ".png" ; // dice1.png - dice6.png

var ramdomImageSource = "images/" + randomDiceImage ; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , ramdomImageSource);
// used of dom using js

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var ramdomImageSource2 = "images/dice" + randomNumber2 + ".png" ;
// cancatenation property used to create string 

document.querySelectorAll("img")[1].setAttribute("src" , ramdomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " HOLA! Player 1 wins !!"
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = " HOLA! Player 2 wins !!"
}
else{
    document.querySelector("h1").innerHTML = " Pff!! It's a Draw"
}
