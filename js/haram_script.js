$(function() {
    // 카테고리 버튼 click 시 이벤트
    $(".btn-category").click(function() {
        $(".hd-on").slideDown(800);
        $(".hd-on>h1").slideDown(500);
        $(".haram-on-main-menu").slideDown(500);
        $(".haram-intro-menu").slideDown(500);

        $('html, body').css({'overflow': 'hidden', 'height': '100%'});
        $('.hd-on').on('scroll mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });
    });

    // 닫기 버튼 click 시 이벤트
    $(".btn-close").click(function() {
        $(".hd-on").slideUp(800);
        $(".hd-on>h1").slideUp(500);
        $(".haram-on-main-menu").slideUp(500);
        $(".haram-intro-menu").slideUp(500);

        $('html, body').css({'overflow': '', 'height': ''});
    });

    // 상단 이동 버튼 rotate 설정
    var angle = 0;

    setInterval(function() {
        angle += 1;
        $(".top-btn-border").rotate(angle);
    }, 50);

    // 상단 이동 버튼 click 시 이벤트
    $(".haram-top-btn").click(function() {
        $("body, html").animate({scrollTop:0}, 500);
    });
});