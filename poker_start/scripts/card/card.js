function Card(s, v, p) {
    this.suit = s;
    this.value = v;
    this.imagePath = p;
    this.bitmap = new Image();
    this.bitmap.onload = imageLoaded;
}
