var s = Rx.Observable.from([
  Rx.Observable.interval(1000).map(v => v * 100 ).take(3),
  Rx.Observable.interval(1000).map(v => v * 10 ).take(3),
  Rx.Observable.interval(1000).map(v => v * 1 ).take(3),
]);

var sub = s.mergeMap((x) => {
  return x;
});

sub.subscribe(x => console.log(x));


// 0
// 0
// 0

// 100
// 10
// 1

// 200	
// 20
// 2