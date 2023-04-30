function List(){

  //Initialize the list
  this.listSize = 0;
  this.pos = 0;
  this.items = [];

  //Add item to the list
  this.add = (element) => {
    this.items[this.listSize++] = element;
  }

  //Find item from the list
  this.find = (element) => {
    for(let i = 0; i < this.listSize; i++){
      if(this.items[i] === element){
        return i;
      }
    }

    return -1;
  }

  //Remove item from the list
  this.remove = (element) => {
    let index = this.find(element);

    if(index > -1){
      this.items.splice(index, 1);
      --this.listSize;
      return true;
    }

    return false;
  }

  //Insert items at specific position in the list
  this.insert = (element, after) => {
    let insertPos = this.find(after);

    if(insertPos > -1){
       this.items.splice(insertPos+1, 0, element);
       ++this.listSize;
      return true;
    }

    return false;
  }

  //Check if item is present in the list
  this.contains = (element) => {
    let index = this.find(element);
    return index > -1;
  }

  //Move to the front of the list
  this.front = () => {
    this.pos = 0;
  }

  //Move to the end of the list
  this.rear = () => {
    this.pos = this.listSize - 1;
  }

  //Move to the prev item in the list
  this.prev = () => {
    if(this.pos > 0){
      --this.pos;
    }
  }

  //Move to the next item in the list
  this.next = () => {
    if(this.pos < this.listSize - 1){
      ++this.pos;
    }
  }

  //Get the current position in the list
  this.currPos = () => {
    return this.pos;
  }

  //Move to the specific position in the list
  this.moveTo = (pos) => {
    if(pos > 0 && pos <= this.listSize){
      this.pos = pos - 1;
    }
  }

  //Get current item from the list
  this.getElement = () => {
    return this.items[this.pos];
  }

  //Get the size list
  this.size = () => {
    return this.listSize;
  }

  //Print the items of the list
  this.print = () => {
    return this.items.join(',');
  }

  //Clear the list
  this.clear = () => {
    this.listSize = 0;
    this.pos = 0;
    this.items = [];
  }
}
