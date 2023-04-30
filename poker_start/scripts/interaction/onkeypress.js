function onKeyUp(e) {
  // console.log("e.type=" + e.type);
}

function onKeyDown(e) {
  console.log("e.keycode=" + e.keyCode);
  if (gameReady) {
    switch (e.keyCode) {
      case 17: // control
        if (isPlayerTurn()) {
          controlListener();
        }
        break;
      case 37: // <-
        if (isPlayerTurn()) {
          leftArrowListener();
        }
        break;
      case 38: // up arrow
        if (isPlayerTurn()) {
          upArrowListener();
        }
        break;
      case 39: // ->
        if (isPlayerTurn()) {
          rightArrowListener();
        }
        break;
      case 40: // down arrow
        if (isPlayerTurn()) {
          downArrowListener();
        }
        break;
      case 65: // a
        if (isPlayerTurn()) {
          placeHolderPress(0);
        }
        break;
      case 82: // r
        if (isPlayerTurn()) {
          sortCardsToggle();
        }
        break;
      case 191: // ?/
        if (isPlayerTurn()) {
          sortCardsToggle();
        }
        break;
      case 83: // s
        if (isPlayerTurn()) {
          placeHolderPress(1);
        }
        break;
      case 68: // d
        if (isPlayerTurn()) {
          placeHolderPress(2);
        }
        break;
      case 70: // f
        if (isPlayerTurn()) {
          placeHolderPress(3);
        }
        break;
      case 71: // g
        if (isPlayerTurn()) {
          placeHolderPress(4);
        }
        break;
      case 49: // 1
        if (isPlayerTurn()) {
          playerCardPress(0);
        }
        break;
      case 50: // 2
        if (isPlayerTurn()) {
          playerCardPress(1);
        }
        break;
      case 51: // 3
        if (isPlayerTurn()) {
          playerCardPress(2);
        }
        break;
      case 52: // 4
        if (isPlayerTurn()) {
          playerCardPress(3);
        }
        break;
      case 53: // 5
        if (isPlayerTurn()) {
          playerCardPress(4);
        }
        break;
      case 54: // 6
        if (isPlayerTurn()) {
          playerCardPress(5);
        }
        break;
      case 55: // 7
        if (isPlayerTurn()) {
          playerCardPress(6);
        }
        break;
      case 66: //b
        blogButtonClicked();
        break;
      case 67: //c
        controlsButtonClicked();
        return;
      case 69: //e
        if (isPlayerTurn()) {
          endTurnClicked();
        }
        break;
      case 35: // end
        if (isPlayerTurn()) {
          endTurnClicked();
        }
        break;
      case 77: //m
        musicButtonClicked();
        break;
      case 78: // n
        if (isPlayerTurn() || gameOver) {
          newGameClicked();
        }
        break;
      case 16: // left shift
        if (isPlayerTurn() || gameOver) {
          newGameClicked();
        }
        break;
      case 88: // x
        scoreButtonClicked();
        break;
    }
  } else {
    hideTutorial();
  }
}
