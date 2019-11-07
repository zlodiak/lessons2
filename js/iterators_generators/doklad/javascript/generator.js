function* genFunc() {
	while(true) {
		yield Math.random(1);
	}
}

const generator = genFunc();

console.log('value:', generator.next());
console.log('value:', generator.next());
console.log('value:', generator.next());
console.log('value:', generator.next());
console.log('value:', generator.next());
console.log('value:', generator.next());

console.log('generator func', genFunc);
console.log('generator', generator);


// OUTPUT:

// value: { value: 0.921832164052985, done: false }
// value: { value: 0.418734620386483, done: false }
// value: { value: 0.3309010343818355, done: false }
// value: { value: 0.1657775354136879, done: false }
// value: { value: 0.890489361265606, done: false }
// value: { value: 0.554218046878145, done: false }

// generator func function* genFunc() {
// 	while(true) {
// 		yield Math.random(1);
// 	}
// }
// generator Object [Generator] {}