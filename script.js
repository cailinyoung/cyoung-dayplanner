// moment api date display  
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// save button semantics
$(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    localStorage.setItem(time, value);
});

//  local save data
$("nineAmE .description").val(localStorage.getItem("nineAmE"));
$("tenAmE .description").val(localStorage.getItem("tenAmE"));
$("elevenAmE .description").val(localStorage.getItem("elevenAmE"));
$("twelvePmE .description").val(localStorage.getItem("twelvePmE"));
$("#onePmE .description").val(localStorage.getItem("onePmE"));
$("#twoPmE .description").val(localStorage.getItem("twoPmE"));
$("#threePmE .description").val(localStorage.getItem("threePmE"));
$("#fourPmE .description").val(localStorage.getItem("fourPmE"));
$("#fivePmE .description").val(localStorage.getItem("fivePmE"));

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