var s = Rx.Observable.from([1, 2, 3]);
var s1 = Rx.Observable.from([11, 22, 33]);

var sub = Rx.Observable.merge(s, s1);

sub.subscribe(x => console.log(x));


// 1
// 2
// 3
// 11
// 22
// 33


var s_ = Rx.Observable.from([1, 2, 3]);
var s1_ = Rx.Observable.from([
  Rx.Observable.interval(1000).map(v => v * 1000 ).take(3),
  Rx.Observable.interval(1000).map(v => v * 100 ).take(3),
  Rx.Observable.interval(1000).map(v => v * 10 ).take(3),
]);

var sub = Rx.Observable.merge(s_, s1_);

sub.subscribe(x => console.log(x));


// 1
// 2
// 3
// {}
// {}
// {}


