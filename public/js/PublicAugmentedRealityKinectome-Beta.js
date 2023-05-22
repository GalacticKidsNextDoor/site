/*
*   PUBLIC AUGMENTED REALITY KINECTOME
*   version 0.11.0.0
*   author P-M O. DE GOMA
*
*/

var map, Restaurants = [], previewOpen = false, previewOn = null, fullViewOn = null, fullViewOpen = false, pages, buttons, packageWidgetVisible = false, locations = [];
var createSettingsMenuIsVisible = false;
//const eventHandlerController = new AbortController();

function attachButtonHandlers(){
    pages = [
        document.getElementById("user-access-layer-container"),
        document.getElementById("map"),
        document.getElementById("page-2-container"),
        document.getElementById("page-3-container"),
        document.getElementById("page-4-container"),
        document.getElementById("page-5-container"),
    ];

    buttons = [
        document.getElementById("see-tables-button-container"),//0
        document.getElementById("close-preview-button-container"),//1
        document.getElementById("checkout-cart-button-container"),//2
        document.getElementById("apple-pay-payment-option-container"),//3
        document.getElementById("paypal-payment-option-container"),//4
        document.getElementById("create-account-button-container"),//5
        document.getElementById("d2-capture-button-container"),//6
        document.getElementById("register-for-pARk-button-container"),//7
        document.getElementById("dps2-call-button-container"),//8
        document.getElementById("film-capture-button-container"),//9
        document.getElementById("delivery-capture-button-container")//10
    ];

    pages[0].style.opacity = 1.0;
    pages[0].style.height = "100%";
    pages[0].style.display = "block";

    pages[0].addEventListener("click", function(){
        this.style.opacity = "0";
        this.style.height = "0";

        pages[1].style.display = "block";
        pages[1].style.height = "100%"

        setTimeout(function(){
            pages[0].style.display = "none";
        }, 500);

        //openFullscreen();

    });

    buttons[1].addEventListener("click", function(){
        toggleRestaurantInfoPreview(previewOn);
        document.getElementById(`widget-option-button-1-container`).removeEventListener("click", openGivenWindow);
        document.getElementById(`widget-option-button-2-container`).removeEventListener("click", openPangaeaWindow);
        document.getElementById(`widget-option-button-3-container`).removeEventListener("click", openBroadcastWindow);
        document.getElementById(`widget-option-button-4-container`).removeEventListener("click", openLyokoinWallet);
        
        document.getElementById(`access-hyperreal-space-button-container`).removeEventListener("click", openGivenWindow);
        //eventHandlerController.abort();
    });

    buttons[0].addEventListener("click", function(){
    //    console.log(previewOn);
        var goThru = 0;

        while(previewOn!=Restaurants[goThru].name){
            goThru++;
        }

        //console.log(goThru);

        if(Restaurants[goThru].pointer.charAt(0)==="@"){
            //open send package container
           // console.log("open package widget");
            if(packageWidgetVisible){
                document.getElementById("page-3-container").style.display = "none";
                packageWidgetVisible = false;
            }
            else{
                document.getElementById("page-3-container").style.display = "block";
                packageWidgetVisible = true;
            }
        }
        else{
            window.open(Restaurants[goThru].pointer);
        }
    });

    document.getElementById("close-send-package-widget-button-container").addEventListener("click", function(){
        /*if(packageWidgetVisible){*/
            document.getElementById("page-3-container").style.display = "none";
            packageWidgetVisible = false;
        /*}
        else{
            document.getElementById("page-3-container").style.display = "block";
            packageWidgetVisible = true;
        }*/
    });

    document.getElementById("launch-drone-delivery-button-container").addEventListener("click", function(){
        document.getElementById("loading-drone-container").style.opacity = 1.0;

        setTimeout(function(){
            document.getElementById("page-3-container").style.display = "none";
        }, 6000);
    });

    buttons[5].addEventListener("click", function(){
        if(createSettingsMenuIsVisible){
            document.getElementById("create-account-button-container").style.backgroundColor = "rgba(255, 255, 255, 0.7)"
            document.getElementById("create-account-input-container").style.opacity = 0;
            setTimeout(function(){
                document.getElementById("create-account-input-container").style.display = "none";
            }, 501);
            createSettingsMenuIsVisible = false;
        }
        else{
            document.getElementById("create-account-button-container").style.backgroundColor = "rgba(255, 0, 0, 0.7)"
            document.getElementById("create-account-input-container").style.display = "block";
            setTimeout(function(){
                document.getElementById("create-account-input-container").style.opacity = 1.0;
            }, 100);
            createSettingsMenuIsVisible = true;
        }

    });

    buttons[6].addEventListener("click", function(){
      window.location.replace("./lyoko");
    });

    /*buttons[7].addEventListener("click", function(){
      window.location.replace("https://www.traderjoesdeliverydc.com/account/login/create");
    });*/

    buttons[8].addEventListener("click", function(){
      window.location.replace("../protect");
    });

    buttons[9].addEventListener("click", function(){
        loadParkFilmModule();
    });

    buttons[10].addEventListener("click", function(){
        loadParkDeliveryModule();
    });

    document.getElementById("widget-option-button-0-container").addEventListener("click", function(){
        document.getElementById("loading-drone-container").style.display = "block";

        setTimeout(function(){
            document.getElementById("loading-drone-container").style.opacity = 1.0;

            setTimeout(function(){
                document.getElementById("hide-this-when-loading-is-done-container").style.display = "none";

                document.getElementById("loading-drone-gif").style.display = "none";

                document.getElementById("successfully-starting-route-container").style.display = "block";

                document.getElementById("show-this-when-loading-is-done-container").style.display = "block";

                setTimeout(function(){
                    document.getElementById("loading-drone-container").style.opacity = 0;

                    setTimeout(function(){
                        document.getElementById("hide-this-when-loading-is-done-container").style.display = "block";
                        document.getElementById("close-send-package-widget-button-container").click();
                        document.getElementById("loading-drone-container").style.display = "none";
                    }, 1000);

                }, 5000);

            }, 5000);

        }, 50)
    });
}

