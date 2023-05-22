/*
* THE LYOKO VIEWER MODULE
* manages the UI for interacting with an immersive experience depending on the hardware available
* optimized for:
* House of Venus Danaus v.1
* iPhones manufactured after 2018 running Safari on iOS 15 and up
*
* v. 0.2.0.0
* by Patrice-Morgan de Goma
*
*/

var settingsMenuVisible = false, currentBgColor = "white-background-color-setting-button-container", floorIsVisible = false;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("toggle-menu-visibility-button-container").addEventListener("click", function () {
        if (settingsMenuVisible) {
            document.getElementById("toggle-menu-visibility-button-container").value = "+";
            document.getElementById("environment-settings-menu-container").style.display = "none";
            document.getElementById("lyoko-hypermedia-player").style.display = "block";
            settingsMenuVisible = false;
        } else {
            document.getElementById("toggle-menu-visibility-button-container").value = "-";
            document.getElementById("environment-settings-menu-container").style.display = "block";
            document.getElementById("lyoko-hypermedia-player").style.display = "none";
            settingsMenuVisible = true;
        }
    });


    document.getElementById("white-background-color-setting-button-container").addEventListener("click", function () {
        if (settingsMenuVisible) {
            document.getElementById(currentBgColor).classList.remove("selected-color-setting");
            document.getElementById("sky-background-container").setAttribute("color", "white");
            document.getElementById("white-background-color-setting-button-container").classList.add("selected-color-setting");
            currentBgColor = "white-background-color-setting-button-container";
        }
    });
    
    document.getElementById("black-background-color-setting-button-container").addEventListener("click", function () {
        if (settingsMenuVisible) {
            document.getElementById(currentBgColor).classList.remove("selected-color-setting");
            document.getElementById("sky-background-container").setAttribute("color", "black");
            document.getElementById("black-background-color-setting-button-container").classList.add("selected-color-setting");
            currentBgColor = "black-background-color-setting-button-container";
        }
    });

    document.getElementById("red-background-color-setting-button-container").addEventListener("click", function () {
        if (settingsMenuVisible) {
            document.getElementById(currentBgColor).classList.remove("selected-color-setting");
            document.getElementById("sky-background-container").setAttribute("color", "red");
            document.getElementById("red-background-color-setting-button-container").classList.add("selected-color-setting");
            currentBgColor = "red-background-color-setting-button-container";
        }
    });
    
    document.getElementById("yellow-background-color-setting-button-container").addEventListener("click", function () {
        if (settingsMenuVisible) {
            document.getElementById(currentBgColor).classList.remove("selected-color-setting");
            document.getElementById("sky-background-container").setAttribute("color", "yellow");
            document.getElementById("yellow-background-color-setting-button-container").classList.add("selected-color-setting");
            currentBgColor = "yellow-background-color-setting-button-container";
        }
    });

    document.getElementById("toggle-floor-visibility-button-container").addEventListener("click", function () {
        if (floorIsVisible) {
            document.getElementById("floor-container").setAttribute("visible", false);
            floorIsVisible = false;
        } else {
            document.getElementById("floor-container").setAttribute("visible", true);
            floorIsVisible = true;
        }
    });
});
