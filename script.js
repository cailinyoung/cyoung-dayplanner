// moment api date display  
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// save button semantics
$(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    localStorage.setItem(time, value);
});

//  local save data
$("nineAM .description").val(localStorage.getItem("hour-9"));
$("tenAM .description").val(localStorage.getItem("hour-10"));
$("elevenAM .description").val(localStorage.getItem("hour-11"));
$("twelvePM .description").val(localStorage.getItem("hour-12"));
$("#onePM .description").val(localStorage.getItem("hour-13"));
$("#twoPM .description").val(localStorage.getItem("hour-14"));
$("#threePM .description").val(localStorage.getItem("hour-15"));
$("#fourPM .description").val(localStorage.getItem("hour-16"));
$("#fivePM .description").val(localStorage.getItem("hour-17"));

$(document).ready(function () {
    function hourConfiguration() {
        var currentHour = moment().hours();

        $(".row").each(function () {
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