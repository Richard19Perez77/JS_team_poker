function straightDeckWithSwitchCard(){
  //working straight for player 1
  var suit = 0;
  var value = 0;
  var path0 = getCardImagePath(suit, value);
  var card0 = new Card(suit, value, path0);
  card0.bitmap.src = card0.imagePath;
  deckCards[0] = card0;

  suit = 1;
  value = 1;
  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[1] = card1;

  suit = 2;
  value = 2;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[2] = card2;

  suit = 2;
  value = 3;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[3] = card3;

  suit = 1;
  value = 4;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[4] = card4;

  var suit = 3;
  var value = 6;
  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[5] = card5;

  suit = 3;
  value = 7;
  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[6] = card6;

  //equal straight for player 2
  var suit = 1;
  var value = 5;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[7] = card7;

  suit = 1;
  value = 6;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[8] = card8;

  suit = 0;
  value = 1;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[9] = card9;

  suit = 0;
  value = 2;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[10] = card10;

  suit = 3;
  value = 10;
  var path11 = getCardImagePath(suit, value);
  var card11 = new Card(suit, value, path11);
  card11.bitmap.src = card11.imagePath;
  deckCards[11] = card11;

  var suit = 2;
  var value = 9;
  var path12 = getCardImagePath(suit, value);
  var card12 = new Card(suit, value, path12);
  card12.bitmap.src = card12.imagePath;
  deckCards[12] = card12;

  suit = 3;
  value = 9;
  var path13 = getCardImagePath(suit, value);
  var card13 = new Card(suit, value, path13);
  card13.bitmap.src = card13.imagePath;
  deckCards[13] = card13;
}

function straight5Deck() {

  //working straight for player 1
  var suit = 0;
  var value = 0;
  var path0 = getCardImagePath(suit, value);
  var card0 = new Card(suit, value, path0);
  card0.bitmap.src = card0.imagePath;
  deckCards[0] = card0;

  suit = 1;
  value = 1;
  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[1] = card1;

  suit = 2;
  value = 2;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[2] = card2;

  suit = 2;
  value = 3;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[3] = card3;

  suit = 1;
  value = 4;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[4] = card4;

  var suit = 3;
  var value = 6;
  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[5] = card5;

  suit = 3;
  value = 7;
  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[6] = card6;

  //equal straight for player 2
  var suit = 0;
  var value = 0;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[7] = card7;

  suit = 1;
  value = 1;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[8] = card8;

  suit = 2;
  value = 2;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[9] = card9;

  suit = 2;
  value = 3;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[10] = card10;

  suit = 1;
  value = 4;
  var path11 = getCardImagePath(suit, value);
  var card11 = new Card(suit, value, path11);
  card11.bitmap.src = card11.imagePath;
  deckCards[11] = card11;

  var suit = 3;
  var value = 6;
  var path12 = getCardImagePath(suit, value);
  var card12 = new Card(suit, value, path12);
  card12.bitmap.src = card12.imagePath;
  deckCards[12] = card12;

  suit = 3;
  value = 7;
  var path13 = getCardImagePath(suit, value);
  var card13 = new Card(suit, value, path13);
  card13.bitmap.src = card13.imagePath;
  deckCards[13] = card13;

  //better straight for player 3
  var suit = 0;
  var value = 2;
  var path14 = getCardImagePath(suit, value);
  var card14 = new Card(suit, value, path14);
  card14.bitmap.src = card14.imagePath;
  deckCards[14] = card14;

  suit = 1;
  value = 3;
  var path15 = getCardImagePath(suit, value);
  var card15 = new Card(suit, value, path15);
  card15.bitmap.src = card15.imagePath;
  deckCards[15] = card15;

  suit = 2;
  value = 4;
  var path16 = getCardImagePath(suit, value);
  var card16 = new Card(suit, value, path16);
  card16.bitmap.src = card16.imagePath;
  deckCards[16] = card16;

  suit = 2;
  value = 5;
  var path17 = getCardImagePath(suit, value);
  var card17 = new Card(suit, value, path17);
  card17.bitmap.src = card17.imagePath;
  deckCards[17] = card17;

  suit = 1;
  value = 6;
  var path18 = getCardImagePath(suit, value);
  var card18 = new Card(suit, value, path18);
  card18.bitmap.src = card18.imagePath;
  deckCards[18] = card18;

  var suit = 3;
  var value = 8;
  var path19 = getCardImagePath(suit, value);
  var card19 = new Card(suit, value, path19);
  card19.bitmap.src = card19.imagePath;
  deckCards[19] = card19;

  suit = 3;
  value = 9;
  var path20 = getCardImagePath(suit, value);
  var card20 = new Card(suit, value, path20);
  card20.bitmap.src = card20.imagePath;
  deckCards[20] = card20;
}



