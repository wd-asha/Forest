$(function() {
    $("#slide2").fadeOut(100);
    $("#slide3").fadeOut(100);

    function shiftSlide() {
        setTimeout(function () {
            $("#slide2").fadeIn(2000);
            $("#slide1").fadeOut(2000);
            $("#slide3").fadeOut(2000);
        }, 10000);

        setTimeout(function () {
            $("#slide3").fadeIn(2000);
            $("#slide1").fadeOut(2000);
            $("#slide2").fadeOut(2000);
        }, 20000);

        setTimeout(function () {
            $("#slide1").fadeIn(2000);
            $("#slide2").fadeOut(2000);
            $("#slide3").fadeOut(2000);
        }, 30000);
    }

    shiftSlide();

    setInterval(() => shiftSlide(), 30000);

});