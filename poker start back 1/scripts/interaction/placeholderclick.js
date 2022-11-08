function placeholderClickedOn() {
  switch (targetHand) {
    case 0:
      checkHC();
      break;
    case 1:
      check2K();
      break;
    case 2:
      check3K();
      break;
    case 3:
      checkStraight();
      break;
    case 4:
      checkFlush();
      break;
    case 5:
      check4K();
      break;
    case 6:
      checkSF();
      break;
  }
}

function placeholderMoveOn() {
  switch (targetHand) {
    case 0:
      return checkHCPlaceholderIndex();
    case 1:
      return check2KPlaceholderIndex();
    case 2:
      return check3KPlaceholderIndex();
    case 3:
      return checkStraightPlaceholderIndex();
    case 4:
      return checkFlushPlaceholderIndex();
    case 5:
      return check4KPlaceholderIndex();
    case 6:
      return checkSFPlaceholderIndex();
  }
}
