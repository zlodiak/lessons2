function* genFunc() {
	while(true) {
		yield Math.random(1);
	}
}

console.log('generator func', genFunc);
console.log('generator', genFunc());

for (let char of genFunc()) {
  console.log('value:', char);
}


// OUTPUT:

// generator func function* genFunc() {
// 	while(true) {
// 		yield Math.random(1);
// 	}
// }
// generator Object [Generator] {}

// value: 0.1504551569680994
// value: 0.12738396889514436
// value: 0.23309275633628546
// value: 0.508185674637543
// ...
// ..
// ..
