// moment api date display  
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// save button semantics
$(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    localStorage.setItem(time, value);
});

//  local save data
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

$(document).ready(function () {
    function hourConfiguration() {
        var currentHour = moment().hours();

        $(".time-block").each(function () {
            const hourSlot = parseInt($(this).attr("id").split("-")[1]);

            if (hourSlot === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("future");
            }
            else if (hourSlot < currentHour) {
                    $(this).addClass("past");
            }
            
            else {
                $(this).removeClass("past");
                $(this).removeClass("current");
                $(this).addClass("future");
            }
        });
    }    

    hourConfiguration();

});