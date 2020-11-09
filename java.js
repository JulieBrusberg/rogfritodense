console.log("Det virker");

var videoSrcArr = Array("1","2","3","4","5","6","7","8","9","10","11","12","13","14","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"),
    selectEl = document.getElementById('antal');

for(var i = 0; i < videoSrcArr.length; i++){
        selectEl.options.add( new Option(videoSrcArr[i], videoSrcArr[i]));
    }       

    var videoSrcArr = Array("Dage","Uger","Måneder"),
    selectEl = document.getElementById('langde');

for(var i = 0; i < videoSrcArr.length; i++){
        selectEl.options.add( new Option(videoSrcArr[i], videoSrcArr[i]));
    }   

    function beregn() {

        var x = parseInt(document.getElementById("antal").value);
        var y = parseInt(document.getElementById("tal").value);
    
        var result = x * 3 * y;
        document.getElementById("result").value = result;
    
        var z = parseInt(document.getElementById("result").value);
        var r = 20;
    
        var result = z / r;
        document.getElementById("stammer").value = result
    
    }





