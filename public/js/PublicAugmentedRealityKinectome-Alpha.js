var map;
var Restaurants = [];
var previewOpen = false;
var previewOn = null;
var fullViewOn = null;
var fullViewOpen = false;

function initMap() {

    /*

    colesville
    heart of golden gorges {lat: 39.080640, lng: -76.979460}

    */

    /* silver spring
    center: {lat: 38.9907, lng: -77.0261}
    */

    /* ellicott city
    center: {lat: 39.249620, lng: -76.836200}


    lexington
    center: {lat: 38.039810, lng: -84.509540}

    miami

    232 NE 27 Street, Miami, Florida 33137
    center: {lat: 25.810560, lng: -80.190400}


    583 W 2nd St, Lexington, KY 40508
    center: {lat: 38.055630, lng: -84.502170}

{lat: 25.810560, lng: -80.190400},

    */
    map = new google.maps.Map(document.getElementById('map'), {
        mapTypeControlOptions: {
            mapTypeIds: []
        },
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        center: {lat: 39.080640, lng: -76.979460},
        zoom: 10,
        styles: [
            {
                elementType: 'geometry', 
                stylers: [
                    {color: '#242f3e'},
                    {visibility: 'on'}
                ]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [
                    {color: '#ffffff'},
                    {visibility: 'off'}
                 ]
            },
            {
                elementType: 'labels.text.fill', stylers: [
                    {color: '#ffffff'},{visibility: 'off'}
                ]
            },
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [
                  {color: '#ffffff'}, {visibility: 'off'}
              ] //#d59563
            },
            {
              featureType: 'poi',
              elementType: 'labels',//.text.fill
              stylers: [
                  {color: '#ffffff'}, {visibility: 'off'}
              ] //#d59563
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}, {visibility: 'on'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}, {visibility: 'off'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}, {visibility: 'off'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}, {visibility: 'off'}]
            },
            {
              featureType: 'road',
              elementType: 'labels',//.text.fill
              stylers: [{color: '#9ca5b3'}, {visibility: 'off'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}, {visibility: 'off'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}, {visibility: 'off'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}, {visibility: 'off'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}, {visibility: 'off'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels',//.text.fill
              stylers: [{color: '#ffffff'}, {visibility: 'off'}] //#d59563
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}, {visibility: 'on'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}, {visibility: 'off'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}, {visibility: 'off'}]
            }
          ]
    });

    loadMarkers();
}

var locations = [
    {
        pointer: "@ceo.hov",
        zoom: true,
        position: {
            lat: 39.080640,
            lng: -76.979460
        },
        icon: "../media/img/pongoly.png",
        name: "Patrice-Morgan Ongoly de Goma",
        description: "<p>Join me outside, the void is fine.</p><p>#StayVisionary</p><p>Paris | Silver Spring | Cambridge</p>",
        rating: "****4.8",
        tables: [
            {
                productName: "Tylenol",
                productMetaData: {
                    thc: 0,
                    thc: 0,
                    thc: 0,
                },
                cover: "../media/img/tylenol.png"
            },
        ],
        menu: {
            Item0: {
                price: 9.99,
                prepTime: 10.5,
                description: "item 0 food description"
            }
        }
    },
    {
        pointer: "./fd",
        zoom: false,
        position: {
            lat: 39.082670,
            lng: -77.000940
        },
        icon: "../media/img/drone-map-icon.png",
        name: "Cambodian Buddhist Temple - Launch Point",
        description: "<p>Status: ON</p><p>Charging? NO</p><p>Battery: 96%</p>",
        rating: "****4.8",
        tables: [
            {
                productName: "Tylenol",
                productMetaData: {
                    thc: 0,
                    thc: 0,
                    thc: 0,
                },
                cover: "../media/img/tylenol.png"
            },
        ],
        menu: {
            Item0: {
                price: 9.99,
                prepTime: 10.5,
                description: "item 0 food description"
            }
        }
    },
    {
        pointer: "./yktvPilotWPB",
        zoom: false,
        position: {
            lat: 39.107858,
            lng: -76.992487
        },
        icon: "../media/img/drone-map-icon.png",
        name: "Cloverly Park - Launch Point",
        description: "<p>Status: ON</p><p>Charging? YES</p><p>Battery: 89%</p>",
        rating: "****4.8",
        tables: [
            {
                productName: "Tylenol",
                productMetaData: {
                    thc: 0,
                    thc: 0,
                    thc: 0,
                },
                cover: "../media/img/tylenol.png"
            },
        ],
        menu: {
            Item0: {
                price: 9.99,
                prepTime: 10.5,
                description: "item 0 food description"
            }
        }
    },
    {
        pointer: "./yktvPilotMiami",
        zoom: false,
        position: {
            lat: 25.802407,
            lng: -80.124135
        },
        icon: "../media/img/hov-miami.png",
        name: "YKTV Pilot Season Episode 3: Miami",
        description: "¡Bienvenidos a Miami! Florida's Atlantic crown remains the exuberant home of American beauty and prosperity. Her Youth are a vision of opportunity whose charms inspire hope. Follow V as he chronicles life in the Magic City.",
        rating: "****4.8",
        tables: [
            {
                productName: "Tylenol",
                productMetaData: {
                    thc: 0,
                    thc: 0,
                    thc: 0,
                },
                cover: "../media/img/tylenol.png"
            },
        ],
        menu: {
            Item0: {
                price: 9.99,
                prepTime: 10.5,
                description: "item 0 food description"
            }
        }
    }
];

