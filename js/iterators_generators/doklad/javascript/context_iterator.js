const s = 'sergey';

for (let char of s) {
  console.log(char);
}

console.log('iter obj:', s);
console.log('iterator:', s[Symbol.iterator]());


// OUTPUT:

// s
// e
// r
// g
// e
// y

// iter obj: sergey
// iterator: Object [String Iterator] {}
