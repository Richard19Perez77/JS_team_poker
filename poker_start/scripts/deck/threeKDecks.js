function threeKBlockedDeck() {

  suit = 0;
  value = 10;
  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[0] = card1;

  suit = 1;
  value = 10;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[1] = card2;

  suit = 0;
  value = 11;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[2] = card2;

  suit = 0;
  value = 11;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[3] = card3;

  var suit = 2;
  var value = 10;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[7] = card7;

  suit = 3;
  value = 10;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[8] = card8;

  suit = 0;
  value = 2;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[9] = card9;

  suit = 3;
  value = 2;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[10] = card10;

  suit = 3;
  value = 3;
  var path11 = getCardImagePath(suit, value);
  var card11 = new Card(suit, value, path11);
  card11.bitmap.src = card11.imagePath;
  deckCards[11] = card11;

  var suit = 0;
  var value = 3;
  var path12 = getCardImagePath(suit, value);
  var card12 = new Card(suit, value, path12);
  card12.bitmap.src = card12.imagePath;
  deckCards[12] = card12;

  suit = 0;
  value = 4;
  var path13 = getCardImagePath(suit, value);
  var card13 = new Card(suit, value, path13);
  card13.bitmap.src = card13.imagePath;
  deckCards[13] = card13;
}
