$(document).ready(function() {

    $("#div-click-tab-1").click(function() {
        $("#div-1").css("display", "block");
        $("#div-2").css("display", "none");
        $("#div-3").css("display", "none");
    });

    $("#div-click-tab-2").click(function() {
        $("#div-1").css("display", "none");
        $("#div-2").css("display", "block");
        $("#div-3").css("display", "none");

    });

    $("#div-click-tab-3").click(function() {
        $("#div-1").css("display", "none");
        $("#div-2").css("display", "none");
        $("#div-3").css("display", "block");
    });

    $(".close-button").click(function() {
        $("#div-1").css("display", "none");
        $("#div-2").css("display", "none");
        $("#div-3").css("display", "none");
    });
});
