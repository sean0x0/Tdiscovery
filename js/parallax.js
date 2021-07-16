$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".zoom").css({
        backgroundSize: (100 + scroll / 5) + "%",
    });
    $("video").css({
        
        top: -(scroll / 10) + "%",
        height: (100 + scroll / 20) + "%",
    });
    
});