function getTurnCoinOffset() {
  switch (playerTurn) {
    case 0:
      return [131, 177];
    case 1:
      return [220, 122];
    case 2:
      return [131, 67];
    case 3:
      return [40, 122];
    default:
      return null;
  }
}

function drawTurnCoin() {
  const offset = getTurnCoinOffset();
  if (!offset) {
    return;
  }

  context.beginPath();
  context.arc(turnModuleX + offset[0], turnModuleY + offset[1], 10, 0, 2 * Math.PI, false);
  context.fillStyle = myBlue;
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = "black";
  context.stroke();
}

function drawHandLabel(text, x1, y1, color) {
  context.fillStyle = color;
  context.fillText(text, Math.max(0, x1 - 40), y1 + 53);
}

function drawSlotBox(x1, y1, fill, stroke) {
  context.beginPath();
  context.rect(x1, y1, 80, 100);
  context.fillStyle = fill;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = stroke;
  context.stroke();
}

function getPlaceholderOrigin(hand, index) {
  const slots = [
    [[hcX1, hcY1]],
    [[twokX1a, twokY1a], [twokX1b, twokY1b]],
    [[threekX1a, threekY1a], [threekX1b, threekY1b], [threekX1c, threekY1c]],
    [[straightX1a, straightY1a], [straightX1b, straightY1b], [straightX1c, straightY1c], [straightX1d, straightY1d], [straightX1e, straightY1e]],
    [[flushX1a, flushY1a], [flushX1b, flushY1b], [flushX1c, flushY1c], [flushX1d, flushY1d], [flushX1e, flushY1e]],
    [[fourkX1a, fourkY1a], [fourkX1b, fourkY1b], [fourkX1c, fourkY1c], [fourkX1d, fourkY1d]],
    [[strFlushX1a, strFlushY1a], [strFlushX1b, strFlushY1b], [strFlushX1c, strFlushY1c], [strFlushX1d, strFlushY1d], [strFlushX1e, strFlushY1e]]
  ];
  const row = slots[hand];
  if (!row || index < 0 || index >= row.length) {
    return null;
  }
  return row[index];
}

function handSlotColors(isActive) {
  if (isActive) {
    return { label: "white", fill: "white", stroke: "black" };
  }
  return { label: "black", fill: myGreen, stroke: "black" };
}

function drawHC() {
  const colors = handSlotColors(targetHand === 0);
  drawHandLabel("HC", hcX1, hcY1, colors.label);
  drawSlotBox(hcX1, hcY1, colors.fill, colors.stroke);
}

function draw2K() {
  const colors = handSlotColors(targetHand === 1);
  drawHandLabel("2K", twokX1a, twokY1a, colors.label);
  drawSlotBox(twokX1a, twokY1a, colors.fill, colors.stroke);
  drawSlotBox(twokX1b, twokY1b, colors.fill, colors.stroke);
}

function draw3K() {
  const colors = handSlotColors(targetHand === 2);
  drawHandLabel("3K", threekX1a, threekY1a, colors.label);
  drawSlotBox(threekX1a, threekY1a, colors.fill, colors.stroke);
  drawSlotBox(threekX1b, threekY1b, colors.fill, colors.stroke);
  drawSlotBox(threekX1c, threekY1c, colors.fill, colors.stroke);
}

function drawST() {
  const colors = handSlotColors(targetHand === 3);
  drawHandLabel("ST", straightX1a, straightY1a, colors.label);
  drawSlotBox(straightX1a, straightY1a, colors.fill, colors.stroke);
  drawSlotBox(straightX1b, straightY1b, colors.fill, colors.stroke);
  drawSlotBox(straightX1c, straightY1c, colors.fill, colors.stroke);
  drawSlotBox(straightX1d, straightY1d, colors.fill, colors.stroke);
  drawSlotBox(straightX1e, straightY1e, colors.fill, colors.stroke);
}

function drawFL() {
  const colors = handSlotColors(targetHand === 4);
  drawHandLabel("FL", flushX1a, flushY1a, colors.label);
  drawSlotBox(flushX1a, flushY1a, colors.fill, colors.stroke);
  drawSlotBox(flushX1b, flushY1b, colors.fill, colors.stroke);
  drawSlotBox(flushX1c, flushY1c, colors.fill, colors.stroke);
  drawSlotBox(flushX1d, flushY1d, colors.fill, colors.stroke);
  drawSlotBox(flushX1e, flushY1e, colors.fill, colors.stroke);
}

