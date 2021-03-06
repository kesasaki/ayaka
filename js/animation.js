$(function(){
    $('.effect').css("opacity","0");
    $(window).scroll(function (){
        $(".effect").each(function(){
            effect($(this));
        });
    });
});


function effect(myDom) {
    var scroll = $(window).scrollTop();
    var imgPosTop = myDom.offset().top;
    var imgPosBottom = imgPosTop + myDom.height();
    var windowHeight = $(window).height();
    var inClass= myDom.attr('data-in-class')
    var outClass= myDom.attr('data-out-class')
    var animationBorder = windowHeight/6 < 50 ? windowHeight/6 : 50;
    if (scroll > imgPosTop - windowHeight + animationBorder && scroll < imgPosBottom - animationBorder){
        if (!myDom.hasClass(inClass)) {
            myDom.addClass('lock');
            myDom.delay(1000).queue(function() {
                myDom.removeClass('lock').dequeue();
            });
            myDom.addClass(inClass).removeClass(outClass);
            myDom.css("opacity","1" );
        }
    } else {
        if (!myDom.hasClass(outClass) && !myDom.hasClass('lock')) {
            myDom.addClass(outClass).removeClass(inClass);
            myDom.css("opacity","0" );
        }
    }
}

function slideSwitch() {
    var $active = $('.slideshow img.active');

    if ( $active.length == 0 ) $active = $('.slideshow img:last');

    var $next =  $active.next().length ? $active.next()
        : $('.slideshow img:first');

    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 5000 );
});

