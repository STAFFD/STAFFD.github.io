function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "<div>" + days + "<span> days </span></div> <div>" + hours + "<span> hours </span></div><div>" + minutes + "<span> minutes </span></div><div>" + seconds + "<span> seconds </span></div> "; 
	$("#elapseClock").html(result);
}


	var together = new Date();
	together.setFullYear(2016,5,24);
	together.setHours(0);
	together.setMinutes(0);
	together.setSeconds(0);
	together.setMilliseconds(0);
	console.log(together);
		
	if (!document.createElement('canvas').getContext) {
		var msg = document.createElement("div");
		msg.id = "errorMsg";
		msg.innerHTML = "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+"; 
		document.body.appendChild(msg);
		document.execCommand("stop");
	} else {
		timeElapse(together);
		setInterval(function () {
		timeElapse(together);
		}, 500);
	}