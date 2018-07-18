var s = Rx.Observable.interval(1000).map(o => {
	console.log('___observable:', o);
	switch (o) {
		case 0: return Rx.Observable.interval(1000).map((v) => v * 100).take(3);
		case 1: return Rx.Observable.interval(1000).map((v) => v * 10).take(3);
		case 2: return Rx.Observable.interval(1000).map((v) => v * 1).take(3);
		default: return Rx.Observable.of('');
	}	  
}).take(3);

var sub = s.mergeMap((x) => {
  return x;
});

sub.subscribe(x => console.log(x));


// ___observable: 0
// 0
// ___observable: 1
// 100
// 0
// ___observable: 2
// 200
// 10
// 0	
// 20
// 1
// 2