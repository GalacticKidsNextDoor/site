var cARd = {
  starter: 0,
  counter: 0,
  loaderWeight: 1000,
  member: {
    links: {
      tiktok: "https://www.tiktok.com/@oldrowmaryland",
      pARk: "https://houseofven.us/pARk/ceo",
    },
    linksVisible: false
  },
  cvModulePageOpen: false,
  navMenuModulePageOpen: false,
  timelineVideoVisible: false,
  timelineVideoInFocus: -1,
  previewContainerOpen: false,
  storage: null,
  database: null,
  config: {
      apiKey: "AIzaSyDyH3olBhhKfo5ROFwhxNayOCadNHvWYkc",
      authDomain: "golden-gorges-park.firebaseapp.com",
      databaseURL: "https://golden-gorges-park.firebaseio.com/",
      storageBucket: "gs://golden-gorges-park.appspot.com"
  },
  cARdCount: 0,
  previewNames: null,
  currentTree: null,
  metaTree: null
};

firebase.initializeApp(cARd.config);
cARd.storage = firebase.storage();
cARd.database = firebase.database();

const dbRefObject = cARd.database.ref().child("lyoko");

dbRefObject.once("value").then(function(snap){
    cARd.currentTree = snap.val().assets.models;
    cARd.previewNames = Object.keys(cARd.currentTree);
    cARd.metaTree = Object.values(cARd.currentTree);
    //console.log(currentTree);
    //cARdCount = 0;
    for(var key in cARd.currentTree)
        if(cARd.currentTree.hasOwnProperty(key))
            cARd.cARdCount++;
    //console.log(cARdCount);
    let currentBar = window.location.href;
    if(currentBar!="https://patricemorgan.com/login"&&currentBar!="https://houseofven.us/pARk/cARd-login"){
      loadPreviewButtons();
    }
    else{
      console.log("this is a login page \n no need for previews");
    }
});

function loadModelRepoApplication(){
  document.getElementById("close-preview-button-container").addEventListener("click", function(){
    if(cARd.previewContainerOpen){
      togglePreviewContainer();
    }
    else{
      console.log("already closed");
    }
  });
}

function togglePreviewContainer(){
    let previewContainerPointer = document.getElementById("preview-container");
    if(cARd.previewContainerOpen){
        document.getElementById("preview-actions-container").style.display = "none";
        previewContainerPointer.style.opacity = 0;
        previewContainerPointer.style.zIndex = -1;
        previewContainerPointer.setAttribute("width", 300);
        previewContainerPointer.setAttribute("height", 200);
        previewContainerPointer.style.marginTop = "-150px";
        previewContainerPointer.style.marginLeft = "-100px";

        let portfolioOffset = document.getElementById("cv-portfolio-header-container").offsetTop;
        //console.log(portfolioOffset);

        document.getElementById("nav-menu-container").scroll({ top: portfolioOffset, behavior: 'smooth' });

        setTimeout(function(){
            previewContainerPointer.style.display = "none";
            cARd.previewContainerOpen = false;
        }, 505);
    }
    else{
        document.getElementById("preview-actions-container").style.display = "block";
        previewContainerPointer.style.display = "block";
        previewContainerPointer.style.opacity = 1.0;
        previewContainerPointer.style.zIndex = 10;
        previewContainerPointer.setAttribute("width", 350);
        previewContainerPointer.setAttribute("height", 500);
        previewContainerPointer.style.marginTop = "-300px";
        previewContainerPointer.style.marginLeft = "-175px";

        document.getElementById("nav-menu-container").scroll({ top: 0, behavior: 'smooth' });

        cARd.previewContainerOpen = true;
    }
}

function loadPreviewForButton(buttonNumber){
    let thisButton = cARd.previewNames[buttonNumber];
    console.log(thisButton);
    document.getElementById("preview-container").src = "./"+thisButton;
    togglePreviewContainer();
}

