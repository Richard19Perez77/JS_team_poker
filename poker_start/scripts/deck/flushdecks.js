function flushDeck3() {
  //working straight for player 1
  let suit = 0;
  let value = 0;
  let path0 = getCardImagePath(suit, value);
  let card0 = new Card(suit, value, path0);
  card0.bitmap.src = card0.imagePath;
  deckCards[0] = card0;

  suit = 0;
  value = 1;
  let path1 = getCardImagePath(suit, value);
  let card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[1] = card1;

  suit = 0;
  value = 4;
  let path2 = getCardImagePath(suit, value);
  let card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[2] = card2;

  suit = 2;
  value = 3;
  let path3 = getCardImagePath(suit, value);
  let card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[3] = card3;

  suit = 1;
  value = 4;
  let path4 = getCardImagePath(suit, value);
  let card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[4] = card4;

  suit = 3;
  value = 6;
  let path5 = getCardImagePath(suit, value);
  let card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[5] = card5;

  suit = 3;
  value = 7;
  let path6 = getCardImagePath(suit, value);
  let card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[6] = card6;

  // set up pc for str flush attempt using using the current flush play
  suit = 0;
  value = 5;
  let path7 = getCardImagePath(suit, value);
  let card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[7] = card7;

  suit = 0;
  value = 6;
  let path8 = getCardImagePath(suit, value);
  let card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[8] = card8;

  suit = 0;
  value = 11;
  let path9 = getCardImagePath(suit, value);
  let card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[9] = card9;

  suit = 2;
  value = 3;
  let path10 = getCardImagePath(suit, value);
  let card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[10] = card10;

  suit = 1;
  value = 4;
  let path11 = getCardImagePath(suit, value);
  let card11 = new Card(suit, value, path11);
  card11.bitmap.src = card11.imagePath;
  deckCards[11] = card11;

  suit = 3;
  value = 6;
  let path12 = getCardImagePath(suit, value);
  let card12 = new Card(suit, value, path12);
  card12.bitmap.src = card12.imagePath;
  deckCards[12] = card12;

  suit = 3;
  value = 7;
  let path13 = getCardImagePath(suit, value);
  let card13 = new Card(suit, value, path13);
  card13.bitmap.src = card13.imagePath;
  deckCards[13] = card13;
}
