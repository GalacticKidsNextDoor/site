export function AppLibrary(range){
    console.log(`Decentralized Immersive Application Library\n ${range}`);
    const fullLib = [
        {
            name: "AI THE LABEL",
            src: "./media/img/be-the-label.png",
            bgSize: "auto 100%",
            bgPosition: "center center",
            target: "./ai-the-label",/*"./avatar-sam",*/
            type: "Application",
            ranking: 0
        },
        {
            name: "AVATAR SAM",
            src: "./media/img/avatar-sam-cover.png",
            bgSize: "auto 100%",
            bgPosition: "center center",
            target: "./sam",/*"./avatar-sam",*/
            type: "Application",
            ranking: 1
        },
         {
            name: "IM SAIAN",
            src: "./media/img/IMSAIAN.png",
            bgSize: "auto 100%",
            bgPosition: "center center",
            target: "./im-saian",
            color: "rgba(255,255,255,0)",
            type: "Application",
            ranking: 2
        },
    ]
    if(range>fullLib.length)range=fullLib.length;
    return fullLib.slice(0, range);
};