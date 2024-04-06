$(function() {
    $("#burger").on("click", function (e) {
        $("#mobilePanel").toggleClass("mobile__panel_open")
    });
    $(".mobile__panel_item").on("click", function (e) {
        $("#mobilePanel").toggleClass("mobile__panel_open")
    });
    $("#mobile__panel_close").on("click", function (e) {
        $("#mobilePanel").toggleClass("mobile__panel_open")
    });
});