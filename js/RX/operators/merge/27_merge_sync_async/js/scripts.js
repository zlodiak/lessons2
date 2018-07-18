var s = Rx.Observable.from([11, 22, 33]);
var s1 = Rx.Observable.interval(1000).take(3);

var sub = Rx.Observable.merge(s, s1);

sub.subscribe(x => console.log(x));

// 11
// 22
// 33

// 1

// 2

// 3