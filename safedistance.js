
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

function safeDistanceMain() {
    var inputDate = getParam("date");
    var inputKm = getParam("km");
    var inputRate = getParam("rate");
    var t1 = new Date(inputDate).getTime();
    var t0 = new Date().getTime();
    var wks = (t1 - t0) / 1000 / 60 / 60 / 24 / 7;
    var safeDistance = getSafeDistance(inputKm, inputRate, wks);
    
    
    document.getElementById("target-date").innerHTML = inputDate;
    document.getElementById("target-distance").innerHTML = inputKm;
    document.getElementById("target-rate").innerHTML = inputRate;
    document.getElementById("safe-distance").innerHTML = safeDistance.toFixed(2);
}

window.onload = safeDistanceMain;
