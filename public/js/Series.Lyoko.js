document.addEventListener("DOMContentLoaded", function(){
    console.log(Series.name+"\nv. 0.3.5");
    setTimeout(function(){
        loadLobby();
        revealTGLSubtitleContainer();
        //console.log("improve system")
    }, 1000);
});

function loadLobby(){
    document.getElementById("gknd-logo-button-container").classList.remove("loading-screen-logo-container");
    document.getElementById("gknd-logo-button-container").classList.add("corner-logo-container");

    document.getElementById("main-scene-container").classList.remove("hidden-scene");
    document.getElementById("main-scene-container").classList.add("visible-scene");
}

function revealTGLSubtitleContainer(){
    document.getElementById("tgl-subtitles-container").style.display = "block";
    setTimeout(function(){
        document.getElementById("tgl-subtitles-container").style.opacity = 1.0;
    }, 1000);
}