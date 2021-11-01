// get time format from moment.js
var date = moment().format("dddd, MMMM Do, YYYY - hh:mm:ss a");
// Display current Date
$("#currentDay").text(date);
//create variables to hold all schedules input
var scheduledItem = [];
//create variables for the class hour
var timeBlock = $(".hour");
// set the time or hour for the functions
var currentHour = parseInt(moment().format("H"));
// create function to click the buttons and save input into the local storage
$(".saveBtn").on("click", function(){
    // set the variables for the class value 
    var textAreaVal = $(this).siblings(".description").val();
    console.log(textAreaVal);
    // set the variables for the attribute id value
    var textAreaId = $(this).siblings(".description").attr("id");
    
    console.log(textAreaId);
    // save the input text value
    scheduledItem.push(textAreaVal);
    // set the input text as value of the texareaId
    localStorage.setItem(textAreaId, textAreaVal);
});
// function to save the every input text
function saveScheduledItem(event){
    console.log(event.target);

}
// function to save and display the input text/scheduled on the page
function loadScheduleditem(){
    JSON.parse(localStorage.getItem("schedules"))
    if(!scheduledItem){
        scheduledItem = {};
    };
}
//functions to get the inputted text/scheduled for each attribute ids
$("#nineAm").val(localStorage.getItem("nineAm"));
$("#tenAm").val(localStorage.getItem("tenAm"));
$("#elevenAm").val(localStorage.getItem("elevenAm"));
$("#twelvePm").val(localStorage.getItem("twelvePm"));
$("#onePm").val(localStorage.getItem("onePm"));
$("#twoPm").val(localStorage.getItem("twoPm"));
$("#threePm").val(localStorage.getItem("threePm"));
$("#fourPm").val(localStorage.getItem("fourPm"));
$("#fivePm").val(localStorage.getItem("fivePm"));
// function to change the color for each time or hour
$.each(timeBlock, function(i, hour){
    var hourId = parseInt($(this).attr("id"));
    //if schedule input is past, change to grey
    if(hourId < currentHour){
        $(this).next().addClass("past");

    }
    // if schedule is present, change color to orange
    else if(hourId === currentHour){
        $(this).next().addClass("present");
    } 
    // if schedule is oncoming, change color to green
    else if(hourId > currentHour){
        $(this).next().addClass("future");
    }
});


