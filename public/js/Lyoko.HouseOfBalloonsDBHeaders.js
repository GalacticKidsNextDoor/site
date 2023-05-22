AlbumName = "House Of Balloons";
AlbumNameNoSpaces = AlbumName.replace(/\s/g, '');
const dbRefObject = database.ref().child("Lyoko/AudioCollection/"+AlbumNameNoSpaces);

dbRefObject.once("value").then(function(snap){
    //console.log(snap.val());
    PromisedPause = 3000;
    AlbumTrackList = [];
    downloadAudioCollectionStream(snap.val()); // WRAP THIS UP IN PROMISES!
});
