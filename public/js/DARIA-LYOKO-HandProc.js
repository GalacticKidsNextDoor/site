//2.0.1.6
//Patrice-Morgan O. de Goma

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

function processHandMotions(){
  if(HandActionTracker.openCount>50){
    if(!DARIA.active){
      console.log("Connecting...\n Code? LYOKO.");
      HandActionTracker.pointCount = 0;
      HandActionTracker.closedCount = 0;

      document.getElementById("toggle-audio-playback-button-container").click();
    }
    else{

    }
    HandActionTracker.openCount = 0;
  }

  if(HandActionTracker.pointCount>30){
      console.log("POINTING");
      HandActionTracker.pointCount = 0;

  }

  if(HandActionTracker.closedCount>30){
    console.log("CLOSED FIST");
    HandActionTracker.closedCount = 0
  }

}

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

        processHandMotions();
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

  document.getElementById("toggle-handtracking-button-container").addEventListener("click", function(){
      document.getElementById("special-hand-tracking-box-container").style.display = "block";
      setTimeout(function(){
          let trackerNowOpen = document.getElementById("special-hand-tracking-box-container").classList.toggle("special-tracker-open");
          console.log(`tracker open? ${trackerNowOpen}`);
      }, 50);
  });
});
