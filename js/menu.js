$(function(){
    var box    = $("#menuWrap");
    var boxTop = box.offset().top;
    $(window).scroll(function () {
        if($(window).scrollTop() >= boxTop - 14) {
            box.addClass("fixed");
        } else {
            box.removeClass("fixed");
        }
    });
});
