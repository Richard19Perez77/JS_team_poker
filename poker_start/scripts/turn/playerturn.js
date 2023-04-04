function isPlayerTurn() {
  switch (playerTurn) {
    case 0:
      if (player1isPC == true) {
        return false;
      }
      return true;
    case 1:
      if (player2isPC == true) {
        return false;
      }
      return true;
    case 2:
      if (player3isPC == true) {
        return false;
      }
      return true;
    case 3:
      if (player4isPC == true) {
        return false;
      }
      return true;
  }
}

function incrementPlayerTurn() {
  playerTurn++;
  if (playerTurn > 3) {
    playerTurn = 0;
  }

  if(doLogPlayerTurn == true && playerTurn == 0 && player1isPC == false){
      addLog("Player " + (playerTurn + 1) + ": " + printTargetHand());
  }
}
