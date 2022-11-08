function getMaxPlaceHolderCards() {
  switch (targetHand) {
    case 0:
      return 1;
    case 1:
      return 2;
    case 2:
      return 3;
    case 3:
      return 5;
    case 4:
      return 5;
    case 5:
      return 4;
    case 6:
      return 5;
  }
}
