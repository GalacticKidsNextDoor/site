export function AppLibrary(range){
    console.log(`Decentralized Immersive Application Library\n ${range}`);
    const fullLib = [
        {
            name: "PARK",
            src: "./media/img/drone-icon-white.png",
            bgSize: "auto 90%",
            bgPosition: "center center",
            target: "./explore",
            color: "rgba(255,255,255,0)",
            type: "Application",
            ranking: 0
        },
        {
            name: "AVATAR SAM",
            src: "./media/img/avatar-sam-cover.png",
            bgSize: "auto 80%",
            bgPosition: "center center",
            color: "rgba(255,255,255,0)",
            target: "./sam",/*"./avatar-sam",*/
            type: "Application",
            ranking: 1
        },
        {
            name: "AI THE LABEL",
            src: "./media/img/ai-tunes-transparent.png",
            bgSize: "auto 60%",
            bgPosition: "center center",
            color: "rgba(255,255,255,0)",
            target: "./ai-the-label",/*"./avatar-sam",*/
            type: "Application",
            ranking: 2
        },
        {
            name: "DRONEPONG",
            src: "./media/img/pong-logo.png",
            bgSize: "auto 80%",
            bgPosition: "center center",
            target: "./dronepong",
            color: "rgba(255,255,255,0)",
            type: "Application",
            ranking: 3
        },
        {
            name: "IM SAIAN",
            src: "./media/img/IMSAIAN.png",
            bgSize: "auto 80%",
            bgPosition: "center center",
            target: "./im-saian",
            color: "rgba(255,255,255,0)",
            type: "Application",
            ranking: 4
        }
    ]
    if(range>fullLib.length)range=fullLib.length;
    return fullLib.slice(0, range);
};