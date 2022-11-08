function playerMoveSwitch() {
  newGameButton.disabled = true;
  endTurnButton.disabled = true;

  setTimeout(function() {
    movePlayerCard();
    newGameButton.disabled = false;
    endTurnButton.disabled = false;
    endTurnClicked();

    document.getElementById("endTurnButton").focus();

  }, PC_TURN_DELAY);
}

function movePlayerCard() {
  switch (targetHand) {
    case 0:
      if (runAutoHc) {
        //addLog("hc player " + (playerTurn + 1) + " " + printCardArr(getPlayerCards()));
        findHCcard();
        //addLog("hc player " + (playerTurn + 1) + " " + printCardArr(getPlayerCards()));
      }
      break;
    case 1:
      if (runAuto2k) {
        //addLog("2k player " + (playerTurn + 1) + " " + printCardArr(getPlayerCards()));
        find2Kcard();
        //addLog("2k player " + (playerTurn + 1) + " " + printCardArr(getPlayerCards()));
      }
      break;
    case 2:
      if (runAuto3k) {
        //addLog("3k player " + (playerTurn + 1) + " " + printCardArr(getPlayerCards()));
        find3Kcard();
        //addLog("3k player " + (playerTurn + 1) + " " + printCardArr(getPlayerCards()));
      }
      break;
    case 3:
      if (runAutoSt) {
        //addLog("str player " + (playerTurn + 1) + " " + printCardArr(getPlayerCards()));
        findStraightCard();
        //addLog("str player " + (playerTurn + 1) + " " + printCardArr(getPlayerCards()));
      }
      break;
    case 4:
      if (runAutoFl) {
        //addLog("flush player " + (playerTurn + 1) + " " + printCardArr(getPlayerCards()));
        findFlushCard();
        //addLog("flush player " + (playerTurn + 1) + " " + printCardArr(getPlayerCards()));
      }
      break;
    case 5:
      if (runAuto4k) {
        //addLog("4k player " + (playerTurn + 1) + " " + printCardArr(getPlayerCards()));
        find4KCard();
        //addLog("4k player " + (playerTurn + 1) + " " + printCardArr(getPlayerCards()));
      }
      break;
    case 6:
      if (runAutoSF) {
        //addLog("sf player " + (playerTurn + 1) + " " + printCardArr(getPlayerCards()));
        findStraightFlushCard();
        //addLog("sf player " + (playerTurn + 1) + " " + printCardArr(getPlayerCards()));
      }
      break;
  }
}
