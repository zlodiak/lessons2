var temp = Rx.Observable.interval(1000);

var sub = temp.mergeMap((x) => {
	console.log('__temp', x);
  return Rx.Observable.of('email1_' + x, 'email2_' + x, 'email3_' + x)
});

sub.subscribe(data => console.log(data));


// __temp 0
// email1_0
// email2_0
// email3_0

// __temp 1
// email1_1
// email2_1
// email3_1

// __temp 2
// email1_2
// email2_2
// email3_2