/*
*   PUBLIC AUGMENTED REALITY KINECTOME
*   version 0.11.0.0
*   author P-M O. DE GOMA
*
*/

var map, Restaurants = [], previewOpen = false, previewOn = null, fullViewOn = null, fullViewOpen = false, pages, buttons, packageWidgetVisible = false, locations = [];
var createSettingsMenuIsVisible = false;

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
        document.getElementById("see-tables-button-container"),
        document.getElementById("close-preview-button-container"),
        document.getElementById("checkout-cart-button-container"),
        document.getElementById("apple-pay-payment-option-container"),
        document.getElementById("paypal-payment-option-container"),
        document.getElementById("create-account-button-container"),
        document.getElementById("d2-capture-button-container"),
        document.getElementById("register-for-pARk-button-container"),
        document.getElementById("dps2-call-button-container")
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
        toggleRestaurantInfoPreview(previewOn)
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

    buttons[7].addEventListener("click", function(){
      window.location.replace("https://www.traderjoesdeliverydc.com/account/login/create");
    });

    buttons[8].addEventListener("click", function(){
      window.location.replace("../defense");
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
                        document.getElementById("close-send-package-widget-button-container").click();
                        document.getElementById("loading-drone-container").style.display = "none";
                    }, 3000);

                }, 5000);

            }, 5000);

        }, 50)
    });
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

    while(j<Restaurants.length&&target!=Restaurants[j].name){
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
            if(currentYo==1){//if the "FLYBY" option is available
                document.getElementById(`widget-option-button-${currentYo}-container`).addEventListener("click", function(){
                    window.location.href = `https://houseofven.us/pARk/${currentNode.targets.houseofvenus}`;
                });

                document.getElementById(`access-hyperreal-space-button-container`).addEventListener("click", function(){
                    window.location.href = `https://houseofven.us/pARk/${currentNode.targets.houseofvenus}`;
                });
            }
            else if(currentYo==2){//if the "MY STORE" option is available
                document.getElementById(`widget-option-button-${currentYo}-container`).addEventListener("click", function(){
                    window.location.href = `https://houseofven.us/pangaea/${currentNode.targets.houseofvenus}`;
                });
            }
        })();
    }

    previewOpen = true;
    previewOn = target;
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
