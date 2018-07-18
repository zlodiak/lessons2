var s = Rx.Observable.interval(1000).take(3);
var s1 = Rx.Observable.interval(1000).map(v => v * 10 ).take(3);
var s2 = Rx.Observable.interval(1000).map(v => v * 100 ).take(3);

var sub = Rx.Observable.merge(s, s1, s2);

sub.subscribe(x => console.log(x));


// 0
// 0
// 0

// 1
// 10
// 20

// 2
// 20
// 200