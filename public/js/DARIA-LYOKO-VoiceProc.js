
window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    
var voiceProcModule = {
    voiceProc: null,
    voiceProcStarted: false,
    voiceProcStopped: false,
    voiceProcContainer: null,
    voiceProcButton: null,
    finalTranscript: "",
    recognition: {
        main: null, /*new window.SpeechRecognition(),*/
        interimTranscript: "",
        finalTranscript: "",
        lang: "en-US",
        interimResults: true,
        maxAlternatives: 10,
        continuous: true,
        onresult : function(event){
            let interimTranscript = '';
            for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
                let transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    this.finalTranscript += transcript;
                } else {
                    this.interimTranscript += transcript;
                }
            }
            document.querySelector("voice-proc-container").innerHTML = finalTranscript + '<i style="color:#ddd;">' + interimTranscript + '</>';
        }
    }
};

      document.querySelector('body').innerHTML = finalTranscript + '<i style="color:#ddd;">' + interimTranscript + '</>';
    
    
function preloadVoiceProcFunctions(){
    document.getElementById("taste-tracker-app-container").addEventListener("click", function(event) {  
        toggleVoiceProc();
    });
}

function toggleVoiceProc() {
    var voiceProcContainer = document.getElementById("voice-proc-container");
    var voiceProcButton = document.getElementById("voice-proc-button-container");

    if(voiceProcContainer.style.display == "none"){
        voiceProcContainer.style.display = "block";
        voiceProcButton.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        startVoiceProc();
    }
    else{
        voiceProcContainer.style.display = "none";
        voiceProcButton.style.backgroundColor = "rgba(255, 255, 255, 0.0)";
        stopVoiceProc();
    }
}
function startVoiceProc() {
    voiceProcModule.voiceProcStarted = true;
    voiceProcModule.voiceProcStopped = false;
    if(voiceProcModule.recognition.main!=null){
        voiceProcModule.recognition.main = null; //memory cleanup, throw away the old instance
        voiceProcModule.recognition.main = new window.SpeechRecognition();
    }
    else{
        voiceProcModule.recognition.main = new window.SpeechRecognition();
    }
    voiceProcModule.recognition.start();
    console.log("VoiceProc started");
}

function stopVoiceProc() {
    voiceProcModule.voiceProcStopped = true;
    voiceProcModule.voiceProcStarted = false;
    voiceProcModule.recognition.stop();
    voiceProcModule.recognition.main = null; //memory cleanup, throw away the old instance, redundant line of code LEAVE TO ENSURE CLEANUP (NASA STRICTNESS)
    console.log("VoiceProc stopped");
}
