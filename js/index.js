$(document).ready(function () {
    //Toggles active class while clicking on buttons, adds dynamical value to output text
    $("ul li button").click(function () {
        $(this).toggleClass("active");
        const btnValue = $(this).val();
        $(".output__text").text("You have selected " + btnValue + " out of 5");
    });
    //Clicking on submit btn adds hide class that removes main card and shows thanking card
    $(".submit__btn").click(function () {
        $(".card").addClass("hide");
        $(".thank__card").removeClass("hide");
    });
});