document.addEventListener("DOMContentLoaded", function(){
    console.log("content loaded");
    attachButtonHandlers();
});

var pages, buttons;

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
        document.getElementById("close-create-account-input-button-container"),
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
        console.log(previewOn);
        var goThru = 0;

        while(previewOn!=Restaurants[goThru].name){
            goThru++;
        }
        console.log(goThru);

        if(Restaurants[goThru].pointer.charAt(0)==="@"){
            //open send package container
            console.log("open package widget");
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
            const line = new google.maps.Polyline({
                path: [
                  { lat: 22.291, lng: 153.027 },
                  { lat: 18.291, lng: 153.027 },
                ],
                icons: [
                  {
                    icon: Restaurants[1].marker,
                    offset: "100%",
                  },
                ],
                map: map,
              });
        }, 6000);
    });
    
    buttons[5].addEventListener("click", function(){
        document.getElementById("create-account-input-container").style.display = "block";
        setTimeout(function(){
            document.getElementById("create-account-input-container").style.opacity = 1.0;
        }, 100);
    });

    buttons[6].addEventListener("click", function(){
        document.getElementById("create-account-input-container").style.opacity = 0;
        setTimeout(function(){
            document.getElementById("create-account-input-container").style.display = "none";
        }, 501);
    });            
}

var packageWidgetVisible = false;

function loadMarkers(){
     for(var i=0; i<locations.length; i++){
        (function(){
            let currentLocation = {
                marker: null,
                position: locations[i].position,
                icon: locations[i].icon,
                name: locations[i].name,
                rating: locations[i].rating,
                description: locations[i].description,
                tables: locations[i].tables,
                zoom: locations[i].zoom,
                pointer: locations[i].pointer
            };

            let iconSize;

            if(currentLocation.zoom){
                iconSize = new google.maps.Size(100, 100);
            }
            else{
                iconSize = new google.maps.Size(50, 50);
            }

            currentLocation.marker = new google.maps.Marker({
                position: currentLocation.position,
                map: map,
                icon: {
                    url: currentLocation.icon,
                    scaledSize: iconSize
                }
            });

            currentLocation.marker.addListener("click", function(){                          
                toggleRestaurantInfoPreview(currentLocation.name);
                console.log("you clicked on a marker");
            });

            //console.log(currentLocation);
            Restaurants.push(currentLocation);
        })();
    }
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

function closePreview(){
    pages[2].style.height = 0;
    pages[2].style.opacity = 0;

    setTimeout(function(){
        pages[2].style.display = "none";
    }, 500);

    previewOpen = false;
    previewOn = null;
}

function openPreview(focus){
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
    
    if(Restaurants[j].lastPublicPostAvailable){
        document.getElementById("preview-media-container").style.backgroundImage = Restaurants[j].lastPublicPostPreviewImage;    
    }

    previewOpen = true;
    previewOn = target;
}

function emptyFilledLocation(){
    let locationMenu = document.getElementById("restaurant-details-menu-container");
    locationMenu.innerHTML = ``;
}

function toggleRestaurantInfoPreview(focus){
    let target = focus;

    console.log(`clicked on ${target}`);
    
    if(previewOn===target){
        console.log("I am currently on this page so you can toggle it away");

        if(fullViewOpen){

            pages[2].style.height = "100px";

            document.getElementById("restaurant-details-menu-container").style.display = "none";
            document.getElementById("restaurant-details-menu-container").style.opacity = 0;

            document.getElementById("restaurant-details-menu-container").style.height = 0;
            
            emptyFilledLocation();
            fullViewOpen = false;
        }

        closePreview();
    }
    else{
        if(previewOpen){
            closePreview();
            setTimeout(function(){
                if(previewOn!==target){
                    openPreview(target);
                }
            }, 550);
        }
        else{
            openPreview(target);
        }
    }
}