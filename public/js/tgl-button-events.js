document.getElementById("tgl-to-earth-translate-button-container").addEventListener("click", function(){
    let rawTextInput = document.getElementById("earth-text-input-container").value;
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
    loadTGL(charArray);
});

document.getElementById("clear-current-translation-button-container").addEventListener("click", function(){
    document.getElementById("galactic-output-container").innerHTML = ""; 
    document.getElementById("earth-text-input-container").value = ""; 
});
