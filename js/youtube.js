(function () {
    // Load the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Replace the 'ytplayer' element with an <iframe> and
    // YouTube player after the API code downloads.
}.call(this));

var players = []
$(function(){
    $('button.close-button').on('click', function(event){
        $(players).each(function(){
            if (this.getPlayerState() == YT.PlayerState.PLAYING) {
                this.pauseVideo();
            }
        });
        $(event.currentTarget).closest('li').addClass('effect')
        $(event.currentTarget).closest('div').removeClass('full')
    })
});

function onYouTubePlayerAPIReady() {
    $('.movie-wrap').each(function(){
        var srcId = $(this).attr('data-movie-src');
        var randId = new Date().getTime().toString(16)  + Math.floor(1000*Math.random()).toString(16);
        $(this).attr('data-movie-id', randId);
        $(this).append("<div id=" + randId + "></div>");
        players.push(new YT.Player(randId, {
            height: '100%',
            width: '100%',
            videoId: srcId,
            playerVars: {
                'showinfo': 0,
                'modestbranding': 1,
                'rel': 0,
                'autohide': 1
            },
            events: {
                'onStateChange': onPlayerStateChange
            }
        }));
    });
}

function onPlayerStateChange(event) {
    if ($(window).width() <= 780) {
        return true;
    }
    var current = event.target.a;
    li = $(current).closest('li');
    if (event.data == YT.PlayerState.PLAYING) {
        $(li).removeClass($(li).attr('data-in-class')).removeClass($(li).attr('data-out-class')).removeClass('effect');
        $($(current).closest('div')).addClass('full');
    } else if (event.data == YT.PlayerState.ENDED) {
        $(li).addClass('effect');
        $($(current).closest('div')).removeClass('full');
    }
}
