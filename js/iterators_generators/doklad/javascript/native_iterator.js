const s = 'sergey';

it = s[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

console.log('iter obj:', s);
console.log('iterator:', it);


// OUTPUT:

// { value: 's', done: false }
// { value: 'e', done: false }
// { value: 'r', done: false }
// { value: 'g', done: false }
// { value: 'e', done: false }
// { value: 'y', done: false }

// iter obj: sergey
// iterator Object: [String Iterator] {}