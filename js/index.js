$(document).ready(function () {
    //When clicking on btns removes active class if btn has it, if it doesn`t have it, adds active class. Also, adds dynamical value to output text.
    $("ul li button").click(function () {
        $("ul li button.active").removeClass("active");
        $(this).addClass("active");
        const btnValue = $(this).val();
        $(".output__text").text("You have selected " + btnValue + " out of 5");
    });
    //Clicking on submit btn adds hide class that removes main card and shows thanking card
    $(".submit__btn").click(function () {
        $(".card").addClass("hide");
        $(".thank__card").removeClass("hide");
    });
});