// Card function is used to set properties of a card.
// @param this.suit - The suit of the card
// @param this.value - The value of the card
// @param this.imagePath - The path of the card image
// @param this.bitmap - The bitmap of the path's image in a new Image()
// @param this.bitmap.onload - The callback when the image is loaded
function Card(s, v, p) {
    this.suit = s;
    this.value = v;
    this.imagePath = p;
    this.bitmap = new Image();
    this.bitmap.onload = imageLoaded;
}
