var estate_video = "pause";


$('#cont-video-team').click(function(){   
    if(estate_video =="play")    {
        $('.cont-video-team')[0].pause();
        estate_video = "pause";
    }else{
        $('.cont-video-team')[0].play();
        estate_video = "play";
    }
});
