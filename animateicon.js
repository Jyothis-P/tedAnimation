$(document).ready(function(){
  $("video").hover(function(){	
  	var video = this;
    video.play();
	console.log("t: " + video.currentTime)
    if (video.currentTime >= 0.5) {
    	video.pause();
    }
    }, function(){

    console.log($(this).get(0).currentTime);

    this.pause();

    var video = this;

    var fps = 60;
    var intervalRewind = setInterval(function() {
        if(video.currentTime == 0){
           clearInterval(intervalRewind);
           video.pause();
        }
        else {
            video.currentTime += -(1/fps);
        }
    }, 1000 / fps);


    // $(this).get(0).currentTime = 0;
    // $(this).get(0).pause();

  });
});