function draw4K() {
  const colors = handSlotColors(targetHand === 5);
  drawHandLabel("FK", fourkX1a, fourkY1a, colors.label);
  drawSlotBox(fourkX1a, fourkY1a, colors.fill, colors.stroke);
  drawSlotBox(fourkX1b, fourkY1b, colors.fill, colors.stroke);
  drawSlotBox(fourkX1c, fourkY1c, colors.fill, colors.stroke);
  drawSlotBox(fourkX1d, fourkY1d, colors.fill, colors.stroke);
}

function drawSF() {
  const colors = handSlotColors(targetHand === 6);
  drawHandLabel("SF", strFlushX1a, strFlushY1a, colors.label);
  drawSlotBox(strFlushX1a, strFlushY1a, colors.fill, colors.stroke);
  drawSlotBox(strFlushX1b, strFlushY1b, colors.fill, colors.stroke);
  drawSlotBox(strFlushX1c, strFlushY1c, colors.fill, colors.stroke);
  drawSlotBox(strFlushX1d, strFlushY1d, colors.fill, colors.stroke);
  drawSlotBox(strFlushX1e, strFlushY1e, colors.fill, colors.stroke);
}

function drawTableCards() {
  const ox = turnModuleX;
  const oy = turnModuleY;

  drawSlotBox(ox + 90, oy, myGreen, "black");
  drawSlotBox(ox + 90, oy + 110, myGreen, "black");
  drawSlotBox(ox, oy + 52, myGreen, "black");
  drawSlotBox(ox + 180, oy + 52, myGreen, "black");

  context.fillStyle = "black";
  context.fillText(player1Name, ox + 125, oy + 147);
  context.fillText(player2Name, ox + 205, oy + 97);
  context.fillText(player3Name, ox + 115, oy + 37);
  context.fillText(player4Name, ox + 20, oy + 97);
}

function drawCardPlaceholders() {
  drawHC();
  draw2K();
  draw3K();
  drawST();
  drawFL();
  draw4K();
  drawSF();
  drawTableCards();
}

function drawPlayer1Hand() {
  if (doDebugLog) addLog("draw Player " + (playerTurn + 1) + " " + printCardArr(player1Cards));
  //debugCardBitmaps(player1Cards);
  for (let i = 0; i < player1Cards.length; i++) {
    switch (i) {
      case 0:
        context.drawImage(player1Cards[0].bitmap, 0, 0, 80, 100);
        break;
      case 1:
        context.drawImage(player1Cards[1].bitmap, 85, 0, 80, 100);
        break;
      case 2:
        context.drawImage(player1Cards[2].bitmap, 170, 0, 80, 100);
        break;
      case 3:
        context.drawImage(player1Cards[3].bitmap, 255, 0, 80, 100);
        break;
      case 4:
        context.drawImage(player1Cards[4].bitmap, 340, 0, 80, 100);
        break;
      case 5:
        context.drawImage(player1Cards[5].bitmap, 425, 0, 80, 100);
        break;
      case 6:
        context.drawImage(player1Cards[6].bitmap, 510, 0, 80, 100);
        break;
    }
  }
}

function drawPlayer2Hand() {
  if (doDebugLog) addLog("draw Player " + (playerTurn + 1) + " " + printCardArr(player2Cards));
  //debugCardBitmaps(player2Cards);
  for (let i = 0; i < player2Cards.length; i++) {
    switch (i) {
      case 0:
        context.drawImage(player2Cards[0].bitmap, 0, 0, 80, 100);
        break;
      case 1:
        context.drawImage(player2Cards[1].bitmap, 85, 0, 80, 100);
        break;
      case 2:
        context.drawImage(player2Cards[2].bitmap, 170, 0, 80, 100);
        break;
      case 3:
        context.drawImage(player2Cards[3].bitmap, 255, 0, 80, 100);
        break;
      case 4:
        context.drawImage(player2Cards[4].bitmap, 340, 0, 80, 100);
        break;
      case 5:
        context.drawImage(player2Cards[5].bitmap, 425, 0, 80, 100);
        break;
      case 6:
        context.drawImage(player2Cards[6].bitmap, 510, 0, 80, 100);
        break;
    }
  }
}

