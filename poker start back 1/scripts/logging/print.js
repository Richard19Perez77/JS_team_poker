function printCard(card) {
  if (card == null) {
    return "";
  }
  var value = getFaceValue(card.value);
  var suit = getSuitCharacter(card.suit);

  return "(" + value + "," + suit + ")"
}

function printCardArr(cardArr) {
  //addLog("printCardArr(cardArr)");
  var cardString = "";
  for (var i = 0; i < cardArr.length; i++) {
    if(cardArr[i] == null){
        cardString = cardString + "(card null)";
        return cardString;
    }
    var value = getFaceValue(cardArr[i].value);
    var suit = getSuitCharacter(cardArr[i].suit);
    if(cardArr[i].bitmap == null){
        cardString = cardString + "(bitmap error)";
    }

    cardString = cardString + "(" + value + "," + suit + ")";
  }

  return cardString;
}

function printTargetHand() {
  switch (targetHand) {
    case 0:
      return "Play a high card.";
    case 1:
      return "Play a two of a kind.";
    case 2:
      return "Play a three of a kind.";
    case 3:
      return "Play a straight.";
    case 4:
      return "Play a flush.";
    case 5:
      return "Play a four of a kind.";
    case 6:
      return "Play a straight flush.";
  }
}
