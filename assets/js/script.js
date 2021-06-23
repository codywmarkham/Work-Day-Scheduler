let todaysDate = document.querySelector("#todaysDate");
const saveBtn = document.querySelectorAll(".saveBtn");

let now = moment();
// getting the date
todaysDate = now.format("dddd, MMMM Do");


$("#todaysDate").append(todaysDate);


let currentHour = now.hour();
console.log(currentHour)



    const inputs = $('.text-form')

    for (let i = 0; i < inputs.length; i++) {

        let dataId = ($(inputs[i]).siblings("row").attr("id"));
        console.log(dataId);
        // trying to change color
        if(dataId < currentHour){
            $("row").addClass("past");
        } else if (dataId === currentHour){
            $("row").addClass("present");
        } else if (dataId > currentHour){
            $("row").addClass("future");
        }
    }

// saving page info
function saveText () {

    if (inputs !== ""){
        const hour = {
            hour9: $("#hour9").val(),
            hour10: $("#hour10").val(),
            hour11: $("#hour11").val(),
            hour12: $("#hour12").val(),
            hour13: $("#hour13").val(),
            hour14: $("#hour14").val(),
            hour15: $("#hour15").val(),
            hour16: $("#hour16").val(),
            hour17: $("#hour17").val()
        };

        console.log(hour)

        localStorage.setItem("hour", JSON.stringify(hour));
    }
}

let hourEvent = JSON.parse(localStorage.getItem("hour")) || {};

console.log(hourEvent)


$("#hour9").val(hourEvent.hour9);
$("#hour10").val(hourEvent.hour10);
$("#hour11").val(hourEvent.hour11);
$("#hour12").val(hourEvent.hour12);
$("#hour13").val(hourEvent.hour13);
$("#hour14").val(hourEvent.hour14);
$("#hour15").val(hourEvent.hour15);
$("#hour16").val(hourEvent.hour16);
$("#hour17").val(hourEvent.hour17);

$(".saveBtn").on("click", saveText);