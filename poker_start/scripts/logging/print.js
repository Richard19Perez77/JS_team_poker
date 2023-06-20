function printCard(card) {
  if (card == null) {
    return "";
  }
  let value = getFaceValue(card.value);
  let suit = getSuitCharacter(card.suit);

  return `[${value}${suit}]`;
}

function printCardArr(cardArr) {
  if (doDebugLog) addLog("printCardArr(cardArr)");
  let cardString = "";
  for (let i = 0; i < cardArr.length; i++) {
    if (cardArr[i] == null) {
      cardString = cardString + "(card null)";
      return cardString;
    }
    let value = getFaceValue(cardArr[i].value);
    let suit = getSuitCharacter(cardArr[i].suit);
    if (cardArr[i].bitmap == null) {
      cardString = cardString + "(bitmap error)";
    }

    cardString = `${cardString}[${value}${suit}]`;
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