function drawPlayer3Hand() {
  if (doDebugLog) addLog("draw Player " + (playerTurn + 1) + " " + printCardArr(player3Cards));
  //debugCardBitmaps(player3Cards);
  for (let i = 0; i < player3Cards.length; i++) {
    switch (i) {
      case 0:
        context.drawImage(player3Cards[0].bitmap, 0, 0, 80, 100);
        break;
      case 1:
        context.drawImage(player3Cards[1].bitmap, 85, 0, 80, 100);
        break;
      case 2:
        context.drawImage(player3Cards[2].bitmap, 170, 0, 80, 100);
        break;
      case 3:
        context.drawImage(player3Cards[3].bitmap, 255, 0, 80, 100);
        break;
      case 4:
        context.drawImage(player3Cards[4].bitmap, 340, 0, 80, 100);
        break;
      case 5:
        context.drawImage(player3Cards[5].bitmap, 425, 0, 80, 100);
        break;
      case 6:
        context.drawImage(player3Cards[6].bitmap, 510, 0, 80, 100);
        break;
    }
  }
}

function drawPlayer4Hand() {
  if (doDebugLog) addLog("draw Player " + (playerTurn + 1) + " " + printCardArr(player4Cards));
  //debugCardBitmaps(player4Cards);
  for (let i = 0; i < player4Cards.length; i++) {
    switch (i) {
      case 0:
        context.drawImage(player4Cards[0].bitmap, 0, 0, 80, 100);
        break;
      case 1:
        context.drawImage(player4Cards[1].bitmap, 85, 0, 80, 100);
        break;
      case 2:
        context.drawImage(player4Cards[2].bitmap, 170, 0, 80, 100);
        break;
      case 3:
        context.drawImage(player4Cards[3].bitmap, 255, 0, 80, 100);
        break;
      case 4:
        context.drawImage(player4Cards[4].bitmap, 340, 0, 80, 100);
        break;
      case 5:
        context.drawImage(player4Cards[5].bitmap, 425, 0, 80, 100);
        break;
      case 6:
        context.drawImage(player4Cards[6].bitmap, 510, 0, 80, 100);
        break;
    }
  }
}

function drawPlayerCards() {
  if (gameReady || doShowUIDuringTest) {
    switch (playerTurn) {
      case 0:
        drawPlayer1Hand();
        break;
      case 1:
        drawPlayer2Hand();
        break;
      case 2:
        drawPlayer3Hand();
        break;
      case 3:
        drawPlayer4Hand();
        break;
    }
  } else {

    context.drawImage(backImage, 0, 0, 80, 100);
    context.drawImage(backImage, 85, 0, 80, 100);
    context.drawImage(backImage, 170, 0, 80, 100);
    context.drawImage(backImage, 255, 0, 80, 100);
    context.drawImage(backImage, 340, 0, 80, 100);
    context.drawImage(backImage, 425, 0, 80, 100);
    context.drawImage(backImage, 510, 0, 80, 100);

    context.beginPath();
    context.rect(0, 0, 80, 100);
    context.lineWidth = 2;
    context.strokeStyle = myBlack;
    context.stroke();

    context.beginPath();
    context.rect(85, 0, 80, 100);
    context.lineWidth = 2;
    context.strokeStyle = myBlack;
    context.stroke();

    context.beginPath();
    context.rect(170, 0, 80, 100);
    context.lineWidth = 2;
    context.strokeStyle = myBlack;
    context.stroke();

    context.beginPath();
    context.rect(255, 0, 80, 100);
    context.lineWidth = 2;
    context.strokeStyle = myBlack;
    context.stroke();

    context.beginPath();
    context.rect(340, 0, 80, 100);
    context.lineWidth = 2;
    context.strokeStyle = myBlack;
    context.stroke();

    context.beginPath();
    context.rect(425, 0, 80, 100);
    context.lineWidth = 2;
    context.strokeStyle = myBlack;
    context.stroke();

    context.beginPath();
    context.rect(510, 0, 80, 100);
    context.lineWidth = 2;
    context.strokeStyle = myBlack;
    context.stroke();
  }
}

