function debugCardBitmaps(cardArr) {
  for (var i = 0; i < cardArr.length; i++) {
    if (cardArr[i] != null) {
      if (cardArr[i].bitmap == null) {
        //addLog("debug Player " + (playerTurn + 1) + " " + printTargetHand() + " Error: " + printCard(cardArr[i]));
      }
    }

    if (cardArr[i] == null) {
      //addLog("debug Player " + (playerTurn + 1) + " " + printTargetHand() + " Error null card: " + i);
    }
  }
}
