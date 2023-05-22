class AudioCollection{
   constructor(title, audioTracks, player, HMTitle, HMLabel){
     this.Title = title;
     this.tracks = audioTracks || [];
     this.trackInFocus = -1;
     this.isStreaming = false;
     this.Player = player;
     this.HyperMediaTitle = document.getElementById("lyoko-hypermedia-title-container") || HMTitle;
     this.HyperMediaLabel = document.getElementById("lyoko-hypermedia-label-container") || HMLabel;
     console.log(`AUDIOCOLLECTION \n version 1.0.0 \n Title: ${this.Title} \n Tracks: ${this.tracks.length} enclosed. \n Player: ${this.Player.getAttribute("id")}`);
     console.log(audioTracks);
     this.HyperMediaTitle.textContent = title;
     this.Player.addEventListener("pause", function(){
       document.getElementById("lyoko-hypermedia-block-container").emit("playerPausedStopAnimation");
     });
     this.Player.addEventListener("playing", function(){
       document.getElementById("lyoko-hypermedia-block-container").emit("playerResumeStartAnimation");
     });
     this.Player.addEventListener("ended", function(){
       document.getElementById("select-next-track-button-container").click();
     });
   }
   playPreviousTrack(mediaPlayerID){
     //lyoko-hypermedia-player
     if(mediaPlayerID!=null){
       this.Player = document.getElementById(mediaPlayerID);
     }
     if(this.trackInFocus<1){
       console.log("already at first track");
     }
     else{
       this.Player.pause();
       this.trackInFocus-=1;
       this.Player.src = this.tracks[this.trackInFocus].AudioURL;
       this.HyperMediaTitle.textContent = this.tracks[this.trackInFocus].Title;
       this.HyperMediaLabel.textContent = this.tracks[this.trackInFocus].Description;
       this.Player.play();
     }
   }
   playNextTrack(mediaPlayerID){
     //lyoko-hypermedia-player
     if(mediaPlayerID!=null){
       this.Player = document.getElementById(mediaPlayerID);
     }
     if(this.trackInFocus==this.tracks.length-1){
       console.log("already at last track");
     }
     else{
       //if(this.trackInFocus<0)document.getElementById("lyoko-hypermedia-block-container").emit("playerResumeStartAnimation");
       this.Player.pause();
       this.trackInFocus+=1;
       this.Player.src = this.tracks[this.trackInFocus].AudioURL;
       this.HyperMediaTitle.textContent = this.tracks[this.trackInFocus].Title;
       this.HyperMediaLabel.textContent = this.tracks[this.trackInFocus].Description;
       this.Player.play();
     }
   }
   playCurrentTrack(mediaPlayerID){
     //lyoko-hypermedia-player
     if(mediaPlayerID!=null){
       this.Player = document.getElementById(mediaPlayerID);
     }
     if(this.trackInFocus<0){
       this.trackInFocus+=1;
       this.Player.src = this.tracks[this.trackInFocus].AudioURL;
       this.HyperMediaTitle.textContent = this.tracks[this.trackInFocus].Title;
       this.HyperMediaLabel.textContent = this.tracks[this.trackInFocus].Description;
     }
     this.Player.play();
     document.getElementById("lyoko-hypermedia-block-container").emit("playerResumeStartAnimation");
   }
   pauseCurrentTrack(mediaPlayerID){
     //lyoko-hypermedia-player
     if(mediaPlayerID!=null){
       this.Player = document.getElementById(mediaPlayerID);
     }
     this.Player.pause();
     document.getElementById("lyoko-hypermedia-block-container").emit("playerPausedStopAnimation");
   }
   togglePlayback(mediaPlayerID){
     let target = mediaPlayerID;
     if(this.isStreaming){
       pauseCurrentTrack(target);
       this.isStreaming = false;
     }
     else{
       playCurrentTrack(target);
       this.isStreaming = true;
     }
   }
}
