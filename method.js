/*
Generate Random Dice Number(2)
Compare
Win Lose Draw Conditions
*/ 
var rand1 = Math.floor(Math.random() * 6)+1;
var randDice = "dice" + rand1 + ".png";
var randSource = "./images/" + randDice;
document.querySelectorAll("img")[0].setAttribute("src", randSource);
var rand2 = Math.floor(Math.random() * 6)+1;
var randDice2 = "dice" + rand2 + ".png";
var randSource2 = "./images/" + randDice2;
document.querySelectorAll("img")[1].setAttribute("src", randSource2);
if (rand1 > rand2) {  
  document.querySelector("h1").innerHTML = "Player One Wins!";
} else if (rand1 < rand2) {  
  document.querySelector("h1").innerHTML = "Nice Try!";
}  else{
  document.querySelector("h1").innerHTML = "Draw";
}
