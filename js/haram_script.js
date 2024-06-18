$(function() {
    var angle = 0;

    setInterval(function() {
        angle += 1;
        $(".btn-rotate").rotate(angle);
    }, 50);
});