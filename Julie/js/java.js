
console.log("Det virker");

var days = Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"),
    selectEl = document.getElementById('antal');

for (var i = 0; i < days.length; i++) {
    selectEl.options.add(new Option(days[i], days[i]));
}

var days = Array("Dage", "Uger", "Måneder"),
    selectEl = document.getElementById("days");

for (var i = 0; i < days.length; i++) {
    selectEl.options.add(new Option(days[i], days[i]));
}

function beregn() {

    var x = parseInt(document.getElementById("antal").value);
    var y = parseInt(document.getElementById("tal").value);
    var t = parseInt(document.getElementById("pris").value)
    var interval = (document.getElementById("days").value);

    console.log(interval);

    var result;

    if (interval == "Dage")
        result = x * y * t / 20;

    else if (interval == "Uger")
        result = x * y * t / 20 * 7;

    else if (interval == "Måneder")
        result = x * y * t / 20 * 30;

    document.getElementById("result").value = result;

    var z = parseInt(document.getElementById("result").value);
    var r = 20;

    var result = z / r;
    document.getElementById("stammer").value = result;
}