function loadPreviewButtons(){
  for(let previewIconIndex = 0; previewIconIndex<cARd.cARdCount; previewIconIndex++){

    (function(){
          //console.log(previewNames[previewIconIndex]);
          let currentPreviewButton = document.createElement("button");
          let sub1 = document.createElement("div");
          let sub2 = document.createElement("div");

          sub1.setAttribute("id", `preview-icon-${previewIconIndex}-container`);
          sub1.classList.add(`preview-icon-container`);
          if(cARd.metaTree[previewIconIndex].icon!==""){
              sub1.style.backgroundImage = `url(../media/icon/${cARd.metaTree[previewIconIndex].icon})`;
          }


          sub2.setAttribute("id", `preview-icon-${previewIconIndex}-label-container`);
          sub2.classList.add(`preview-icon-label-container`);
          sub2.textContent = `${cARd.previewNames[previewIconIndex].substring(0,9)}`;

          currentPreviewButton.setAttribute("id", `preview-icon-${previewIconIndex}-button-wrapper`);
          currentPreviewButton.classList.add("preview-icon-button-wrapper")

          currentPreviewButton.appendChild(sub1);
          currentPreviewButton.appendChild(sub2);

          currentPreviewButton.addEventListener("click", function(){
              loadPreviewForButton(previewIconIndex);
          });

          document.getElementById("model-list-container").appendChild(currentPreviewButton);
          /*`<button click="loadPreviewForButton(${previewIconIndex})" id="preview-icon-button-${previewIconIndex}-wrapper" class="preview-icon-button-wrapper">
            <div id="preview-icon-${previewIconIndex}-container" class="preview-icon-container">
            </div>
            <div id="preview-icon-${previewIconIndex}-label-container" class="preview-icon-label-container">
              ${previewNames[previewIconIndex]}
            </div>
        </button>`;
        document.getElementById("model-list-container").innerHTML +=  currentPreviewButton;*/

      })();
  }
}

function attachMemberLinkButtonUIEvents(){
  document.getElementById("tiktok-link-button-container").addEventListener("click", function(){
    let href = cARd.member.links.tiktok;
    window.open(href, "_blank", "resizeable");
  });

  document.getElementById("pARk-link-button-container").addEventListener("click", function(){
    let href = cARd.member.links.pARk;
    window.open(href, "_blank", "resizeable");
  });


}

