$(function(){
    var time = 500;
    $('a[href^=#]').click(function() {
         var target = $(this.hash);
         if (!target.length) return ;
         var targetY = target.offset().top;
         $('html,body').animate({scrollTop: targetY}, time, 'swing');
         window.history.pushState(null, null, this.hash);
         return false;
    });

    var box    = $("#menuWrap");
    var boxTop = box.offset().top;
    var targetPos = 500;
    $(window).on('scroll touchmove', function() {
        box.removeClass('fixed');
        var ScrollPos = $(window).scrollTop();
        if (ScrollPos > targetPos) {
            box.stop();
            box.css('display', 'none');
            box.delay(300).addClass('fixed').fadeIn('fast');
        } else {
            box.css('display', 'inline');
            box.css('opacity', 1);
        }
    });
});
