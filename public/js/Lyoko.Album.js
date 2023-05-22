/*
*
* LYOKO ALBUM CUSTOM FILE
* a collection of ten songs, viewable in traditional media player formats and immersive media players
* a wrapper of the LYOKO AUDIO COLLECTION OBJECT-SUBJECT
* each song within the ALBUM is an AUDIO TRACK and thus the core dependencies of this package are:
* AUDIO TRACK from Lyoko.AudioTrack.JS
* AUDIO COLLECTION from Lyoko.AudioCollection.JS
* DB HEADERS from Lyoko.{AlbumNameNoSpaces}DBHeaders.JS [iff the AUDIO COLLECTION is being streamed, if data is local use regular build functions]
*
* v. 0.2.0.0
* by Patrice-Morgan de Goma
*
*/

function downloadAudioCollectionStream(data){
  let rawACStream = data;
  //console.log(rawACStream);
  AlbumAuthor = data.author;
  AlbumAuthorNoSpaces = AlbumAuthor.replace(/\s/g, '');

  var trackTracker = {};

  for(var i=0; i<rawACStream.tracks.length; i++){
    let currentBufferIndex = i;
    (function(){
      var loadingCurrentTrack;

      storage.refFromURL(rawACStream.tracks[currentBufferIndex].src).getDownloadURL().then(function(url){
         loadingCurrentTrack = new AudioTrack(AlbumAuthor, rawACStream.tracks[currentBufferIndex].name, rawACStream.tracks[currentBufferIndex].description, url);
         trackTracker[currentBufferIndex] = loadingCurrentTrack;

         if(currentBufferIndex==rawACStream.tracks.length-1){ // USE PROMISES IN THE NEXT ITERATION!
           setTimeout(function(){
             sortDownloadedData(trackTracker, rawACStream.tracks.length);
           }, PromisedPause);
         }
         /*{
           index: rawACStream.tracks[currentBufferIndex].index,
           track: loadingCurrentTrack
         };*/
      }).catch((error) => {
          console.log(error);
      });
    })();
  }
}

function sortDownloadedData(audioList, listLength){
  var tracksInDownloadedOrder = audioList;

  //console.log(tracksInDownloadedOrder);
  //console.log(listLength);

  for(var j= 0; j<listLength; j++){
    let currIndex = j;
    (function(){
      AlbumTrackList.push(tracksInDownloadedOrder[currIndex]);
    })();
  }

  //console.log(AlbumTrackList);

  if(windowIsLoaded){
    loadAlbum()
  }
  else{
    setTimeout(function(){
      loadAlbum();
    }, PromisedPause*2);
  }
}

function loadAlbum(){
  let LHMplayer = document.getElementById("lyoko-hypermedia-player");
  let Album = new AudioCollection(AlbumName, AlbumTrackList,  LHMplayer);
  document.getElementById("select-previous-track-button-container").addEventListener("click", function(){
    Album.playPreviousTrack();
  });

  document.getElementById("select-next-track-button-container").addEventListener("click", function(){
    Album.playNextTrack();
  });
  console.log("album loaded");
}
