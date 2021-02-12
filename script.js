// moment api date display  
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// save button semantics
$(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    localStorage.setItem(time, value);
});

//  local save data
$("nineAm .description").val(localStorage.getItem("nineAm"));
$("tenAm .description").val(localStorage.getItem("tenAm"));
$("elevenAm .description").val(localStorage.getItem("elevenAm"));
$("twelvePm .description").val(localStorage.getItem("twelvePm"));
$("#onePm .description").val(localStorage.getItem("onePm"));
$("#twoPm .description").val(localStorage.getItem("twoPm"));
$("#threePm .description").val(localStorage.getItem("threePm"));
$("#fourPm .description").val(localStorage.getItem("fourPm"));
$("#fivePm .description").val(localStorage.getItem("fivePm"));

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