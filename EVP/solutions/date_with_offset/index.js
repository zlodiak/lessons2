var d = new Date();
d.setHours(d.getHours() + 3);

obj5['value'] = d.toISOString();



in unix format:

var d = new Date();
d.setHours(d.getHours() + 3);
//var unix_time_stamp = Math.floor(d.getTime() / 1000);
var unix_time_stamp = Math.floor(d.getTime() / 1000) - (60 * 60 * 3);



===========



var d = new Date();
d.setHours(d.getHours() + 3);
var dateHuman = d.toISOString();
var unix_time_stamp = Math.floor(d.getTime() / 1000) - (60 * 60 * 3);


