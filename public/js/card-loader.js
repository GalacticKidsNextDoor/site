function cardLoaderIgnition(terminationTarget){
    cARd.counter++;
    if(cARd.counter>8){
      clearInterval(terminationTarget);
      document.getElementById("loading-overlay-container").style.opacity = 0;
      setTimeout(function(){
        document.getElementById("loading-overlay-container").style.display = "none";
        document.getElementById("member-icon-container").style.display = "block";
        document.getElementById("member-icon-container").style.opacity = 1.0;
        document.getElementById("main-app-container").style.backgroundColor = "white";
        document.getElementById("background-video-container").style.display = "block"
        document.getElementById("background-video-container").style.opacity = 0.6;
      }, 1000);
    }
    switch(cARd.starter){
      case 0:
        document.getElementById("loading-overlay-container").style.backgroundImage = "url(../media/img/xana-white.png)";
        cARd.starter = 1;
        cARd.loaderWeight = 1500;
        break;
      case 1:
        document.getElementById("loading-overlay-container").style.backgroundImage = "url(../media/img/xana-red.png)";
        cARd.starter = 0;
        cARd.loaderWeight = 3000;
        break;
      default:
        break;
    }
}
