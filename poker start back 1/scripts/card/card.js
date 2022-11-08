function Card(s, v, p) {
  this.suit = s;
  this.value = v;
  this.imagePath = p;
  this.bitmap = new Image();
}

function getCardImagePath(suit, value) {
  //addLog("getCardImagePath(" + suit + "," + value + ")");
  var path = "";
  switch (suit) {
    case 0:
      switch (value) {
        case 0:
          path = 'cards/2d.jpg';
          break;
        case 1:
          path = 'cards/3d.jpg';
          break;
        case 2:
          path = 'cards/4d.jpg';
          break;
        case 3:
          path = 'cards/5d.jpg';
          break;
        case 4:
          path = 'cards/6d.jpg';
          break;
        case 5:
          path = 'cards/7d.jpg';
          break;
        case 6:
          path = 'cards/8d.jpg';
          break;
        case 7:
          path = 'cards/9d.jpg';
          break;
        case 8:
          path = 'cards/10d2.jpg';
          break;
        case 9:
          path = 'cards/jd.jpg';
          break;
        case 10:
          path = 'cards/qd2.jpg';
          break;
        case 11:
          path = 'cards/kd.jpg';
          break;
        case 12:
          path = 'cards/ad.jpg';
          break;
      }
      break;
    case 1:
      switch (value) {
        case 0:
          path = 'cards/2c.jpg';
          break;
        case 1:
          path = 'cards/3c.jpg';
          break;
        case 2:
          path = 'cards/4c.jpg';
          break;
        case 3:
          path = 'cards/5c.jpg';
          break;
        case 4:
          path = 'cards/6c.jpg';
          break;
        case 5:
          path = 'cards/7c.jpg';
          break;
        case 6:
          path = 'cards/8c.jpg';
          break;
        case 7:
          path = 'cards/9c.jpg';
          break;
        case 8:
          path = 'cards/10c2.jpg';
          break;
        case 9:
          path = 'cards/jc.jpg';
          break;
        case 10:
          path = 'cards/qc2.jpg';
          break;
        case 11:
          path = 'cards/kc.jpg';
          break;
        case 12:
          path = 'cards/ac.jpg';
          break;
      }
      break;
    case 2:
      switch (value) {
        case 0:
          path = 'cards/2h.jpg';
          break;
        case 1:
          path = 'cards/3h.jpg';
          break;
        case 2:
          path = 'cards/4h.jpg';
          break;
        case 3:
          path = 'cards/5h.jpg';
          break;
        case 4:
          path = 'cards/6h.jpg';
          break;
        case 5:
          path = 'cards/7h.jpg';
          break;
        case 6:
          path = 'cards/8h.jpg';
          break;
        case 7:
          path = 'cards/9h.jpg';
          break;
        case 8:
          path = 'cards/10h2.jpg';
          break;
        case 9:
          path = 'cards/jh.jpg';
          break;
        case 10:
          path = 'cards/qh2.jpg';
          break;
        case 11:
          path = 'cards/kh.jpg';
          break;
        case 12:
          path = 'cards/ah.jpg';
          break;
      }
      break;
    case 3:
      switch (value) {
        case 0:
          path = 'cards/2s.jpg';
          break;
        case 1:
          path = 'cards/3s.jpg';
          break;
        case 2:
          path = 'cards/4s.jpg';
          break;
        case 3:
          path = 'cards/5s.jpg';
          break;
        case 4:
          path = 'cards/6s.jpg';
          break;
        case 5:
          path = 'cards/7s.jpg';
          break;
        case 6:
          path = 'cards/8s.jpg';
          break;
        case 7:
          path = 'cards/9s.jpg';
          break;
        case 8:
          path = 'cards/10s2.jpg';
          break;
        case 9:
          path = 'cards/js.jpg';
          break;
        case 10:
          path = 'cards/qs2.jpg';
          break;
        case 11:
          path = 'cards/ks.jpg';
          break;
        case 12:
          path = 'cards/as.jpg';
          break;
      }
      break;
  }

  return path;
}

function getSuitCharacter(suit) {
  switch (suit) {
    case 0:
      return "&#9671;";
    case 1:
      return "&#9831;";
    case 2:
      return "&#9825;";
    case 3:
      return "&#9828;";
  }
}

function getFaceValue(value) {
  switch (value) {
    case 0:
      return 2;
    case 1:
      return 3;
    case 2:
      return 4;
    case 3:
      return 5;
    case 4:
      return 6;
    case 5:
      return 7;
    case 6:
      return 8;
    case 7:
      return 9;
    case 8:
      return 10;
    case 9:
      return "J";
    case 10:
      return "Q";
    case 11:
      return "K";
    case 12:
      return "A";
  }
}
