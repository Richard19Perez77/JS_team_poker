function doMouseDown(event) {
  //addDebugLog("mouse down x=" + mouseX + " , y=" + mouseY);
  if (isPlayerTurn() && gameReady) {
    mouseX = event.clientX - offsetX;
    mouseY = event.clientY - offsetY;
    if (doDebugLog) addLog("mouse down x=" + mouseX + " , y=" + mouseY);
    cardClickedOn();
    if (doDebugLog) addLog("mouse down cardSelected=" + cardSelected);

    removeCardHighlights();

    drawBoard();
  }
}

function doMouseMove(event) {
  //addDebugLog("mouse move x=" + mouseX + " , y=" + mouseY);
  if (isPlayerTurn() && gameReady && cardSelected !== -1) {
    if (doDebugLog) addLog("mouse move cardSelected=" + cardSelected);
    mouseX = event.clientX - offsetX;
    mouseY = event.clientY - offsetY;
    placeHolderMouseOverCardIndex = placeholderMoveOn();
    drawBoard();
    drawMovingCard();
  }
}

function doMouseUp(event) {
  if (isPlayerTurn() && gameReady) {
    if (doDebugLog) addLog("mouse up in cardSelected=" + cardSelected);
    mouseX = event.clientX - offsetX;
    mouseY = event.clientY - offsetY;
    placeholderClickedOn();

    drawBoard();
    cardSelected = -1;
    if (doDebugLog) addLog("mouse up out cardSelected=" + cardSelected);
  }
}

function doMouseOut(event) {
  if (isPlayerTurn() && gameReady) {
    cardSelected = -1;
    drawBoard();
  }
}
