$(function(){
    var box    = $("#menuWrap");
    var boxTop = box.offset().top;
    $(window).scroll(function () {
        if($(window).scrollTop() >= boxTop) {
            box.addClass("fixed", 1000);
        } else {
            box.removeClass("fixed", 1000);
        }
    });
});
