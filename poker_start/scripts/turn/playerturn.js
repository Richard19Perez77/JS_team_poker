function isPlayerTurn() {
  switch (playerTurn) {
    case 0:
      return player1isPC !== true;

    case 1:
      return player2isPC !== true;

    case 2:
      return player3isPC !== true;

    case 3:
      return player4isPC !== true;

  }
}

function incrementPlayerTurn() {
  playerTurn++;
  if (playerTurn > 3) {
    playerTurn = 0;
  }

  if(doLogPlayerTurn === true && playerTurn === 0 && player1isPC === false){
      addLog("Player " + (playerTurn + 1) + ": " + printTargetHand());
  }
}
