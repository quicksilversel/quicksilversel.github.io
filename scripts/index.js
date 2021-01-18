$(document).ready(function() {
    // navigation mouse hover event
    $("#navigation li a").on('mouseenter mouseleave', function () {
            $(this).children().fadeToggle(100);
    });​
});