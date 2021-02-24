var heading = document.querySelector("h1");

function generateDiceNumber() {
  return Math.floor(Math.random()*6)+1;
}

function rollDice() {
  var player1Number = generateDiceNumber();
  var player2Number = generateDiceNumber();

  var diceArray = document.getElementsByClassName("dice-img");
  diceArray[0].setAttribute("src", "images/dice" + player1Number + ".png");
  diceArray[1].setAttribute("src", "images/dice" + player2Number + ".png");

  if (player1Number > player2Number)
    heading.innerHTML = "Player 1 Wins!";
  else if (player1Number < player2Number)
    heading.innerHTML = "Player 2 Wins!";
  else
    heading.innerHTML = "Draw!";
}

document.getElementsByClassName("roll-dice")[0].onclick = rollDice;
