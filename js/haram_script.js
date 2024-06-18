$(function() {
    var angle = 0;

    setInterval(function() {
        angle += 1;
        $(".top-btn-border").rotate(angle);
    }, 50);
});