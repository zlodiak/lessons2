var seconds = 0;

var simplyTimer = setInterval(function(){
     seconds++;
     document.getElementById('simplyTimer').innerHTML = seconds;
}, 1000);


var LSseconds = 0;

if(localStorage.LSseconds) { LSseconds = localStorage.LSseconds };

var simplyTimer = setInterval(function(){
     LSseconds++;
     localStorage.LSseconds = LSseconds;
     document.getElementById('localStorageTimer').innerHTML = LSseconds;
}, 1000);


var Rseconds = 0,
	timerIsEnabled = true;

var tick = function() {
	if(timerIsEnabled) {
		Rseconds++;
		document.getElementById('recursiveTimer').innerHTML = Rseconds;
	  	recursiveTimer = setTimeout(tick, 1000);
	  	console.log('timerIsEnabled', timerIsEnabled);
	};
}	

var recursiveTimer = setTimeout(tick, 1000);

document.getElementById('RtimerStart').onclick = function() {
	timerIsEnabled = true;
	tick();
};

document.getElementById('RtimerStop').onclick = function() {
	timerIsEnabled = undefined;	
};