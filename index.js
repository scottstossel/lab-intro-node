class SortedList {
  constructor() {
  this.items = [];
  this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }
  
  get(pos) {
    if (pos < this.length && pos >= 0) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items[0]) {
      return this.items[this.length - 1];
    }
    else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items[0]) {
      return this.items[0];
    }
    else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    const sum = this.items.reduce((a, b) => a + b, 0);
    return sum;
  } 
  // return sum;

  
  

  avg() {
    let sum = 0;
    let avg = 0;
    if (this.items[0]) {
      for (let i = 0; i < this.length; i++) {
        sum += this.items[i];
      avg = sum / this.length;
    } 
  } else {
      throw Error('EmptySortedList');
    }
    return avg;
  }
}

module.exports = SortedList;