var s = Rx.Observable.interval(1000).take(3);
var s1 = Rx.Observable.interval(1000).map(v => 'v' + v).take(3);

var sub = s.mergeMap((x) => {
	console.log('__observable', x);
  return s1;
});

sub.subscribe(x => console.log(x));


// __observable 0
// v0
// __observable 1
// v1
// v0
// __observable 2
// v2
// v1
// v0
// v2
// v1
// v2
