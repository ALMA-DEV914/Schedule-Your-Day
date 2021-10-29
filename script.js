// get time format from moment.js
var date = moment().format("dddd, MMMM Do, YYYY - hh:mm:ss a");
// Display current Date
$("#currentDay").text(date);
var scheduledItem = [];
var timeBlock = $(".hour");

var currentHour = parseInt(moment().format("H"));

$(".saveBtn").on("click", function(){
    var textAreaVal = $(this).siblings(".description").val();
    console.log(textAreaVal);
    var textAreaId = $(this).siblings(".description").attr("id");
    
    console.log(textAreaId);
    scheduledItem.push(textAreaVal);
    localStorage.setItem(textAreaId, textAreaVal);
});

function saveScheduledItem(event){
    console.log(event.target);

}
function loadScheduleditem(){
    JSON.parse(localStorage.getItem("schedules"))
    if(!scheduledItem){
        scheduledItem = {};
    };
}
$("#nineAm").val(localStorage.getItem("nineAm"));
$("#tenAm").val(localStorage.getItem("tenam"));
$("#elevenAm").val(localStorage.getItem("elevenAm"));
$("#twelvePm").val(localStorage.getItem("twelvePm"));
$("#onePm").val(localStorage.getItem("onePm"));
$("#twoPm").val(localStorage.getItem("twoPm"));
$("#threePm").val(localStorage.getItem("threePm"));
$("#fourPm").val(localStorage.getItem("fourPm"));
$("#fivePm").val(localStorage.getItem("fivePm"));

$.each(timeBlock, function(i, hour){
    var hourId = parseInt($(this).attr("id"));
    
    if(hourId < currentHour){
        $(this).next().addClass("past");

    }
    else if(hourId === currentHour){
        $(this).next().addClass("present");
    } 
    else if(hourId > currentHour){
        $(this).next().addClass("future");
    }
});


