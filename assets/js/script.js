var tasks = {};
var hours=["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

$("#currentDay").text(moment().format('dddd MMMM Do'));


var colorUpdater = function(time){
    var hour = parseInt((time.split(":"))[0]) + 3;
    for(var i = 0; i<hours.length;i++){
        var currentTask =  $("#task-"+i).parent();
       if(i < hour){
        currentTask.removeClass("present")
        currentTask.removeClass("future")
        currentTask.addClass("past")
       }
       else if(i== hour){
        currentTask.removeClass("past")
        currentTask.removeClass("future")
        currentTask.addClass("present")
       } 
       else if(i> hour){
        currentTask.removeClass("past")
        currentTask.removeClass("present")
        currentTask.addClass("future")
       } 
       
    }
};

setInterval(function(){
    //Local Time
    var time = moment().format('LT');
    $("#currentTime").text(time);
    colorUpdater(time);
}, 1000);

//initialize time block function
var createTimeBlocks = function(){

    //loop through work hours
    for(i=0; i<hours.length;i++){
        
        //create hour
        var hour = $("<div>")
            .addClass("col-1 hour")
            .text(hours[i]);

        //create task
        var task = $("<p>")
            .addClass("description")
            .attr("id", "task-" + i)
            .text("Test Task");    

        var taskBox = $("<div>")
            .addClass('col-10 textarea past')           
            .append(task);

        //create save button
        var buttonLogo = $("<span>")
            .addClass("oi oi-lock-unlocked")

        var button = $("<button>")
            .addClass("saveBtn")
            .append(buttonLogo);

        var saveButton = $("<div>")
            .addClass("col-1")
            .attr("id", "save-" + i)
            .append(button);

        //append hour, task, button to row
        var row = $("<div>")
            .addClass("row")
            .append(hour, taskBox, saveButton)
        
            //append row to container
        $("#timeBlockHolder").append(row);

        //check localStorage for data
        //if localStorage exists, populate task
    }
    $(".saveBtn").on("click", function(){
        console.log("save button clicked");
        //console.log(this);
        //console.log($(this).parent());
        var text = $(this).parent().siblings().attr("id", "task-");
        var time = $(this).parent().attr("id");
        console.log(text);
        console.log(time);
        localStorage.setItem(time, text);
    });
}

createTimeBlocks();






