$(function() {
  $('.main').css('display','none');
  $('#loader-bg ,#loader').css('display','block');
});
 
$(window).load(function () { //全ての読み込みが完了したら実行
    stopload();
});
 
//10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',10000);
});

function stopload(){
    $('.main').css('display','block');
    $('#loader-bg').delay(900).fadeOut(800, function(){
        var box    = $("#menuWrap");
        var boxTop = box.offset().top;
        var targetPos = 500;
        $(window).on('scroll touchmove', function() {
            box.removeClass('fixed');
            var ScrollPos = $(window).scrollTop();
            box.dequeue();
            if (ScrollPos > targetPos) {
                box.stop();
                box.css('display', 'none');
                box.delay(300).queue(function() {
                    $(this).addClass('fadeIn').addClass('fixed').show().dequeue();
                });
            } else {
                box.removeClass('fadeIn');
                box.css('display', 'inline');
                box.css('opacity', 1);
            }
        });
        $(window).trigger('scroll');
    });
    $('#loader').delay(600).fadeOut(300);
    $('#title-name').delay(1000).removeClass('none');
}

