//3.0.a
//Patrice-Morgan O. de Goma
// Last updated: Tuesday, March 11, 2025

/* This file handles the Hand processing from DARIA's visual feed
* members must activate the hand processing if it isn't already turned on,
* this can be done by:
* toggling the manual hand processing module button (DONE)
* telling DARIA to watch my hands with audio (TODO)
*/
//const model =  await handTrack.load();
//const predictions = await model.detect(img);

var DARIA = DefenseAugmentedRealityIntelligentAssistant;

var video, handimg, canvas, context;

let imgindex = 1;
let isVideo = false;
let model = null;

// video.width = 500
// video.height = 400

const modelParams = {
  flipHorizontal: true, // flip e.g for video
  maxNumBoxes: 20, // maximum number of boxes to detect
  iouThreshold: 0.5, // ioU threshold for non-max suppression
  scoreThreshold: 0.6, // confidence threshold for predictions.
};

function startDesktopVideo() {
  handTrack.startVideo(video).then(function (status) {
    console.log("video started", status);
    if (status) {
      console.log("Video started. Now tracking");
      isVideo = true;
      runDetection();
    } else {
      console.log("Please enable video");
    }
  });
}

var maidenStopUsed = false;

function toggleVideo() {
  if (!isVideo) {
    if(maidenStopUsed){
      stopMobileVideo();
    }
    console.log("Starting video");
    startDesktopVideo();
  }
  else {
    console.log("Stopping video");
    handTrack.stopVideo(video);
    isVideo = false;
    console.log("Video stopped");
    maidenStopUsed = true;
    startMobileVideo();
  }
}

var currentFaceCount;

var HandActionTracker = {
  openCount: -1,
  pointCount: -1,
  closedCount: -1,
};

function processHandMotions(itemBox){
  var currentPotential = itemBox;
/*
  currentPotential contains the hand motion and associated processing data

  bounding box
      an array containing the origin (x,y), width, and height of the bounding box surrounding the hand gesture (in that order)
  label
      the name of the gesture recognized by the handtrack algorithm
  class
      a number corresponding to the label
  score
      the confidence the algorithm assigns to the classification of this gestrue
  */

      /*TODO

      * move your hand around to determine the edges of the visual field for the webcam
      * 
      * 
      * 
      * 
  */
 
  if(HandActionTracker.openCount>50){
    if(!DARIA.active){
      console.log("Connecting...\n Code? LYOKO.");
      HandActionTracker.pointCount = 0;
      HandActionTracker.closedCount = 0;

        //This initializes LYOKO
      document.getElementById("toggle-audio-playback-button-container").click();
    }
    else{
        console.log("Stopping current behavior");
    }
    HandActionTracker.openCount = 0;
  }

  if(HandActionTracker.pointCount>30){
      console.log("Threshold Item");
      console.log(currentPotential)
      console.log("POINTING");
      HandActionTracker.pointCount = 0;

  }

  if(HandActionTracker.closedCount>30){
    console.log("Threshold Item");
    console.log(currentPotential);
    console.log("CLOSED FIST");
    HandActionTracker.closedCount = 0
  }

}

// This function receives predictions from the core handtracking cv module
// these PREDICTIONs are an array of ITEMs
// each ITEM contains:
// the LABEL says what type of feature the algorithm has spotted (closed fist, open hand, pointing hand, pinching hand, or face)
// a SCORE giving how certain the algorithm is of the accuracy of its prediction
//  
// After receiving the predictions it processes them as potentials, when a potential reaches a 
// certain threshold an action is triggered on the backend
//

function processPredictions(predictions){
  currentFaceCount = 0;
/*  if(predictions.length==0){
    console.log("tracking nothing");
  }else */
  if(predictions.length>0){
    //console.log("tracking...")
    predictions.forEach((item, i) => {
      if(item.label=="face"){
        ++currentFaceCount;
        document.getElementById("face-tracker-app-container").textContent = (currentFaceCount).toString();
      }
      else{
        document.getElementById("hand-tracker-app-container").textContent = `${item.score*100} %`;
        if(item.label=="open"){
          HandActionTracker.openCount++;
        }

        if(item.label=="point"){
          HandActionTracker.pointCount++;
        }

        if(item.label=="closed"){
          HandActionTracker.closedCount++;
        }

        processHandMotions(item);
      }
    });
  }
}

function runDetection() {
  model.detect(video).then((predictions) => {
    processPredictions(predictions);
    model.renderPredictions(predictions, canvas, context, video);
    if (isVideo) {
      requestAnimationFrame(runDetection);
    }
  });
}

function runDetectionImage(img, videoEvent) {
  let videoEventTrigger = videoEvent;
  model.detect(img).then((predictions) => {
    console.log("Predictions: ", predictions);
    model.renderPredictions(predictions, canvas, context, img);
    if(videoEventTrigger){
      startDesktopVideo();
    }
  });
}

function isDesktop(){
  console.log(`w: ${window.innerWidth}`);
  console.log(`h: ${window.innerHeight}`);

  if(window.innerWidth<600){
    return false;
  }
  return true;
}

function startMobileVideo(){
  var mobileVideoContainer = document.getElementById("lyoko-video-container");

  console.log("starting mobile video engine");
  mobileVideoContainer.style.zIndex = "7";
  mobileVideoContainer.style.height = "90%";
  // Get access to the camera!
  if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
          //video.src = window.URL.createObjectURL(stream);
          mobileVideoContainer.srcObject = stream;
          mobileVideoContainer.play();
      });
  }
}

function stopMobileVideo(){
  var mobileVideoContainer = document.getElementById("lyoko-video-container");

  console.log("stopping mobile video engine");

  mobileVideoContainer.style.zIndex = "1";
  mobileVideoContainer.srcObject.getTracks().forEach(function(track) {
    track.stop();
  });
}

window.addEventListener('load', function(){
  video = document.getElementById('lyoko-video-container');
  handimg = document.getElementById("handimage");
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  let thisIsADesktop = isDesktop();

  if(thisIsADesktop){
    // Load the model.
    handTrack.load(modelParams).then((lmodel) => {
      // detect objects in the image.
      model = lmodel;
      console.log(model);
      console.log("Loaded Model!");
      runDetectionImage(handimg, true);
    });
  }
  else{
    // this is a mobile device
    startMobileVideo();
  }

  //toggle-handtracking-button-container
  document.getElementById("hand-tracker-app-container").addEventListener("click", function(){
      toggleVideo();
  });


  var settingsVisible = true;
  document.getElementById("toggle-handtracking-button-container").addEventListener("click", function(){
      if(settingsVisible){

        document.getElementById("settings-container").style.opacity = 0;
        setTimeout(function(){
          document.getElementById("settings-container").style.display = "none";
        }, 500);
        settingsVisible = false;
      }
      else{
        document.getElementById("settings-container").style.display = "block";
        setTimeout(function(){
          document.getElementById("settings-container").style.opacity = 1.0;
        }, 50);
        settingsVisible = true;
      }
  });
});