function drawBoard() {
  
  // can stop this on debug
  if(!doRunControlTest || doShowUIDuringTest){
    clearCanvas();
    drawPlayerCards();
    drawCardPlaceholders();
    drawPlaceholderCards();
    drawTurnCoin();
    drawPlayerCardHightlight();
    drawArrowPlayerCardHighlight();
    drawArrowPlaceholderCardHighlight();
    drawPlaceholderCardMouseOverFilter();
  }
}

function fillSlotOverlay(x, y) {
  context.beginPath();
  context.rect(x, y, 80, 100);
  context.fillStyle = "red";
  context.globalAlpha = 0.25;
  context.fill();
  context.globalAlpha = 1.0;
}

function strokeSlotHighlight(x, y) {
  context.beginPath();
  context.rect(x, y, 80, 100);
  context.lineWidth = 5;
  context.strokeStyle = "red";
  context.stroke();
}

function drawPlaceholderCardMouseOverFilter() {
  const origin = getPlaceholderOrigin(targetHand, placeHolderMouseOverCardIndex);
  if (!origin) {
    return;
  }
  fillSlotOverlay(origin[0], origin[1]);
}

function drawArrowPlaceholderCardHighlight() {
  const origin = getPlaceholderOrigin(targetHand, arrowPlaceholderCardSelected);
  if (!origin) {
    return;
  }
  strokeSlotHighlight(origin[0], origin[1]);
}

function drawArrowPlayerCardHighlight() {
  switch (arrowPlayerCardSelected) {
    case 0:
      context.beginPath();
      context.rect(0, 0, 80, 100);
      context.lineWidth = 5;
      context.strokeStyle = 'red';
      context.stroke();
      break;
    case 1:
      context.beginPath();
      context.rect(85, 0, 80, 100);
      context.lineWidth = 5;
      context.strokeStyle = 'red';
      context.stroke();
      break;
    case 2:
      context.beginPath();
      context.rect(170, 0, 80, 100);
      context.lineWidth = 5;
      context.strokeStyle = 'red';
      context.stroke();
      break;
    case 3:
      context.beginPath();
      context.rect(255, 0, 80, 100);
      context.lineWidth = 5;
      context.strokeStyle = 'red';
      context.stroke();
      break;
    case 4:
      context.beginPath();
      context.rect(340, 0, 80, 100);
      context.lineWidth = 5;
      context.strokeStyle = 'red';
      context.stroke();
      break;
    case 5:
      context.beginPath();
      context.rect(425, 0, 80, 100);
      context.lineWidth = 5;
      context.strokeStyle = 'red';
      context.stroke();
      break;
    case 6:
      context.beginPath();
      context.rect(510, 0, 80, 100);
      context.lineWidth = 5;
      context.strokeStyle = 'red';
      context.stroke();
      break;
  }
}

function drawPlayerCardHightlight() {
  if (doDebugLog) addLog("drawPlayerCardHighlight() " + playercardPressed);
  switch (playercardPressed) {
    case 0:
      context.beginPath();
      context.rect(0, 0, 80, 100);
      context.lineWidth = 5;
      context.strokeStyle = 'red';
      context.stroke();
      break;
    case 1:
      context.beginPath();
      context.rect(85, 0, 80, 100);
      context.lineWidth = 5;
      context.strokeStyle = 'red';
      context.stroke();
      break;
    case 2:
      context.beginPath();
      context.rect(170, 0, 80, 100);
      context.lineWidth = 5;
      context.strokeStyle = 'red';
      context.stroke();
      break;
    case 3:
      context.beginPath();
      context.rect(255, 0, 80, 100);
      context.lineWidth = 5;
      context.strokeStyle = 'red';
      context.stroke();
      break;
    case 4:
      context.beginPath();
      context.rect(340, 0, 80, 100);
      context.lineWidth = 5;
      context.strokeStyle = 'red';
      context.stroke();
      break;
    case 5:
      context.beginPath();
      context.rect(425, 0, 80, 100);
      context.lineWidth = 5;
      context.strokeStyle = 'red';
      context.stroke();
      break;
    case 6:
      context.beginPath();
      context.rect(510, 0, 80, 100);
      context.lineWidth = 5;
      context.strokeStyle = 'red';
      context.stroke();
      break;
  }
}

