var s = Rx.Observable.from([
  Rx.Observable.from(['a', 'b', 'c']),
  Rx.Observable.from(['A', 'B', 'C']),
  Rx.Observable.from(['z', 'y', 'z']),
]);

var sub = s.mergeMap((x) => {
  return x;
});

sub.subscribe(x => console.log(x));


// a
// b
// c
// A
// B
// C
// x	
// y
// z