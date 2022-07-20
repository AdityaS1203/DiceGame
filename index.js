var player1=prompt("Player1 : enter your name");
player1=player1.toUpperCase();
var player2=prompt("Player2 : enter your name");
player2=player2.toUpperCase();

document.querySelector(".p1").innerHTML = player1;
document.querySelector(".p2").innerHTML = player2;

var rand1 = Math.floor((Math.random() * 6) + 1);
var image1 = "dice" + rand1 + ".png";
var rand2 = Math.floor((Math.random() * 6) + 1);
var image2 = "dice" + rand2 + ".png";
var finalimg1="images/"+image1;
var finalimg2="images/"+image2;

document.querySelector("img.img1").setAttribute("src",finalimg1);
document.querySelector("img.img2").setAttribute("src",finalimg2);

  if (rand1 > rand2) {
      document.querySelector("h1").innerHTML = player1+" Wins!!!!";
    }
  else if (rand2 > rand1) {
      document.querySelector("h1").innerHTML= player2+" Wins!!!!";
    }
  else {
      document.querySelector("h1").innerHTML = "Draw";
    }