function straight4Deck() {

  //working straight for player 1
  var suit = 0;
  var value = 0;
  var path0 = getCardImagePath(suit, value);
  var card0 = new Card(suit, value, path0);
  card0.bitmap.src = card0.imagePath;
  deckCards[0] = card0;

  suit = 1;
  value = 1;
  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[1] = card1;

  suit = 2;
  value = 2;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[2] = card2;

  suit = 2;
  value = 3;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[3] = card3;

  suit = 1;
  value = 5;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[4] = card4;

  var suit = 3;
  var value = 6;
  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[5] = card5;

  suit = 3;
  value = 7;
  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[6] = card6;

  //equal straight for player 2
  var suit = 0;
  var value = 0;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[7] = card7;

  suit = 1;
  value = 1;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[8] = card8;

  suit = 2;
  value = 2;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[9] = card9;

  suit = 2;
  value = 3;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[10] = card10;

  suit = 1;
  value = 5;
  var path11 = getCardImagePath(suit, value);
  var card11 = new Card(suit, value, path11);
  card11.bitmap.src = card11.imagePath;
  deckCards[11] = card11;

  var suit = 3;
  var value = 6;
  var path12 = getCardImagePath(suit, value);
  var card12 = new Card(suit, value, path12);
  card12.bitmap.src = card12.imagePath;
  deckCards[12] = card12;

  suit = 3;
  value = 7;
  var path13 = getCardImagePath(suit, value);
  var card13 = new Card(suit, value, path13);
  card13.bitmap.src = card13.imagePath;
  deckCards[13] = card13;

  // 4 card greater value for player 3
  var suit = 0;
  var value = 9;
  var path14 = getCardImagePath(suit, value);
  var card14 = new Card(suit, value, path14);
  card14.bitmap.src = card14.imagePath;
  deckCards[14] = card14;

  suit = 1;
  value = 10;
  var path15 = getCardImagePath(suit, value);
  var card15 = new Card(suit, value, path15);
  card15.bitmap.src = card15.imagePath;
  deckCards[15] = card15;

  suit = 2;
  value = 11;
  var path16 = getCardImagePath(suit, value);
  var card16 = new Card(suit, value, path16);
  card16.bitmap.src = card16.imagePath;
  deckCards[16] = card16;

  suit = 3;
  value = 0;
  var path17 = getCardImagePath(suit, value);
  var card17 = new Card(suit, value, path17);
  card17.bitmap.src = card17.imagePath;
  deckCards[17] = card17;

  suit = 3;
  value = 1;
  var path18 = getCardImagePath(suit, value);
  var card18 = new Card(suit, value, path18);
  card18.bitmap.src = card18.imagePath;
  deckCards[18] = card18;

  var suit = 3;
  var value = 7;
  var path19 = getCardImagePath(suit, value);
  var card19 = new Card(suit, value, path19);
  card19.bitmap.src = card19.imagePath;
  deckCards[19] = card19;

  suit = 3;
  value = 8;
  var path20 = getCardImagePath(suit, value);
  var card20 = new Card(suit, value, path20);
  card20.bitmap.src = card20.imagePath;
  deckCards[20] = card20;

  // 5 card straight player 4
  var suit = 0;
  var value = 5;
  var path21 = getCardImagePath(suit, value);
  var card21 = new Card(suit, value, path21);
  card21.bitmap.src = card21.imagePath;
  deckCards[21] = card14;

  suit = 1;
  value = 6;
  var path22 = getCardImagePath(suit, value);
  var card22 = new Card(suit, value, path22);
  card22.bitmap.src = card22.imagePath;
  deckCards[22] = card22;

  suit = 2;
  value = 7;
  var path23 = getCardImagePath(suit, value);
  var card23 = new Card(suit, value, path23);
  card23.bitmap.src = card23.imagePath;
  deckCards[23] = card23;

  suit = 2;
  value = 8;
  var path24 = getCardImagePath(suit, value);
  var card24 = new Card(suit, value, path24);
  card24.bitmap.src = card24.imagePath;
  deckCards[24] = card24;

  suit = 1;
  value = 9;
  var path25 = getCardImagePath(suit, value);
  var card25 = new Card(suit, value, path25);
  card25.bitmap.src = card25.imagePath;
  deckCards[25] = card25;

  var suit = 3;
  var value = 10;
  var path26 = getCardImagePath(suit, value);
  var card26 = new Card(suit, value, path26);
  card26.bitmap.src = card26.imagePath;
  deckCards[26] = card26;

  suit = 3;
  value = 11;
  var path27 = getCardImagePath(suit, value);
  var card27 = new Card(suit, value, path27);
  card27.bitmap.src = card27.imagePath;
  deckCards[27] = card27;
}

