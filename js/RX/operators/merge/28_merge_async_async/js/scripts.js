var s = Rx.Observable.interval(1000).take(3);
var s1 = Rx.Observable.interval(1000).map(v => v * 100 ).take(3);

var sub = Rx.Observable.merge(s, s1);

sub.subscribe(x => console.log(x));


// 0
// 0
// 1
// 100
// 2
// 200