function attachWWWLobbyButtonUIEvents(){
  attachMemberLinkButtonUIEvents();

  document.getElementById("member-icon-container").addEventListener("click", function(){
    var memberLinks = document.getElementsByClassName("member-link-button-container");
    if(cARd.member.linksVisible){
      for(var ita=0; ita<memberLinks.length; ita++){
        (function(){
          let item = memberLinks.item(ita);
          //console.log(item);

          item.style.opacity = 0;
          item.style.zIndex = -1;
          setTimeout(function(){
            item.style.display = "none";
            switch(ita){
              case 0:
                item.style.top = "initial";
                item.style.left = "initial";
                item.style.marginLeft = "initial";
              break;
              case 1:
                item.style.bottom = "initial";
                item.style.left = "initial";
              break;
              case 2:
                item.style.bottom = "initial";
                item.style.right = "initial";
              break;
              case 3:
                item.style.bottom = "initial";
                item.style.left = "initial";
                item.style.marginLeft = "initial";
              break;
              default:
                console.log("no associated link");
              break;
            }
          }, 505);
        })();
      }
      cARd.member.linksVisible = false;
    }
    else{
      for(var it=0; it<memberLinks.length; it++){
        (function(){
          let item = memberLinks.item(it);
          //console.log(item);
          item.style.display = "block";
          item.style.opacity = 1.0;
          item.style.zIndex = 10;
          switch(it){
            case 0:
              item.style.top = "-35%";
              item.style.left = "50%";
              item.style.marginLeft = "-38px";
            break;
            case 1:
              item.style.bottom = "-15%";
              item.style.left = "-15%";
            break;
            case 2:
              item.style.bottom = "-15%";
              item.style.right = "-15%";
            break;
            case 3:
              item.style.bottom = "-35%";
              item.style.left = "50%";
              item.style.marginLeft = "-38px";
            break;
            default:
              console.log("no associated link");
            break;
          }
        })();
      }
      cARd.member.linksVisible = true;
    }

  });

  document.getElementById("cv-link-button-container").addEventListener("click", function(){
    if(cARd.cvModulePageOpen){
      //close this page
      cARd.cvModulePageOpen = false;
    }
    else{
      //open this page
      document.getElementById("member-cv-container").style.display = "block";
      document.getElementById("member-cv-container").style.opacity = 1.0;
      document.getElementById("member-cv-container").style.height = "100%";
      document.getElementById("member-cv-container").style.zIndex = 11;
      cARd.cvModulePageOpen = true;
    }
  });

  document.getElementById("close-member-cv-button-container").addEventListener("click", function(){
    if(cARd.cvModulePageOpen){
      //close this page
      setTimeout(function(){
        document.getElementById("member-cv-container").style.display = "none";
        document.getElementById("member-cv-container").style.zIndex = -1;
      }, 505);
      document.getElementById("member-cv-container").style.opacity = 0;
      document.getElementById("member-cv-container").style.height = 0;

      cARd.cvModulePageOpen = false;
    }
  });

  document.getElementById("nav-menu-button-container").addEventListener("click", function(){
    if(cARd.navMenuModulePageOpen){
      //close this page
      cARd.navMenuModulePageOpen = false;
    }
    else{
      //open this page
      document.getElementById("nav-menu-container").style.display = "block";
      document.getElementById("nav-menu-container").style.opacity = 1.0;
      document.getElementById("nav-menu-container").style.height = "100%";
      document.getElementById("nav-menu-container").style.zIndex = 11;
      cARd.navMenuModulePageOpen = true;
    }
  });

  document.getElementById("close-nav-menu-button-container").addEventListener("click", function(){
    if(cARd.navMenuModulePageOpen){
      //close this page
      setTimeout(function(){
        document.getElementById("nav-menu-container").style.display = "none";
        document.getElementById("nav-menu-container").style.zIndex = -1;
      }, 505);
      document.getElementById("nav-menu-container").style.opacity = 0;
      document.getElementById("nav-menu-container").style.height = 0;

      cARd.navMenuModulePageOpen = false;
    }
  });

  document.getElementById("timeline-block-0-container").addEventListener("mouseover", function(){
    if(!cARd.timelineVideoVisible){
      document.getElementById("timeline-video-container").style.display = "block";
      cARd.timelineVideoVisible = true;
    }
    if(cARd.timelineVideoInFocus!==0){
      document.getElementById("timeline-video-container").src = "../media/vid/card.mp4";
      cARd.timelineVideoInFocus = 0;
    }
  });

  document.getElementById("timeline-block-1-container").addEventListener("mouseover", function(){
    if(!cARd.timelineVideoVisible){
      document.getElementById("timeline-video-container").style.display = "block";
      cARd.timelineVideoVisible = true;
    }
    if(cARd.timelineVideoInFocus!==1){
      document.getElementById("timeline-video-container").src = "../media/vid/pARk.mp4";
      cARd.timelineVideoInFocus = 1;
    }
  });

  document.getElementById("timeline-block-2-container").addEventListener("mouseover", function(){
    if(!cARd.timelineVideoVisible){
      document.getElementById("timeline-video-container").style.display = "block";
      cARd.timelineVideoVisible = true;
    }
    if(cARd.timelineVideoInFocus!==2){
      document.getElementById("timeline-video-container").src = "../media/vid/balt.mp4";
      cARd.timelineVideoInFocus = 2;
    }
  });

  document.getElementById("timeline-block-3-container").addEventListener("mouseover", function(){
    if(!cARd.timelineVideoVisible){
      document.getElementById("timeline-video-container").style.display = "block";
      cARd.timelineVideoVisible = true;
    }
    if(cARd.timelineVideoInFocus!==3){
      document.getElementById("timeline-video-container").src = "../media/vid/pong.mp4";
      cARd.timelineVideoInFocus = 3;
    }
  });

  document.getElementById("timeline-block-4-container").addEventListener("mouseover", function(){
    if(!cARd.timelineVideoVisible){
      document.getElementById("timeline-video-container").style.display = "block";
      cARd.timelineVideoVisible = true;
    }
    if(cARd.timelineVideoInFocus!==4){
      document.getElementById("timeline-video-container").src = "../media/vid/fair-0.mp4";
      cARd.timelineVideoInFocus = 4;
    }
  });

  document.getElementById("timeline-block-5-container").addEventListener("mouseover", function(){
    if(!cARd.timelineVideoVisible){
      document.getElementById("timeline-video-container").style.display = "block";
      cARd.timelineVideoVisible = true;
    }
    if(cARd.timelineVideoInFocus!==5){
      document.getElementById("timeline-video-container").src = "../media/vid/7-eleven-intro-video.mp4";
      cARd.timelineVideoInFocus = 5;
    }
  });

  document.getElementById("browse-portfolio-button-container").addEventListener("click", function(){
    document.getElementById("close-member-cv-button-container").click();
    setTimeout(function(){
      document.getElementById("nav-menu-button-container").click();
      let portfolioOffset = document.getElementById("cv-portfolio-header-container").offsetTop;
      console.log(portfolioOffset);

      document.getElementById("nav-menu-container").scroll({ top: portfolioOffset, behavior: 'smooth' });

    }, 505);
  });

  document.getElementById("curriculum-vitae-button-container").addEventListener("click", function(){
    document.getElementById("close-member-cv-button-container").click();
    setTimeout(function(){
      document.getElementById("nav-menu-button-container").click();
      let resumeOffset = document.getElementById("cv-resume-container").offsetTop;
      console.log(resumeOffset);

      document.getElementById("nav-menu-container").scroll({ top: resumeOffset, behavior: 'smooth' });

    }, 505);
  });

  document.getElementById("login-option-button-container").addEventListener("click", function(){
    window.location.href = "./cARd-login";
  });

  document.getElementById("research-cv-link-container").addEventListener("click", function(){
    document.getElementById("close-member-cv-button-container").click();
    setTimeout(function(){
      document.getElementById("nav-menu-button-container").click();

      let bioOffset = document.getElementById("cv-bio-container").offsetTop;
      console.log(bioOffset);

      document.getElementById("nav-menu-container").scroll({ top: bioOffset, behavior: 'smooth' });
    }, 505);
  });

  document.getElementById("tiktok-cv-link-container").addEventListener("click", function(){
    document.getElementById("tiktok-link-button-container").click();
  });

  document.getElementById("linkedin-cv-link-container").addEventListener("click", function(){
    window.open("https://www.linkedin.com/in/patrice-morgan-ongoly-de-goma-b12717205", "_blank", "resizeable");
  });

  document.getElementById("linkedin-resume-button-container").addEventListener("click", function(){
    window.open("https://www.linkedin.com/in/patrice-morgan-ongoly-de-goma-b12717205", "_blank", "resizeable");
  });

  document.getElementById("download-resume-button-container").addEventListener("click", function(){
    window.open("../media/doc/resuma-long.pdf", "_blank", "resizeable");
  });
}

