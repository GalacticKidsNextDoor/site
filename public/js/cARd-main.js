
document.addEventListener("DOMContentLoaded", function(){
  setTimeout(function(){
    let loadingInterval = setInterval(function(){
      cardLoaderIgnition(loadingInterval)
    }, cARd.loaderWeight);

    attachWWWLobbyButtonUIEvents();

    loadModelRepoApplication();
  }, 3000);
});

window.addEventListener("load", function(){
  setTimeout(function(){
    document.getElementById("cv-link-button-container").click();
  }, 3000);
});
