window.onload = (function () {
    var MILLISECONDS = 1;
    var SECONDS = 1000 * MILLISECONDS;
    var MINUTES = 60 * SECONDS;
    var HOURS = 60 * MINUTES;
    var DAYS = 24 * HOURS;
    var WEEKS = 7 * DAYS;
    
    function getParam(key) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	var i;
	var pair;
	for (i=0; i < vars.length; ++i) {
            pair = vars[i].split("=");
            if (pair[0] == key) {
		return pair[1];
	    }
	}
	return "";
    }

    function getSafeDistance(targetDistance, rate, wks) {
	if (wks <= 0) {
	    return targetDistance;
	}
	return targetDistance / Math.pow(rate, wks);
    }

    function getWeeks(targetTs, days) {
	var now = new Date().getTime();
	var fromTs = now + (days * DAYS);
	return (targetTs - fromTs) / WEEKS;
    }

    function main() {
	var inputDate = getParam("date");
	var inputKm = getParam("km");
	var inputRate = getParam("rate");
	var targetTs = new Date(inputDate).getTime();
	var i;
	document.getElementById("target-date").innerHTML = inputDate;
	document.getElementById("target-distance").innerHTML = inputKm;
	document.getElementById("target-rate").innerHTML = inputRate;
	for (i = 0; i < 4; ++i) {
	    document.getElementById("safe-distance-" + i).innerHTML = getSafeDistance(inputKm, inputRate, getWeeks(targetTs, i)).toFixed(2);
	}
    }

    main();
});
