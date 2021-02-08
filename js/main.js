$(function() {
    $('.play_video').click(function() {
        var thumbVid = $('#thumb_video');
        var w = thumbVid.width();
        var h = thumbVid.height();
        $('#video').height(h);
        var video = '<iframe width="100%" height="'+h+'px" src="https://www.youtube.com/embed/jkJBClo7WgI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style="position: absolute; top: 0px; left: 0px;"></iframe>';
        $('#video').html(video);
        return false;
    });
});