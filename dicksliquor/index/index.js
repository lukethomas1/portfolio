$(document).ready(function() {
    var mainButton = document.querySelector("#main-button");
    $(mainButton).hover(function() {
        $(this).toggleClass("main-button-hover");
    }, function() {
        $(this).toggleClass("main-button-hover");
    });
});