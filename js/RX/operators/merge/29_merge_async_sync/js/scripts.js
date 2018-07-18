var s = Rx.Observable.interval(1000).take(3);
var s1 = Rx.Observable.of('a', 'b', 'c');

var sub = Rx.Observable.merge(s, s1);

sub.subscribe(x => console.log(x));


// a
// b
// c

// 1

// 2

// 3







setTimeout(() => {
	console.log('-----------')
	var s = Rx.Observable.timer(0, 1000).map(x => x * 1000).take(3);
	var s1 = Rx.Observable.of('a', 'b', 'c');

	var sub = Rx.Observable.merge(s, s1);

	sub.subscribe(x => console.log(x));	
}, 4000);

// a
// b
// c

// 1000

// 2000

// 3000
