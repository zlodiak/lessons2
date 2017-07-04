var d = new Date();
d.setHours(d.getHours() + 3);

obj5['value'] = d.toISOString();



in unix format:

var d = new Date();
d.setHours(d.getHours() + 3);
var unix_time_stamp = Math.floor(d.getTime() / 1000);






