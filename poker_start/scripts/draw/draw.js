function drawTurnCoin() {
  switch (playerTurn) {
    case 0:
      context.beginPath();
      context.arc(741, 180, 10, 0, 2 * Math.PI, false);
      context.fillStyle = myBlue;
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = 'black';
      context.stroke();
      break;
    case 1:
      context.beginPath();
      context.arc(830, 125, 10, 0, 2 * Math.PI, false);
      context.fillStyle = myBlue;
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = 'black';
      context.stroke();
      break;
    case 2:
      context.beginPath();
      context.arc(741, 70, 10, 0, 2 * Math.PI, false);
      context.fillStyle = myBlue;
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = 'black';
      context.stroke();
      break;
    case 3:
      context.beginPath();
      context.arc(650, 125, 10, 0, 2 * Math.PI, false);
      context.fillStyle = myBlue;
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = 'black';
      context.stroke();
      break;
  }
}

function drawHC() {
  let colora = 'white';
  let colorb = 'black';
  let colorc = myGreen;

  if (targetHand === 0) {
    colora = 'white';
    colorb = 'white';
    colorc = 'black';
  } else {
    colora = 'black';
    colorb = myGreen;
    colorc = 'black';
  }

  context.fillStyle = colora;
  context.fillText("HC", 0, 188);

  context.beginPath();
  context.rect(40, 135, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();
}

function draw2K() {
  let colora = 'white';
  let colorb = 'black';
  let colorc = myGreen;

  if (targetHand === 1) {
    colora = 'white';
    colorb = 'white';
    colorc = 'black';
  } else {
    colora = 'black';
    colorb = myGreen;
    colorc = 'black';
  }

  context.fillStyle = colora;
  context.fillText("2K", 0, 295);

  context.beginPath();
  context.rect(40, 240, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();

  context.beginPath();
  context.rect(125, 240, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();
}

function draw3K() {
  let colora = 'white';
  let colorb = 'black';
  let colorc = myGreen;

  if (targetHand === 2) {
    colora = 'white';
    colorb = 'white';
    colorc = 'black';
  } else {
    colora = 'black';
    colorb = myGreen;
    colorc = 'black';
  }

  context.fillStyle = colora;
  context.fillText("3K", 0, 415);

  context.beginPath();
  context.rect(40, 345, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();

  context.beginPath();
  context.rect(125, 345, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();

  context.beginPath();
  context.rect(210, 345, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();
}

function drawST() {
  let colora = 'white';
  let colorb = 'black';
  let colorc = myGreen;

  if (targetHand === 3) {
    colora = 'white';
    colorb = 'white';
    colorc = 'black';
  } else {
    colora = 'black';
    colorb = myGreen;
    colorc = 'black';
  }

  context.fillStyle = colora;
  context.fillText("ST", 0, 510);

  context.beginPath();
  context.rect(40, 450, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();

  context.beginPath();
  context.rect(125, 450, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();

  context.beginPath();
  context.rect(210, 450, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();

  context.beginPath();
  context.rect(295, 450, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();

  context.beginPath();
  context.rect(380, 450, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();
}

function drawFL() {
  let colora = 'white';
  let colorb = 'black';
  let colorc = myGreen;

  if (targetHand === 4) {
    colora = 'white';
    colorb = 'white';
    colorc = 'black';
  } else {
    colora = 'black';
    colorb = myGreen;
    colorc = 'black';
  }

  context.fillStyle = colora;
  context.fillText("FL", 475, 295);

  context.beginPath();
  context.rect(515, 240, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();

  context.beginPath();
  context.rect(600, 240, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();

  context.beginPath();
  context.rect(685, 240, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();

  context.beginPath();
  context.rect(770, 240, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();

  context.beginPath();
  context.rect(855, 240, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();
}

function draw4K() {
  let colora = 'white';
  let colorb = 'black';
  let colorc = myGreen;

  if (targetHand === 5) {
    colora = 'white';
    colorb = 'white';
    colorc = 'black';
  } else {
    colora = 'black';
    colorb = myGreen;
    colorc = 'black';
  }

  context.fillStyle = colora;
  context.fillText("FK", 475, 410);

  context.beginPath();
  context.rect(515, 345, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();

  context.beginPath();
  context.rect(600, 345, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();

  context.beginPath();
  context.rect(685, 345, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();

  context.beginPath();
  context.rect(770, 345, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();
}

function drawSF() {
  let colora = 'white';
  let colorb = 'black';
  let colorc = myGreen;

  if (targetHand === 6) {
    colora = 'white';
    colorb = 'white';
    colorc = 'black';
  } else {
    colora = 'black';
    colorb = myGreen;
    colorc = 'black';
  }

  context.fillStyle = colora;
  context.fillText("SF", 475, 510);

  context.beginPath();
  context.rect(515, 450, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();

  context.beginPath();
  context.rect(600, 450, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();

  context.beginPath();
  context.rect(685, 450, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();

  context.beginPath();
  context.rect(770, 450, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();

  context.beginPath();
  context.rect(855, 450, 80, 100);
  context.fillStyle = colorb;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = colorc;
  context.stroke();
}

function drawTableCards() {
  context.beginPath();
  context.rect(700, 3, 80, 100);
  context.fillStyle = myGreen;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = 'black';
  context.stroke();

  context.beginPath();
  context.rect(700, 113, 80, 100);
  context.fillStyle = myGreen;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = 'black';
  context.stroke();

  context.beginPath();
  context.rect(610, 55, 80, 100);
  context.fillStyle = myGreen;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = 'black';
  context.stroke();

  context.beginPath();
  context.rect(790, 55, 80, 100);
  context.fillStyle = myGreen;
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = 'black';
  context.stroke();

  context.fillStyle = 'black';
  context.fillText(player1Name, 735, 150);
  context.stroke();

  context.fillStyle = 'black';
  context.fillText(player2Name, 815, 100);
  context.stroke();

  context.fillStyle = 'black';
  context.fillText(player3Name, 725, 40);
  context.stroke();

  context.fillStyle = 'black';
  context.fillText(player4Name, 630, 100);
  context.stroke();
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
  //addLog("draw Player " + (playerTurn + 1) + " " + printCardArr(player1Cards));
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
  //addLog("draw Player " + (playerTurn + 1) + " " + printCardArr(player2Cards));
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
  //addLog("draw Player " + (playerTurn + 1) + " " + printCardArr(player3Cards));
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
  //addLog("draw Player " + (playerTurn + 1) + " " + printCardArr(player4Cards));
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

function drawPlaceholderCardMouseOverFilter() {
  // addDebugLog("hand=" + targetHand + " placeHolderMouseOverCardIndex=" + placeHolderMouseOverCardIndex);
  switch (targetHand) {
    case 0:
      switch (placeHolderMouseOverCardIndex) {
        case 0:
          context.beginPath();
          context.rect(40, 135, 80, 100);
          context.fillStyle = 'red';
          context.globalAlpha = 0.25;
          context.fill();
          context.globalAlpha = 1.0;
          return;
      }
    case 1:
      switch (placeHolderMouseOverCardIndex) {
        case 0:
          context.beginPath();
          context.rect(40, 240, 80, 100);
          context.fillStyle = 'red';
          context.globalAlpha = 0.25;
          context.fill();
          context.globalAlpha = 1.0;
          return;
        case 1:
          context.beginPath();
          context.rect(125, 240, 80, 100);
          context.fillStyle = 'red';
          context.globalAlpha = 0.25;
          context.fill();
          context.globalAlpha = 1.0;
          return;
      }
    case 2:
      switch (placeHolderMouseOverCardIndex) {
        case 0:
          context.beginPath();
          context.rect(40, 345, 80, 100);
          context.fillStyle = 'red';
          context.globalAlpha = 0.25;
          context.fill();
          context.globalAlpha = 1.0;
          return;
        case 1:
          context.beginPath();
          context.rect(125, 345, 80, 100);
          context.fillStyle = 'red';
          context.globalAlpha = 0.25;
          context.fill();
          context.globalAlpha = 1.0;
          return;
        case 2:
          context.beginPath();
          context.rect(210, 345, 80, 100);
          context.fillStyle = 'red';
          context.globalAlpha = 0.25;
          context.fill();
          context.globalAlpha = 1.0;
          return;
      }
    case 3:
      switch (placeHolderMouseOverCardIndex) {
        case 0:
          context.beginPath();
          context.rect(40, 450, 80, 100);
          context.fillStyle = 'red';
          context.globalAlpha = 0.25;
          context.fill();
          context.globalAlpha = 1.0;
          return;
        case 1:
          context.beginPath();
          context.rect(125, 450, 80, 100);
          context.fillStyle = 'red';
          context.globalAlpha = 0.25;
          context.fill();
          context.globalAlpha = 1.0;
          return;
        case 2:
          context.beginPath();
          context.rect(210, 450, 80, 100);
          context.fillStyle = 'red';
          context.globalAlpha = 0.25;
          context.fill();
          context.globalAlpha = 1.0;
          return;
        case 3:
          context.beginPath();
          context.rect(295, 450, 80, 100);
          context.fillStyle = 'red';
          context.globalAlpha = 0.25;
          context.fill();
          context.globalAlpha = 1.0;
          return;
        case 4:
          context.beginPath();
          context.rect(380, 450, 80, 100);
          context.fillStyle = 'red';
          context.globalAlpha = 0.25;
          context.fill();
          context.globalAlpha = 1.0;
          return;
      }
      case 4:
        switch (placeHolderMouseOverCardIndex) {
          case 0:
            context.beginPath();
            context.rect(515, 240, 80, 100);
            context.fillStyle = 'red';
            context.globalAlpha = 0.25;
            context.fill();
            context.globalAlpha = 1.0;
            return;
          case 1:
            context.beginPath();
            context.rect(600, 240, 80, 100);
            context.fillStyle = 'red';
            context.globalAlpha = 0.25;
            context.fill();
            context.globalAlpha = 1.0;
            return;
          case 2:
            context.beginPath();
            context.rect(685, 240, 80, 100);
            context.fillStyle = 'red';
            context.globalAlpha = 0.25;
            context.fill();
            context.globalAlpha = 1.0;
            return;
          case 3:
            context.beginPath();
            context.rect(770, 240, 80, 100);
            context.fillStyle = 'red';
            context.globalAlpha = 0.25;
            context.fill();
            context.globalAlpha = 1.0;
            return;
          case 4:
            context.beginPath();
            context.rect(855, 240, 80, 100);
            context.fillStyle = 'red';
            context.globalAlpha = 0.25;
            context.fill();
            context.globalAlpha = 1.0;
            return;
        }
        break;
      case 5:
        switch (placeHolderMouseOverCardIndex) {
          case 0:
            context.beginPath();
            context.rect(515, 345, 80, 100);
            context.fillStyle = 'red';
            context.globalAlpha = 0.25;
            context.fill();
            context.globalAlpha = 1.0;
            return;
          case 1:
            context.beginPath();
            context.rect(600, 345, 80, 100);
            context.fillStyle = 'red';
            context.globalAlpha = 0.25;
            context.fill();
            context.globalAlpha = 1.0;
            return;
          case 2:
            context.beginPath();
            context.rect(685, 345, 80, 100);
            context.fillStyle = 'red';
            context.globalAlpha = 0.25;
            context.fill();
            context.globalAlpha = 1.0;
            return;
          case 3:
            context.beginPath();
            context.rect(770, 345, 80, 100);
            context.fillStyle = 'red';
            context.globalAlpha = 0.25;
            context.fill();
            context.globalAlpha = 1.0;
            return;
        }
      case 6:
        switch (placeHolderMouseOverCardIndex) {
          case 0:
            context.beginPath();
            context.rect(515, 450, 80, 100);
            context.fillStyle = 'red';
            context.globalAlpha = 0.25;
            context.fill();
            context.globalAlpha = 1.0;
            return;
          case 1:
            context.beginPath();
            context.rect(600, 450, 80, 100);
            context.fillStyle = 'red';
            context.globalAlpha = 0.25;
            context.fill();
            context.globalAlpha = 1.0;
            return;
          case 2:
            context.beginPath();
            context.rect(685, 450, 80, 100);
            context.fillStyle = 'red';
            context.globalAlpha = 0.25;
            context.fill();
            context.globalAlpha = 1.0;
            return;
          case 3:
            context.beginPath();
            context.rect(770, 450, 80, 100);
            context.fillStyle = 'red';
            context.globalAlpha = 0.25;
            context.fill();
            context.globalAlpha = 1.0;
            return;
          case 4:
            context.beginPath();
            context.rect(855, 450, 80, 100);
            context.fillStyle = 'red';
            context.globalAlpha = 0.25;
            context.fill();
            context.globalAlpha = 1.0;
            return;
        }
  }
}

function drawArrowPlaceholderCardHighlight() {
  switch (targetHand) {
    case 0:
      switch (arrowPlaceholderCardSelected) {
        case 0:
          context.beginPath();
          context.rect(40, 135, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
      }
      break;
    case 1:
      switch (arrowPlaceholderCardSelected) {
        case 0:
          context.beginPath();
          context.rect(40, 240, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
        case 1:
          context.beginPath();
          context.rect(125, 240, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
      }
      break;
    case 2:
      switch (arrowPlaceholderCardSelected) {
        case 0:
          context.beginPath();
          context.rect(40, 345, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
        case 1:
          context.beginPath();
          context.rect(125, 345, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
        case 2:
          context.beginPath();
          context.rect(210, 345, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
      }
      break;
    case 3:
      switch (arrowPlaceholderCardSelected) {
        case 0:
          context.beginPath();
          context.rect(40, 450, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
        case 1:
          context.beginPath();
          context.rect(125, 450, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
        case 2:
          context.beginPath();
          context.rect(210, 450, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
        case 3:
          context.beginPath();
          context.rect(295, 450, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
        case 4:
          context.beginPath();
          context.rect(380, 450, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
      }
      break;
    case 4:
      switch (arrowPlaceholderCardSelected) {
        case 0:
          context.beginPath();
          context.rect(515, 240, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
        case 1:
          context.beginPath();
          context.rect(600, 240, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
        case 2:
          context.beginPath();
          context.rect(685, 240, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
        case 3:
          context.beginPath();
          context.rect(770, 240, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
        case 4:
          context.beginPath();
          context.rect(855, 240, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
      }
      break;
    case 5:
      switch (arrowPlaceholderCardSelected) {
        case 0:
          context.beginPath();
          context.rect(515, 345, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
        case 1:
          context.beginPath();
          context.rect(600, 345, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
        case 2:
          context.beginPath();
          context.rect(685, 345, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
        case 3:
          context.beginPath();
          context.rect(770, 345, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
      }
      break;
    case 6:
      switch (arrowPlaceholderCardSelected) {
        case 0:
          context.beginPath();
          context.rect(515, 450, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
        case 1:
          context.beginPath();
          context.rect(600, 450, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
        case 2:
          context.beginPath();
          context.rect(685, 450, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
        case 3:
          context.beginPath();
          context.rect(770, 450, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
        case 4:
          context.beginPath();
          context.rect(855, 450, 80, 100);
          context.lineWidth = 5;
          context.strokeStyle = 'red';
          context.stroke();
          break;
      }
      break;
  }
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
  //addLog("drawPlayerCardHighlight() " + playercardPressed);
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
      context.drawImage(backImage, 40, 135, 80, 100);
    }
  } else {
    context.drawImage(hcSlotCard.bitmap, 40, 135, 80, 100);
  }

  // draw two of a kind
  if (twoPSlotCard1 == null) {
    if (targetHand > 1) {
      context.drawImage(backImage, 40, 240, 80, 100);
    }
  } else {
    context.drawImage(twoPSlotCard1.bitmap, 40, 240, 80, 100);
  }

  if (twoPSlotCard2 == null) {
    if (targetHand > 1) {
      context.drawImage(backImage, 125, 240, 80, 100);
    }
  } else {
    context.drawImage(twoPSlotCard2.bitmap, 125, 240, 80, 100);
  }

  // draw three of a kind
  if (threePSlotCard1 == null) {
    if (targetHand > 2) {
      context.drawImage(backImage, 40, 345, 80, 100);
    }
  } else {
    context.drawImage(threePSlotCard1.bitmap, 40, 345, 80, 100);
  }

  if (threePSlotCard2 == null) {
    if (targetHand > 2) {
      context.drawImage(backImage, 125, 345, 80, 100);
    }
  } else {
    context.drawImage(threePSlotCard2.bitmap, 125, 345, 80, 100);
  }

  if (threePSlotCard3 == null) {
    if (targetHand > 2) {
      context.drawImage(backImage, 210, 345, 80, 100);
    }
  } else {
    context.drawImage(threePSlotCard3.bitmap, 210, 345, 80, 100);
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
  //addLog("draw moving card " + cardSelected);
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