function drawPlaceholderCards() {

  // draw high card
  if (hcSlotCard == null) {
    if (targetHand > 0) {
      context.drawImage(backImage, hcX1, hcY1, 80, 100);
    }
  } else {
    context.drawImage(hcSlotCard.bitmap, hcX1, hcY1, 80, 100);
  }

  // draw two of a kind
  if (twoPSlotCard1 == null) {
    if (targetHand > 1) {
      context.drawImage(backImage, twokX1a, twokY1a, 80, 100);
    }
  } else {
    context.drawImage(twoPSlotCard1.bitmap, twokX1a, twokY1a, 80, 100);
  }

  if (twoPSlotCard2 == null) {
    if (targetHand > 1) {
      context.drawImage(backImage, twokX1b, twokY1b, 80, 100);
    }
  } else {
    context.drawImage(twoPSlotCard2.bitmap, twokX1b, twokY1b, 80, 100);
  }

  // draw three of a kind
  if (threePSlotCard1 == null) {
    if (targetHand > 2) {
      context.drawImage(backImage, threekX1a, threekY1a, 80, 100);
    }
  } else {
    context.drawImage(threePSlotCard1.bitmap, threekX1a, threekY1a, 80, 100);
  }

  if (threePSlotCard2 == null) {
    if (targetHand > 2) {
      context.drawImage(backImage, threekX1b, threekY1b, 80, 100);
    }
  } else {
    context.drawImage(threePSlotCard2.bitmap, threekX1b, threekY1b, 80, 100);
  }

  if (threePSlotCard3 == null) {
    if (targetHand > 2) {
      context.drawImage(backImage, threekX1c, threekY1c, 80, 100);
    }
  } else {
    context.drawImage(threePSlotCard3.bitmap, threekX1c, threekY1c, 80, 100);
  }

  //draw straight cards
  if (straightSlotCard1 == null) {
    if (targetHand > 3) {
      context.drawImage(backImage, straightX1a, straightY1a, 80, 100);
    }
  } else {
    context.drawImage(straightSlotCard1.bitmap, straightX1a, straightY1a, 80, 100);
  }

  if (straightSlotCard2 == null) {
    if (targetHand > 3) {
      context.drawImage(backImage, straightX1b, straightY1b, 80, 100);
    }
  } else {
    context.drawImage(straightSlotCard2.bitmap, straightX1b, straightY1b, 80, 100);
  }

  if (straightSlotCard3 == null) {
    if (targetHand > 3) {
      context.drawImage(backImage, straightX1c, straightY1c, 80, 100);
    }
  } else {
    context.drawImage(straightSlotCard3.bitmap, straightX1c, straightY1c, 80, 100);
  }

  if (straightSlotCard4 == null) {
    if (targetHand > 3) {
      context.drawImage(backImage, straightX1d, straightY1d, 80, 100);
    }
  } else {
    context.drawImage(straightSlotCard4.bitmap, straightX1d, straightY1d, 80, 100);
  }

  if (straightSlotCard5 == null) {
    if (targetHand > 3) {
      context.drawImage(backImage, straightX1e, straightY1e, 80, 100);
    }
  } else {
    context.drawImage(straightSlotCard5.bitmap, straightX1e, straightY1e, 80, 100);
  }

  //draw flush placed cards
  if (flushSlotCard1 == null) {
    if (targetHand > 4) {
      context.drawImage(backImage, flushX1a, flushY1a, 80, 100);
    }
  } else {
    context.drawImage(flushSlotCard1.bitmap, flushX1a, flushY1a, 80, 100);
  }

  if (flushSlotCard2 == null) {
    if (targetHand > 4) {
      context.drawImage(backImage, flushX1b, flushY1b, 80, 100);
    }
  } else {
    context.drawImage(flushSlotCard2.bitmap, flushX1b, flushY1b, 80, 100);
  }

  if (flushSlotCard3 == null) {
    if (targetHand > 4) {
      context.drawImage(backImage, flushX1c, flushY1c, 80, 100);
    }
  } else {
    context.drawImage(flushSlotCard3.bitmap, flushX1c, flushY1c, 80, 100);
  }

  if (flushSlotCard4 == null) {
    if (targetHand > 4) {
      context.drawImage(backImage, flushX1d, flushY1d, 80, 100);
    }
  } else {
    context.drawImage(flushSlotCard4.bitmap, flushX1d, flushY1d, 80, 100);
  }

  if (flushSlotCard5 == null) {
    if (targetHand > 4) {
      context.drawImage(backImage, flushX1e, flushY1e, 80, 100);
    }
  } else {
    context.drawImage(flushSlotCard5.bitmap, flushX1e, flushY1e, 80, 100);
  }

  //draw 4k placed cards
  if (fourkSlotCard1 == null) {
    if (targetHand > 5) {
      context.drawImage(backImage, fourkX1a, fourkY1a, 80, 100);
    }
  } else {
    context.drawImage(fourkSlotCard1.bitmap, fourkX1a, fourkY1a, 80, 100);
  }

  if (fourkSlotCard2 == null) {
    if (targetHand > 5) {
      context.drawImage(backImage, fourkX1b, fourkY1b, 80, 100);
    }
  } else {
    context.drawImage(fourkSlotCard2.bitmap, fourkX1b, fourkY1b, 80, 100);
  }

  if (fourkSlotCard3 == null) {
    if (targetHand > 5) {
      context.drawImage(backImage, fourkX1c, fourkY1c, 80, 100);
    }
  } else {
    context.drawImage(fourkSlotCard3.bitmap, fourkX1c, fourkY1c, 80, 100);
  }

  if (fourkSlotCard4 == null) {
    if (targetHand > 5) {
      context.drawImage(backImage, fourkX1d, fourkY1d, 80, 100);
    }
  } else {
    context.drawImage(fourkSlotCard4.bitmap, fourkX1d, fourkY1d, 80, 100);
  }

  //draw sf placed cards
  if (strFlushSlotCard1 == null) {
    if (targetHand > 6) {
      context.drawImage(backImage, strFlushX1a, strFlushY1a, 80, 100);
    }
  } else {
    context.drawImage(strFlushSlotCard1.bitmap, strFlushX1a, strFlushY1a, 80, 100);
  }

  if (strFlushSlotCard2 == null) {
    if (targetHand > 6) {
      context.drawImage(backImage, strFlushX1b, strFlushY1b, 80, 100);
    }
  } else {
    context.drawImage(strFlushSlotCard2.bitmap, strFlushX1b, strFlushY1b, 80, 100);
  }

  if (strFlushSlotCard3 == null) {
    if (targetHand > 6) {
      context.drawImage(backImage, strFlushX1c, strFlushY1c, 80, 100);
    }
  } else {
    context.drawImage(strFlushSlotCard3.bitmap, strFlushX1c, strFlushY1c, 80, 100);
  }

  if (strFlushSlotCard4 == null) {
    if (targetHand > 6) {
      context.drawImage(backImage, strFlushX1d, strFlushY1d, 80, 100);
    }
  } else {
    context.drawImage(strFlushSlotCard4.bitmap, strFlushX1d, strFlushY1d, 80, 100);
  }

  if (strFlushSlotCard5 == null) {
    if (targetHand > 6) {
      context.drawImage(backImage, strFlushX1e, strFlushY1e, 80, 100);
    }
  } else {
    context.drawImage(strFlushSlotCard5.bitmap, strFlushX1e, strFlushY1e, 80, 100);
  }
}

function drawMovingCard() {
  if (doDebugLog) addLog("draw moving card " + cardSelected);
  if (cardSelected > -1) {
    switch (playerTurn) {
      case 0:
        context.drawImage(player1Cards[cardSelected].bitmap, mouseX - cardOffsetX, mouseY - cardOffsetY, 80, 100);
        break;
      case 1:
        context.drawImage(player2Cards[cardSelected].bitmap, mouseX - cardOffsetX, mouseY - cardOffsetY, 80, 100);
        break;
      case 2:
        context.drawImage(player3Cards[cardSelected].bitmap, mouseX - cardOffsetX, mouseY - cardOffsetY, 80, 100);
        break;
      case 3:
        context.drawImage(player4Cards[cardSelected].bitmap, mouseX - cardOffsetX, mouseY - cardOffsetY, 80, 100);
        break;
    }
  }
}
