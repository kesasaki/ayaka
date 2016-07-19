$(function(){
    $('.effect').css("opacity","0");
    $(window).scroll(function (){
        var scroll = $(window).scrollTop();
        $(".effect").each(function(){
            var imgPosTop = $(this).offset().top;
            var imgPosBottom = imgPosTop + $(this).height();
            var windowHeight = $(window).height();
            var inClass= $(this).attr('data-in-class')
            var outClass= $(this).attr('data-out-class')
            var animationBorder = windowHeight/6 < 50 ? windowHeight/6 : 50;
            if (scroll > imgPosTop - windowHeight + animationBorder && scroll < imgPosBottom - animationBorder){
                if (!$(this).hasClass(inClass)) {
                    $(this).addClass('lock');
                    $(this).delay(1000).queue(function() {
                        $(this).removeClass('lock').dequeue();
                    });
                    $(this).addClass(inClass).removeClass(outClass);
                    $(this).css("opacity","1" );
                }
            } else {
                if (!$(this).hasClass(outClass) && !$(this).hasClass('lock')) {
                    $(this).addClass(outClass).removeClass(inClass);
                    $(this).css("opacity","0" );
                }
            }
        });
    });
});

