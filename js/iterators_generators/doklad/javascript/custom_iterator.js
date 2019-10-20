class IterObj {
  constructor(word) {
    this.word = word;
  }

  iter() { return new Iterator(this.word); }
}


class Iterator {
  constructor(word) {
    this.word = word;
    this.index = 0;
  }

  next() {
    try {
      let letter = this.word[this.index];
      this.index += 1;
      return letter;
    } catch (err) {
      throw "StopIteration";
    }
  }

  iter() { return this; }
}

const iterObj = new IterObj('sergey');
it = iterObj.iter();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

console.log('iter obj', IterObj);
console.log('iterator', it);


// OUTPUT:

// s
// e
// r
// g
// e
// y

// iter obj class IterObj {
//   constructor(word) {
//     this.word = word;
//   }
//   iter() { return new Iterator(this.word); }
// }

// iterator Iterator { word: 'sergey', index: 6 }