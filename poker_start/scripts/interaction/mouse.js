function updateMouseFromEvent(event) {
  if (!canvas) {
    return;
  }

  const rect = canvas.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) {
    return;
  }

  mouseX = (event.clientX - rect.left) * (canvas.width / rect.width);
  mouseY = (event.clientY - rect.top) * (canvas.height / rect.height);
}

function isPrimaryPointer(event) {
  if (event.isPrimary === false) {
    return false;
  }
  return event.pointerType !== "mouse" || event.button === 0 || event.buttons === 0;
}

function doPointerDown(event) {
  if (!isPrimaryPointer(event) || !isPlayerTurn() || !gameReady) {
    return;
  }

  event.preventDefault();
  canvas.setPointerCapture(event.pointerId);
  updateMouseFromEvent(event);
  if (doDebugLog) addLog("pointer down x=" + mouseX + " , y=" + mouseY);
  cardClickedOn();
  if (doDebugLog) addLog("pointer down cardSelected=" + cardSelected);

  removeCardHighlights();
  drawBoard();
}

function doPointerMove(event) {
  if (event.isPrimary === false || !isPlayerTurn() || !gameReady || cardSelected === -1) {
    return;
  }

  event.preventDefault();
  updateMouseFromEvent(event);
  placeHolderMouseOverCardIndex = placeholderMoveOn();
  drawBoard();
  drawMovingCard();
}

function doPointerUp(event) {
  if (event.isPrimary === false) {
    return;
  }

  if (canvas.hasPointerCapture(event.pointerId)) {
    canvas.releasePointerCapture(event.pointerId);
  }

  if (!isPlayerTurn() || !gameReady) {
    return;
  }

  updateMouseFromEvent(event);
  placeholderClickedOn();
  drawBoard();
  cardSelected = -1;
}

function doPointerCancel(event) {
  if (canvas && canvas.hasPointerCapture(event.pointerId)) {
    canvas.releasePointerCapture(event.pointerId);
  }

  if (isPlayerTurn() && gameReady) {
    cardSelected = -1;
    drawBoard();
  }
}
