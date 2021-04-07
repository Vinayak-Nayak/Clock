// for hide and view onclick buttons

function view(){
    document.getElementById("analog").style.display = "block";
    document.getElementById("digital").style.display = "none";
}
function hide(){
    document.getElementById("digital").style.display = "block";
    document.getElementById("analog").style.display = "none";
}



 function clock(){
    var date = new Date();
    var min = date.getMinutes();
    var hour = date.getHours();
    var sec = date.getSeconds();

    // for analog clock

    h = ((hour/12)*360)+90;
    m = ((min/60)*360)+90;
    s = ((sec/60)*360)+90;
    document.querySelector('.hour').style.transform = "rotate(" + h + "deg)";
    document.querySelector('.min').style.transform = "rotate(" + m + "deg)";
    document.querySelector('.sec').style.transform = "rotate(" + s + "deg)";

    // for digital clock
    if(hour>12){
        hour = hour - 12;
    }
    if(hour<10){
        hour = "0" + hour; 
    }
    if(min<10){
        min = "0" + min;
    }
    if(sec<10){
        sec = "0" + sec;
    }
    document.getElementById("clock").innerHTML = hour + ':' + min + ':' + sec;


}
setInterval(clock, 1000);