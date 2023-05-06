class Message{
    constructor(text, outputField){
        this.text = text;
        this.timeStamp = Date.now();
        this.sendTime = new Date().toTimeString();
        this.sendDate = new Date().toDateString();
        this.output = outputField;
    }
    
    display(){
        let rawTextInput = this.text;
        //console.log(rawTextInput);
        let charArray = [];
        let totalCharCount = rawTextInput.length;
        for(var onChar = 0; onChar < totalCharCount; onChar++){
            if(rawTextInput.charAt(onChar)===" "){
                charArray.push("SPACE");
            }
            else{
                charArray.push(rawTextInput.charAt(onChar).toLowerCase());
            }
        }
        console.log(charArray);
        this.loadTGLSubtitles(charArray);
    }
    
    loadTGLSubtitles(rawCharArray){
        let starter = rawCharArray;
        for(const property in starter){
            //console.log(`${property}: ${starter[property]}`);
            let currentTGL = document.createElement("div");

            currentTGL.classList.add(`tgl-letter-${starter[property]}-container`);
            currentTGL.classList.add("galactic-letter-block-size-10-container");
            this.output.append(currentTGL);
        }
    }
}