function loadParkFilmModule(){
    console.log("film module engaged");
    document.getElementById("film-module-container").style.display = "block";
    setTimeout(function(){
        document.getElementById("film-module-container").style.opacity = 1.0;
    }, 50);
    
    
}

function loadParkDeliveryModule(){
    console.log("delivery module engaged");
    
}

function openFullscreen() {
    let docEl = document.documentElement;

    if (docEl.requestFullscreen) {
        docEl.requestFullscreen();
    } else if (docEl.mozRequestFullScreen) { /* Firefox */
        docEl.mozRequestFullScreen();
    } else if (docEl.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        docEl.webkitRequestFullscreen();
    } else if (docEl.msRequestFullscreen) { /* IE/Edge */
        docEl.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
}

function closePreview(){    /* Close the preview overlay pane. */
    /* The following values are transitioned (CSS3) resulting in a gradient animation from the current value to the new value. The current value set in
    PublicAugmentedRealityKinectome-Beta.css .page-container is 100% with a transition time of 500 ms. */
    pages[2].style.height = 0;  /* Set the pane container height to 0 */
    pages[2].style.opacity = 0; /*  Set the pane opacity to 0 */

    setTimeout(function(){
        pages[2].style.display = "none";
    }, 500);

    let widgetButtons = document.getElementsByClassName(`widget-option-button-container`);

    for(var yung=0; yung<widgetButtons.length; yung++){
        (function(){
            let currentYung = widgetButtons.item(yung);
            currentYung.style.display = "none";
        })();
    }

    previewOpen = false;
    previewOn = null;
}

function openPreview(focus){    /* open the preview overlay pane for a given node, focus */
    let target = focus;
    fullViewOn = target;

    pages[2].style.display = "block";
    setTimeout(function(){
        pages[2].style.height = "99%";
        pages[2].style.opacity = 1.0;
    }, 50)

    var j=0;

    while(j<Restaurants.length&&target!==Restaurants[j].name){
        j++;
    }

    document.getElementById("restaurant-logo-container").style.backgroundImage = `url(${Restaurants[j].icon})`;

    //THE COMMENTED CODE BELOW IS SPECIFICALLY FOR RANK1TV

    /*
    let episodeMarker = Restaurants[j].name.indexOf("Episode");
    let seasonName, episodeName;

    if(episodeMarker>-1){
        seasonName = Restaurants[j].name.substring(0, episodeMarker);
        episodeName = Restaurants[j].name.substring(episodeMarker);
    }

    document.getElementById("restaurant-name-container").innerHTML = `<p>${seasonName}</p><p>${episodeName}</p>`;

    document.getElementById("restaurant-rating-container").innerHTML = `${Restaurants[j].rating}`;
    */

    document.getElementById("restaurant-name-container").innerHTML = `${Restaurants[j].name}`;

    document.getElementById("restaurant-description-container").innerHTML = `${Restaurants[j].description}`;

    if(Restaurants[j].lastPublicPostPreviewAvailable){
        document.getElementById("preview-media-container").style.backgroundImage = Restaurants[j].lastPublicPostPreviewImage;
    }
    else{
        document.getElementById("preview-media-container").style.backgroundImage = "url(../media/img/yktv-static.gif)";
    }

    let widgetOptionPointers = Object.keys(Restaurants[j].widgetOptions);

    for(var yo=0; yo<widgetOptionPointers.length; yo++){
        (function(){
            let currentYo = Restaurants[j].widgetOptions[widgetOptionPointers[yo]];
            document.getElementById(`widget-option-button-${currentYo}-container`).style.display = "block";

            let currentNode = Restaurants[j];
            if(currentYo===1){//if the "My cARd" option is available
                /*if(firstClickTaken){
                    document.getElementById(`widget-option-button-${currentYo}-container`).removeEventListener("click", openGivenWindow);    
                    
                    document.getElementById(`access-hyperreal-space-button-container`).removeEventListener("click", openGivenWindow);
                }*/
                
                document.getElementById(`widget-option-button-${currentYo}-container`).addEventListener("click", openGivenWindow);//, signal: eventHandlerController.signal
                
                document.getElementById(`widget-option-button-${currentYo}-container`).houseTarget = currentNode.targets.houseofvenus;
                
                
                document.getElementById(`access-hyperreal-space-button-container`).addEventListener("click", openGivenWindow);
                document.getElementById(`access-hyperreal-space-button-container`).houseTarget = currentNode.targets.houseofvenus;
                
                //firstClickTaken = true;
                    //window.open(`https://houseofven.us/pARk/${currentNode.targets.houseofvenus}`, "_blank");
                //function(){});

                
            }
            else if(currentYo===2){//if the "MY STORE" option is available
                /*if(secondClickTaken){
                    document.getElementById(`widget-option-button-${currentYo}-container`).removeEventListener("click", openPangaeaWindow);
                }*/
                
                document.getElementById(`widget-option-button-${currentYo}-container`).addEventListener("click", openPangaeaWindow);
                
                document.getElementById(`widget-option-button-${currentYo}-container`).storeTarget = currentNode.targets.houseofvenus;
                //}, {once: true, signal: eventHandlerController.signal});
                
                //secondClickTaken = true;
            }
            else if(currentYo===3){
              //if the "MY BROADCAST" option is available

                /*if(thirdClickTaken){
                    document.getElementById(`widget-option-button-${currentYo}-container`).removeEventListener("click", openBroadcastWindow);
                }*/

                document.getElementById(`widget-option-button-${currentYo}-container`).addEventListener("click", openBroadcastWindow);//function(e){ (e, currentNode.targets.broadcast);
                document.getElementById(`widget-option-button-${currentYo}-container`).channelID = currentNode.targets.broadcast;
                //}, {once: true, signal: eventHandlerController.signal});
                
                //thirdClickTaken = true;
            }
            else if(currentYo===4){
              //MORE DIAS
                /*if(fourthClickTaken){
                    document.getElementById(`widget-option-button-${currentYo}-container`).removeEventListener("click", openLyokoinWallet);
                }*/
                
                document.getElementById(`widget-option-button-${currentYo}-container`).addEventListener("click", openLyokoinWallet);
                document.getElementById(`widget-option-button-${currentYo}-container`).lyoWallet = currentNode.targets.lyokoin;
                
             //   fourthClickTaken = true;
            }
        })();
    }

    previewOpen = true;
    previewOn = target;
}

/*
                let currentWidget = document.getElementById(`widget-option-button-${currentYo}-container`);
                let widgetClone = currentWidget.cloneNode(true);
                currentWidget.parentNode.replaceChild(widgetClone, currentWidget);
                */


function openGivenWindow(evt, givenWindowTarget){
    let givenWindowURL = givenWindowTarget || evt.currentTarget.houseTarget;
    window.open(`https://houseofven.us/pARk/${givenWindowURL}`, "_blank");
}


function openPangaeaWindow(evt, pangaeaWindowTarget){
    let pangaeaWindowURL = pangaeaWindowTarget || evt.currentTarget.storeTarget;
    window.open(`https://houseofven.us/pangaea/${pangaeaWindowURL}`, "_blank");
}

function openBroadcastWindow(evt, broadcastWindowTarget){
    let broadcastWindowURL = broadcastWindowTarget || evt.currentTarget.channelID;
    window.open(`https://houseofven.us/b/${broadcastWindowURL}`, "_blank");
}

function openLyokoinWallet(evt, walletTarget){
    let walletID = walletTarget || evt.currentTarget.lyoWallet;
    window.open(`https://houseofven.us/w/${walletID}`, "_blank");
}

function emptyFilledLocation(){ /* remove the node specific content from the view containers in the preview */
    let locationMenu = document.getElementById("restaurant-details-menu-container");
    locationMenu.innerHTML = ``;
}

function toggleRestaurantInfoPreview(focus){/* In next major version this will be specified as the mobileToggleRestaurantInfoPreview function */
    let target = focus;

//    console.log(`clicked on ${target}`);

    if(previewOn===target){
//        console.log("I am currently on this page so you can toggle it away");

        if(fullViewOpen){ /* if the preview tab overlay is open ... */

            pages[2].style.height = "100px";

            document.getElementById("restaurant-details-menu-container").style.display = "none";
            document.getElementById("restaurant-details-menu-container").style.opacity = 0;

            document.getElementById("restaurant-details-menu-container").style.height = 0;

            emptyFilledLocation();  /* remove the node specific meta data from the view containers in the overlay */
            fullViewOpen = false;   /*  the overlay is out of sight, fullViewOpen is false */
        }

        closePreview();
    }
    else{
        if(previewOpen){    /* if an existing preview is open ... */
            closePreview(); /* close said preview */
            setTimeout(function(){  /* wait 50 seconds after the expected completion of the closePreview function above (EC + 50 = 500 + 50 = 550) */
                if(previewOn!==target){ /* if the preview is not set to the current target (which should never be the case given the expected closure of the closePreview function above; a false condition at runtime indicates an error or race condition fault which is a potential security flaw) */
                    openPreview(target);    /* open the given target preview */
                }
            }, 550);
        }
        else{
            openPreview(target);    /* open the given target preview */
        }
    }
}
