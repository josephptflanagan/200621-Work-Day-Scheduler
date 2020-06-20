var currentDay = document.getElementById("currentDay");
var currentTime = document.getElementById("currentTime");
$(currentTime).text("");


$(currentDay).text(moment().format('dddd MMMM Do'));

setInterval(function(){
    var time = moment().format('LT');
    $(currentTime).text(time);
}, 1000);