function attachWWWLoginButtonUIEvents(){
  attachMemberLinkButtonUIEvents();

  document.getElementById("member-icon-container").addEventListener("click", function(){
    document.getElementById("login-button-container").style.display = "block";
    document.getElementById("login-button-container").style.opacity = 1.0;

    document.getElementById("hide-login-button-container").style.display = "block";
    document.getElementById("hide-login-button-container").style.opacity = 1.0;
  });

  document.getElementById("hide-login-button-container").addEventListener("click", function(){

    document.getElementById("login-button-container").style.opacity = 0;
    document.getElementById("hide-login-button-container").style.opacity = 0;

    setTimeout(function(){
      document.getElementById("login-button-container").style.display = "none";
      document.getElementById("login-button-container").style.backgroundImage = "none";
      document.getElementById("login-button-container").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      document.getElementById("hide-login-button-container").style.display = "none";
    }, 255);
  });

  document.getElementById("login-button-container").addEventListener("click", function(){
    document.getElementById("login-button-container").style.backgroundColor = "black";

    setTimeout(function(){
      document.getElementById("login-button-container").style.fontSize = "28px";
      document.getElementById("login-button-container").value = "tap your cARd";
      document.getElementById("login-button-container").style.backgroundImage = "url(../media/img/biz-card-slow-loop.gif)";
    }, 1500);
  });
}