function straight3Deck() {

  //working 3 card straight for player 1
  var suit = 0;
  var value = 0;
  var path0 = getCardImagePath(suit, value);
  var card0 = new Card(suit, value, path0);
  card0.bitmap.src = card0.imagePath;
  deckCards[0] = card0;

  suit = 1;
  value = 1;
  var path1 = getCardImagePath(suit, value);
  var card1 = new Card(suit, value, path1);
  card1.bitmap.src = card1.imagePath;
  deckCards[1] = card1;

  suit = 2;
  value = 2;
  var path2 = getCardImagePath(suit, value);
  var card2 = new Card(suit, value, path2);
  card2.bitmap.src = card2.imagePath;
  deckCards[2] = card2;

  suit = 3;
  value = 11;
  var path3 = getCardImagePath(suit, value);
  var card3 = new Card(suit, value, path3);
  card3.bitmap.src = card3.imagePath;
  deckCards[3] = card3;

  suit = 2;
  value = 11;
  var path4 = getCardImagePath(suit, value);
  var card4 = new Card(suit, value, path4);
  card4.bitmap.src = card4.imagePath;
  deckCards[4] = card4;

  var suit = 0;
  var value = 11;
  var path5 = getCardImagePath(suit, value);
  var card5 = new Card(suit, value, path5);
  card5.bitmap.src = card5.imagePath;
  deckCards[5] = card5;

  suit = 1;
  value = 11;
  var path6 = getCardImagePath(suit, value);
  var card6 = new Card(suit, value, path6);
  card6.bitmap.src = card6.imagePath;
  deckCards[6] = card6;

  // identical 3 card straight for player 2
  var suit = 0;
  var value = 0;
  var path7 = getCardImagePath(suit, value);
  var card7 = new Card(suit, value, path7);
  card7.bitmap.src = card7.imagePath;
  deckCards[7] = card0;

  suit = 1;
  value = 1;
  var path8 = getCardImagePath(suit, value);
  var card8 = new Card(suit, value, path8);
  card8.bitmap.src = card8.imagePath;
  deckCards[8] = card8;

  suit = 2;
  value = 2;
  var path9 = getCardImagePath(suit, value);
  var card9 = new Card(suit, value, path9);
  card9.bitmap.src = card9.imagePath;
  deckCards[9] = card9;

  suit = 3;
  value = 11;
  var path10 = getCardImagePath(suit, value);
  var card10 = new Card(suit, value, path10);
  card10.bitmap.src = card10.imagePath;
  deckCards[10] = card10;

  suit = 3;
  value = 11;
  var path11 = getCardImagePath(suit, value);
  var card11 = new Card(suit, value, path11);
  card11.bitmap.src = card11.imagePath;
  deckCards[11] = card11;

  var suit = 3;
  var value = 11;
  var path12 = getCardImagePath(suit, value);
  var card12 = new Card(suit, value, path12);
  card12.bitmap.src = card12.imagePath;
  deckCards[12] = card12;

  suit = 3;
  value = 11;
  var path13 = getCardImagePath(suit, value);
  var card13 = new Card(suit, value, path13);
  card13.bitmap.src = card13.imagePath;
  deckCards[13] = card13;

  // greater 3 card straight for player 3
  var suit = 0;
  var value = 8;
  var path14 = getCardImagePath(suit, value);
  var card14 = new Card(suit, value, path14);
  card14.bitmap.src = card14.imagePath;
  deckCards[14] = card14;

  suit = 1;
  value = 9;
  var path15 = getCardImagePath(suit, value);
  var card15 = new Card(suit, value, path15);
  card15.bitmap.src = card15.imagePath;
  deckCards[15] = card15;

  suit = 2;
  value = 10;
  var path16 = getCardImagePath(suit, value);
  var card16 = new Card(suit, value, path16);
  card16.bitmap.src = card16.imagePath;
  deckCards[16] = card16;

  suit = 3;
  value = 11;
  var path17 = getCardImagePath(suit, value);
  var card17 = new Card(suit, value, path17);
  card17.bitmap.src = card17.imagePath;
  deckCards[17] = card17;

  suit = 3;
  value = 11;
  var path18 = getCardImagePath(suit, value);
  var card18 = new Card(suit, value, path18);
  card18.bitmap.src = card18.imagePath;
  deckCards[18] = card18;

  var suit = 3;
  var value = 11;
  var path19 = getCardImagePath(suit, value);
  var card19 = new Card(suit, value, path19);
  card19.bitmap.src = card19.imagePath;
  deckCards[19] = card19;

  suit = 3;
  value = 11;
  var path20 = getCardImagePath(suit, value);
  var card20 = new Card(suit, value, path20);
  card20.bitmap.src = card20.imagePath;
  deckCards[20] = card20;
}
