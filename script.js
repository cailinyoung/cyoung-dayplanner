// moment api date display  
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// save button semantics
$(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    localStorage.setItem(time, value);
});

//  local save data
$("nineHour .description").val(localStorage.getItem("nineHour"));
$("tenHour .description").val(localStorage.getItem("tenHour"));
$("elevenHour .description").val(localStorage.getItem("elevenHour"));
$("twelveHour .description").val(localStorage.getItem("twelveHour"));
$("#oneHour .description").val(localStorage.getItem("oneHour"));
$("#twoHour .description").val(localStorage.getItem("twoHour"));
$("#threeHour .description").val(localStorage.getItem("threeHour"));
$("#fourHour .description").val(localStorage.getItem("fourHour"));
$("#fiveHour .description").val(localStorage.getItem("fiveHour"));

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