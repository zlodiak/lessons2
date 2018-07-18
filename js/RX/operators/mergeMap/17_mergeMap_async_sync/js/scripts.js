var s = Rx.Observable.interval(1000).map(o => {
	console.log('___observable:', o);
	switch (o) {
		case 0: return Rx.Observable.from(['a', 'b', 'c']);
		case 1: return Rx.Observable.from(['A', 'B', 'C']);
		case 2: return Rx.Observable.from(['x', 'y', 'z']);
	}	  
}).take(3);

var sub = s.mergeMap((x) => {
  return x;
});

sub.subscribe(x => console.log(x));


// ___observable: 0
// a
// b
// c
// ___observable: 1
// A
// B
// C
// ___observable: 2
// x
// y
// z	
