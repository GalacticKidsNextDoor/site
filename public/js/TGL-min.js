function loadTGL(rawCharArray){
    let starter = rawCharArray;
    for(const property in starter) {
        console.log(`${property}: ${starter[property]}`);
        let currentTGL = document.createElement("div");
        currentTGL.classList.add(`tgl-letter-${starter[property]}-container`);
        currentTGL.classList.add("galactic-letter-block-container");
        document.getElementById("galactic-output-container").append(currentTGL);
    }
}