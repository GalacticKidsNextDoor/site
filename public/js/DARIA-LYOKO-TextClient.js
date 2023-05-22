//0.0.8.6
//Patrice-Morgan O. de Goma

var storage, database;

var config = {
    apiKey: "AIzaSyAzqXRxpmI9K7UMTsiuFU6b54SkSjNojkU",
    authDomain: "lyoko-blockchain.firebaseapp.com",
    databaseURL: "https://lyoko-blockchain-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "lyoko-blockchain",
    storageBucket: "lyoko-blockchain.appspot.com",
    messagingSenderId: "820284895954",
    appId: "1:820284895954:web:e69039cadfd002bc15b30b"
};

firebase.initializeApp(config);
storage = firebase.storage();
database = firebase.database();


const dbPrimaryFunctions = database.ref().child("primary");
const dbSecondaryFunctions = database.ref().child("secondary");

dbPrimaryFunctions.once("value").then(function(snap){
    //DefenseAugmentedRealityIntelligentAssistant.primary = snap.val();
});

dbSecondaryFunctions.once("value").then(function(snap){
    DefenseAugmentedRealityIntelligentAssistant.secondary = snap.val();
});

function processWT(meaningInput, currentTerm){
  return TextClientSenses.processWrittenText(meaningInput, currentTerm);
}

function processLFT(lastTerm){
  TextClientSenses.longTermMemory.lastFoundTerm = lastTerm;
  return true;
}

function CollectionOfAllHumanLanguages(pointerBoolean){
  var TheCollectionOfAllHumanLanguages = {
    "FRANÇAIS" : {
      "esprit": [
        {
          type: "nom masculin",
          use: "improper",
          pastParticiple: null,
          presentParticiple: null,
          origines: [
            {
              def: "du latin spiritus, souffle",
              src: "Larousse"
            }
          ],
          definitions: [
            {
              synonymes: [
                "moi",
                "pensée"
              ],
              contraires: [
                "chair",
                "matière"
              ],
              main: "Partie incorporelle de l'être humain, par opposition au corps, à la matière.",
              example: "Synonymes : moi - pensée; Contraires : chair - matière"
            },
            {
              main: "Être immatériel, revenant, fantôme, qui est supposé se manifester sur terre.",
              example: "Château hanté par les esprits. Synonymes : fantôme",
              synonymes: [
                "fantôme"
              ],
              contraires: [

              ]
            },
            {
              main: "Principe de la vie psychique, intellectuelle ; capacités intellectuelles, intelligence",
              example: "Avoir l'esprit pénétrant. Synonymes : compréhension - intellect - jugement - raison",
              synonymes: [
                "compréhension",
                "intellect",
                "jugement",
                "raison"
              ],
              contraires: []
            },
          ]
        }
      ]
    },
    "ENGLISH": {
      "find" : [
        {
          type: "verb",
          use: "with object",
          pastParticiple: "found",
          presentParticiple: "find·ing",
          definitions: [
            {
              main: "to come upon by chance; meet with:",
              example: "He found a nickel in the street."
            },
            {
              main: "to locate, attain, or obtain by search or effort:",
              example: "to find an apartment; to find happiness."
            },
            {
              main: "to locate or recover (something lost or misplaced):",
              example: "I can't find my blue socks."
            },
            {
              main: "to discover or perceive after consideration:",
              example: "to find something to be true."
            },
            {
              main: "to gain or regain the use of:",
              example: "His anger finally helped him find his tongue."
            },
            {
              main: "to ascertain by study or calculation:",
              example: "to find the sum of several numbers."
            },
            {
              main: "to feel or perceive:",
              example: "He finds it so."
            },
            {
              main: "to become aware of, or discover (oneself), as being in a condition or location:",
              example: "After a long illness, he found himself well again. She woke to find herself at home."
            },
            {
              main: "to discover:",
              example: "Columbus found America in 1492."
            },
            {
              main: "Law.",
              sub: [
                {
                  def: "to determine after judicial inquiry:",
                  example: "to find a person guilty."
                },
                {
                  def: "to pronounce as an official act (an indictment, verdict, or judgment).",
                  example: ""
                }
              ],
              example: ""
            },
            {
              main: "to provide or furnish:",
              examples: "Bring blankets and we'll find the rest of the equipment for the trip."
            },
            {
              main: "[South Midland and Southern U.S. (of farm animals)] to give birth to:",
              examples: "The brown cow found a calf yesterday."
            }
          ]
        },
        {
          type: "verb",
          use: "without object",
          pastParticiple: "found",
          presentParticiple: "find·ing",
          definitions: [
            {
              main: "to determine an issue after judicial inquiry:",
              example: "The jury found for the plaintiff."
            },
            {
              main: "[British Hunting.] to come upon game.]",
              example: ""
            }
          ]
        },
        {
          type: "noun",
          use: "improper",
          pastParticiple: null,
          presentParticiple: null,
          definitions: [
            {
              main: "an act of finding or discovering.",
              example: ""
            },
            {
              main: "something found; a discovery, especially a valuable or gratifying one:",
              example: "Our cook was a great find."
            }
          ]
        }
      ],
      "open": [
        {
          type: "adjective",
          use: "prefix",
          pastParticiple: "opened",
          presentParticiple: "open·ing",
          definitions: [
            {
              main: "not closed or barred at the time, as a doorway by a door, a window by a sash, or a gateway by a gate:",
              example: "to leave the windows open at night."
            },
            {
              main: "(of a door, gate, window sash, or the like) set so as to permit passage through the opening it can be used to close.",
              example: "to leave the windows open at night."
            },
            {
              main: "(of a door, gate, window sash, or the like) set so as to permit passage through the opening it can be used to close.",
              example: "an open portico."
            }
          ]
        }
      ],
      "look": [
        {
          type: "verb",
          use: "without object",
          pastParticiple: "looked",
          presentParticiple: "look·ing",
          definitions: [
            {
              main: "to turn one's eyes toward something or in some direction in order to see:",
              example: "He looked toward the western horizon and saw the returning planes."
            },
            {
              main: "to glance or gaze in a manner specified:",
              example: "to look questioningly at a person."
            },
            {
              main: "to use one's sight or vision in seeking, searching, examining, watching, etc.:",
              example: "to look through the papers."
            }
          ]
        }
      ],
      "an": [
        {
          type: "article",
          use: "indefinite",
          pastParticiple: null,
          presentParticiple: null,
          origines: [
            {
              def: "before 950; Middle English; Old English ānone in a weakened sense",
              src: "Dictionary.com"
            }
          ],
          definitions: [
            {
              main: "the form of a before an initial vowel sound (an arch; an honor) and sometimes, especially in British English, before an initial unstressed syllable beginning with a silent or weakly pronounced h:",
              example: "an historian."
            }
          ]
        },
        {
          type: "noun",
          use: "proper",
          pastParticiple: null,
          presentParticiple: null,
          origines: [
            {
              def: "the Sumerian god of heaven",
              src: "Dictionary.com"
            }
          ],
          definitions: [
            {
              main: "the Sumerian god of heaven: the counterpart of the Akkadian Anu.",
              example: ""
            }
          ]
        },
        {
          type: "symbol",
          use: "chemistry",
          pastParticiple: null,
          presentParticiple: null,
          origines: [
            {
              def: "actinon",
              src: "Dictionary.com"
            }
          ],
          definitions: [
            {
              main: "Actinon",
              example: ""
            }
          ]
        }
      ],
      "photo": [
        {
          type: "noun",
          use: "improper",
          pastParticiple: null,
          presentParticiple: null,
          origines: [
            {
              def: "First recorded in 1855–60; shortened form of photograph",
              src: "Dictionary.com"
            }
          ],
          definitions: [
            {
              main: "#photograph",
              example: ""
            },
            {
              main: "(Informal) photo finish",
              example: ""
            }
          ]
        }
      ],
      "photograph": [
        {
          type: "noun",
          use: "improper",
          pastParticiple: null,
          presentParticiple: null,
          origines: [
            {
              def: "First recorded in 1855–60; shortened form of photograph",
              src: "Dictionary.com"
            }
          ],
          definitions: [
            {
              main: "a picture produced by photography.",
              example: ""
            }
          ]
        },
        {
          type: "verb",
          use: "used with object",
          pastParticiple: "photo·graphed",
          presentParticiple: "photo·graph",
          origines: [
            {
              def: "First recorded in 1855–60; shortened form of photograph",
              src: "Dictionary.com"
            }
          ],
          definitions: [
            {
              main: "to take a photograph of.",
              example: ""
            }
          ]
        },
        {
          type: "verb",
          use: "used without object",
          pastParticiple: "photo·graphed",
          presentParticiple: "photo·graph",
          origines: [
            {
              def: "First recorded in 1855–60; shortened form of photograph",
              src: "Dictionary.com"
            }
          ],
          definitions: [
            {
              main: "to practice #photography",
              example: ""
            },
            {
              main: "to be photographed or be suitable for being photographed in some specified way:",
              example: "The children photograph well."
            }
          ]
        }
      ],
      "album": [
        {
          type: "noun",
          use: "improper",
          pastParticiple: null,
          presentParticiple: null,
          origines: [
            {
              def: "First recorded in 1610–20; 1955–60 for def. 2; from Latin: neuter singular of albus “white,” i.e., a blank (tablet) painted white for writing on",
              src: "Dictionary.com"
            }
          ],
          definitions: [
            {
              main: "",
              sub: [
                {
                  def: "a bound or loose-leaf book consisting of blank pages, pockets, envelopes, etc., for storing or displaying photographs, stamps, or the like, or for collecting autographs.",
                  example: ""
                },
                {
                  def: "a digital collection of photographs, stored on a computer or mobile device for viewing, displaying, or sharing.",
                  example: ""
                }
              ],
              example: "",
              synonymes: [
                "collection",
                "scrapbook",
                "anthology",
                "depository"
              ]
            },
            {
              main: "",
              sub: [
                {
                  def: "a record or set of records containing several musical selections, a complete play or opera, etc.:",
                  example: "Her album of folk songs will be out next month."
                },
                {
                  def: "the package or container for such a record or records:",
                  example: "The album has a pocket for each record."
                },
                {
                  def: "a collection of audio recordings released together as a collected work:",
                  example: "The digital release of their debut album sold more copies than expected."
                }
              ],
              example: "",
              synonymes: [
                "collection",
                "index",
                "portfolio",
                "registry",
                "register"
              ],
            },
            {
              main: "a printed book containing an anthology of writings, reproductions of photographs or artwork, musical compositions, etc.",
              example: "",
              synonymes: [
                "anthology",
                "memory book",
                "miscellany",
                "memento"
              ],
            }
          ]
        }
      ],
      "music": [
        {
          type: "noun",
          use: "improper",
          pastParticiple: null,
          presentParticiple: null,
          origines: [
            {
              def: "1200–50; Middle English musike<Latin mūsica<Greek mousikḕ (téchnē) (the art) of the Muse, feminine of mousikós, equivalent to Moûs(a) Muse + -ikos-ic",
              src: "Dictionary.com"
            }
          ],
          definitions: [
            {
              main: "an art of sound in time that expresses ideas and emotions in significant forms through the elements of rhythm, melody, harmony, and color.",
              example: ""
            },
            {
              main: "the tones or sounds employed, occurring in single line (melody) or multiple lines (harmony), and sounded or to be sounded by one or more voices or instruments, or both.",
              example: ""
            },
            {
              main: "musical work or compositions for singing or playing.",
              example: ""
            },
            {
              main: "the written or printed score of a musical composition.",
              example: ""
            },
            {
              main: "such scores collectively.",
              example: ""
            },
            {
              main: "any sweet, pleasing, or harmonious sounds or sound:",
              example: "the music of the waves."
            },
            {
              main: "appreciation of or responsiveness to musical sounds or harmonies:",
              example: "Music was is in his very soul."
            },
            {
              main: "Fox Hunting. the cry of the hounds.",
              example: ""
            },
            {
              main: "(Idiomatic) face the music, to meet, take, or accept the consequences of one's mistakes, actions, etc.:",
              example: "He's squandered his money and now he's got to face the music."
            }
          ]
        }
      ]
    },
    "MBOCHI": {
      "esprit": [
        {
          type: "nom masculin",
          use: "improper",
          pastParticiple: null,
          presentParticiple: null,
          definitions: [
            {
              origine: "du latin spiritus, souffle",
              synonymes: [
                "moi",
                "pensée"
              ],
              contraires: [
                "chair",
                "matière"
              ],
              main: "Partie incorporelle de l'être humain, par opposition au corps, à la matière.",
              example: "Synonymes : moi - pensée; Contraires : chair - matière"
            },
            {
              origine: "du latin spiritus, souffle",
              main: "Être immatériel, revenant, fantôme, qui est supposé se manifester sur terre.",
              example: "Château hanté par les esprits. Synonymes : fantôme",
              synonymes: [
                "fantôme"
              ],
              contraires: [

              ]
            },
            {
              origine: "du latin spiritus, souffle",
              main: "Principe de la vie psychique, intellectuelle ; capacités intellectuelles, intelligence",
              example: "Avoir l'esprit pénétrant. Synonymes : compréhension - intellect - jugement - raison",
              synonymes: [
                "compréhension",
                "intellect",
                "jugement",
                "raison"
              ],
              contraires: []
            },
          ]
        }
      ]
    },
    "LINGALA": {
      "esprit": [
        {
          type: "nom masculin",
          use: "improper",
          pastParticiple: null,
          presentParticiple: null,
          definitions: [
            {
              origine: "du latin spiritus, souffle",
              synonymes: [
                "moi",
                "pensée"
              ],
              contraires: [
                "chair",
                "matière"
              ],
              main: "Partie incorporelle de l'être humain, par opposition au corps, à la matière.",
              example: "Synonymes : moi - pensée; Contraires : chair - matière"
            },
            {
              origine: "du latin spiritus, souffle",
              main: "Être immatériel, revenant, fantôme, qui est supposé se manifester sur terre.",
              example: "Château hanté par les esprits. Synonymes : fantôme",
              synonymes: [
                "fantôme"
              ],
              contraires: [

              ]
            },
            {
              origine: "du latin spiritus, souffle",
              main: "Principe de la vie psychique, intellectuelle ; capacités intellectuelles, intelligence",
              example: "Avoir l'esprit pénétrant. Synonymes : compréhension - intellect - jugement - raison",
              synonymes: [
                "compréhension",
                "intellect",
                "jugement",
                "raison"
              ],
              contraires: []
            },
          ]
        }
      ]
    },
    "LARI": {
      "esprit": [
        {
          type: "nom masculin",
          use: "improper",
          pastParticiple: null,
          presentParticiple: null,
          definitions: [
            {
              origine: "du latin spiritus, souffle",
              synonymes: [
                "moi",
                "pensée"
              ],
              contraires: [
                "chair",
                "matière"
              ],
              main: "Partie incorporelle de l'être humain, par opposition au corps, à la matière.",
              example: "Synonymes : moi - pensée; Contraires : chair - matière"
            },
            {
              origine: "du latin spiritus, souffle",
              main: "Être immatériel, revenant, fantôme, qui est supposé se manifester sur terre.",
              example: "Château hanté par les esprits. Synonymes : fantôme",
              synonymes: [
                "fantôme"
              ],
              contraires: [

              ]
            },
            {
              origine: "du latin spiritus, souffle",
              main: "Principe de la vie psychique, intellectuelle ; capacités intellectuelles, intelligence",
              example: "Avoir l'esprit pénétrant. Synonymes : compréhension - intellect - jugement - raison",
              synonymes: [
                "compréhension",
                "intellect",
                "jugement",
                "raison"
              ],
              contraires: []
            },
          ]
        }
      ]
    }
  };

  if(pointerBoolean){
    return "CollectionOfAllHumanLanguages";
  }
  else{
    return TheCollectionOfAllHumanLanguages;
  }
}

class Dictionary{
  constructor(HumanOrMachineLanguageID){
    this.superSet = CollectionOfAllHumanLanguages(true);
    this.terms = CollectionOfAllHumanLanguages(false)[HumanOrMachineLanguageID];
    console.log("Human Machine Dictionary \n version 0.0.0.1 \n by Patrice-Morgan");
    console.log(`Loading Language ID: ${HumanOrMachineLanguageID}`);
  }
  displayTerms(){
    console.log(this.terms);
    return true;
  }
  containsTerm(termQuery){
    let lookForThisTerm = termQuery;
    return this.terms.hasOwnProperty(lookForThisTerm);
  }
  define(termQuery){
    let defineThisTerm = termQuery;
    let primaryDefintion = null;

    if(this.containsTerm(defineThisTerm)){
      primaryDefintion = this.terms[defineThisTerm][0];
      return primaryDefintion;
    }
    return false;
  }
}

class Lexicon{
  constructor(HumanOrMachineLanguageBoolean, HumanOrMachineLanguageID){
    this.isHuman = HumanOrMachineLanguageBoolean;
    this.isMachine = !HumanOrMachineLanguageBoolean;
    this.preset = new Dictionary(HumanOrMachineLanguageID);
  }
  tokenize(textPrompt){
    let prompt = textPrompt;
    let loopBreaker = 0;
    let leadingSpaceIndex = prompt.indexOf(" ");
    let tokenizeArray = [];

    while(leadingSpaceIndex>0){//TOKENIZATION
      if(loopBreaker>2000)break;
      //console.log(leadingSpaceIndex);
      tokenizeArray.push(prompt.substring(0, leadingSpaceIndex));
      prompt = prompt.substring(leadingSpaceIndex+1);
      leadingSpaceIndex = prompt.indexOf(" ");
      loopBreaker++;
    }
    tokenizeArray.push(prompt);

    console.log("tokenized~~~~~~~~~");
    console.log(tokenizeArray);
    //console.log("~~~~~~~~~~~~~~~");
    return tokenizeArray;
  }
  parseText(textPrompt){
    let prompt = textPrompt;
    let parseResultArray = [];
    var parseArray;

    parseArray = this.tokenize(prompt);

    for(var parseCount = 0; parseCount<parseArray.length; parseCount++){
      let dict = this.preset;
      let lookFor = parseArray[parseCount];
      let definitionValue = dict.define(lookFor);
      if(definitionValue){
        console.log(definitionValue);
        parseResultArray.push(definitionValue);
      }
      else{
        console.log(`${lookFor} returns ${definitionValue}`);
      }
    }

    return parseResultArray;
  }
}

class Senses{
  //let self = this;
  constructor(Vision, HearingBalance, Olfaction, Taste, Touch){
    this.Vision = Vision;
    this.HearingBalance = HearingBalance;
    this.Olfaction = Olfaction;
    this.Taste = Taste;
    this.Touch = Touch;
    this.sessionReader = null;
    this.UI = {
      mode: "text-mode-button-container"
    };
    this.literate = false,
    this.workingMemory = {
      stream: [],
      active: false
    }
    this.longTermMemory = {
      literature: null,
      lastFoundTerm: null,
      "lyoko-blockchain": [
        "the-weeknd",
        "the-weeknd-trilogy",
        "the-weeknd-house-of-balloons",
        "the-weeknd-trilogy-house-of-balloons",
        "the-weeknd-thursday",
        "the-weeknd-trilogy-thursday",
        "the-weeknd-echoes-of-silence",
        "the-weeknd-trilogy-echoes-of-silence"
      ],
      LBTargets: {                                  //INPUTS
        "the-weeknd": "the-weeknd",
        "the-weeknd-trilogy": "the-weeknd",         //
        "the-weeknd-house-of-balloons": "the-weeknd-trilogy-house-of-balloons",     //"the-weeknd-house-of-balloons",
        "the-weeknd-trilogy-house-of-balloons": "the-weeknd-trilogy-house-of-balloons",     //"the-weeknd-trilogy-house-of-balloons",
        "the-weeknd-thursday": "the-weeknd-trilogy-thursday",              //"the-weeknd-trilogy-thursday",
        "the-weeknd-trilogy-thursday": "the-weeknd-trilogy-thursday",              //"the-weeknd-trilogy-thursday",
        "the-weeknd-echoes-of-silence": "the-weeknd-trilogy-echoes-of-silence",             //"the-weeknd--echoes-of-silence",
        "the-weeknd-trilogy-echoes-of-silence": "the-weeknd-trilogy-echoes-of-silence"      //"the-weeknd-trilogy-echoes-of-silence",
      }
    }
  }
  processWrittenText(prompt, phrase){
    let textMeaningInput = prompt;
    let urlMatchCheckString = textMeaningInput.replace(/\s/g,'-');
    if(phrase==urlMatchCheckString){
      console.log("[ L ] I found an exact match.\n[ L ] ", phrase)
      return true;
    };
    return false;
  }
  toggleSenses(senseNum){
    switch(senseNum){
      case 0:
        if(this.Vision.on){
          //stopMobileVideo();
          this.Vision.on = false;
        }
        else{
          //startMobileVideo();
          this.Vision.on = true;
        }
        break;
      case 1:
        if(this.HearingBalance.on){
          this.HearingBalance.on = false;
        }
        else{
          this.HearingBalance.on = true;
        }
        break;
      case 2:
        if(this.Olfaction.on){
          this.Olfaction.on = false;
        }
        else{
          this.Olfaction.on = true;
        }
        break;
      case 3:
        if(this.Taste.on){
          this.Taste.on = false;
        }
        else{
          this.Taste.on = true;
        }
        break;
      case 4:
        if(this.Touch.on){
          this.Touch.on = false;
        }
        else{
          this.Touch.on = true;
        }
        break;
      default:
        console.log("no option available");
        break;
      }
  }
  Cognition(prompt, action){
    let meaningInput = prompt;
    let prefix, overHere, parsePrompt, finalResult;
    let terminalOutputContainer = document.getElementById("lyoko-terminal-container");
    let memberHadTheLastWord = null;
    let topLevelThis = this;

    if(action){
      if(action=="read"){
        //console.log(meaningInput);
        let additive = document.createElement("p");
        additive.textContent = "[ @PaMo ] "+meaningInput;
        terminalOutputContainer.append(additive);
        memberHadTheLastWord = true;

        if(meaningInput.length>10){// avg length of word in English is 4.7 characters, search terms fo interest are 5 characters or less (four for the owrd, one for the space after it)
          prefix = meaningInput.substring(0,4);
          prefix = prefix.toLowerCase();
          console.log("prefix ",prefix);
          if(prefix==="find"){
            let foundThis = document.createElement("p");
            foundThis.classList.add("lyoko-ai-reply-container");
            foundThis.textContent = "[ LYK ] OK.";
            if(memberHadTheLastWord){
              foundThis.classList.add("member-input-spacer");
              memberHadTheLastWord = false;
            }
            terminalOutputContainer.append(foundThis);


            overHere = this.Cognition(meaningInput.substring(5), "searchFor");
            if(overHere){
              let matchingNote = document.createElement("p");
              matchingNote.classList.add("lyoko-ai-reply-container");
              matchingNote.textContent = "[ LYK ] I found an exact match!";
              if(memberHadTheLastWord){
                matchingNote.classList.add("member-input-spacer");
                memberHadTheLastWord = false;
              }
              terminalOutputContainer.append(matchingNote);
            }
            else{
              let notFound = document.createElement("p");
              notFound.classList.add("lyoko-ai-reply-container");
              notFound.textContent = "[ LYK ] ...I don't understand.";

              if(memberHadTheLastWord){
                notFound.classList.add("member-input-spacer");
                memberHadTheLastWord = false;
              }
              terminalOutputContainer.append(notFound);

              // could not find relevant phrase so begin PARSING
              parsePrompt = meaningInput.toLowerCase();
              finalResult = this.sessionReader.parseText(parsePrompt);
            }
          }
          else if(prefix==="open"){
            if(meaningInput.charAt(5)=="-"){
              if(meaningInput.charAt(6)=="w"&&meaningInput.charAt(7)=="3"){
                overHere = this.Cognition(meaningInput.substring(9), "searchFor");
              }
            }
            else{
              overHere = this.Cognition(meaningInput.substring(5), "searchFor");
              console.log("assuming w3 open by default");
              //window.open(`https://houseofven.us/pARk/${}`. "_blank");
            }
            console.log("over here: ", overHere);
            if(overHere){
              let targetOu = this.longTermMemory.LBTargets[this.longTermMemory.lastFoundTerm];
              console.log(`opening ${targetOu}`);
              let targetURL = `https://houseofven.us/pARk/${targetOu}`;
              let foundIt = document.createElement("p");
              foundIt.classList.add("lyoko-ai-reply-container");
              foundIt.textContent = `[ LYK ] Opening ${targetURL}`;
              if(memberHadTheLastWord){
                foundIt.classList.add("member-input-spacer");
                memberHadTheLastWord = false;
              }
              terminalOutputContainer.append(foundIt);

              setTimeout(function(){  //   PROPOSED FIXED FOR IOS SAFARI ISSUE: create an invisible button whose link is dynamically set to the appropriate target, click the button when ready, let the new window open
                window.open(targetURL, "LYOKORequest", "width=720,height=720,top=0,left=50,scrollbars=no");

                let foundItFinal = document.createElement("p");
                foundItFinal.classList.add("lyoko-ai-reply-container");
                foundItFinal.textContent = "[ LYK ] w3 portal opened successfully ;)";
                if(memberHadTheLastWord){
                  foundItFinal.classList.add("member-input-spacer");
                  memberHadTheLastWord = false;
                }
                terminalOutputContainer.append(foundItFinal);
              }, 5000);

              /*let notFound = document.createElement("p");
              notFound.classList.add("lyoko-ai-reply-container");
              notFound.textContent = "[ L ] ...I don't understand.";
              terminalOutputContainer.append(notFound);*/
            }
            else{
              //  concepts relevant to the query could not be found within the blockchain headers
              //  parse the query
              if(this.sessionReader==null){ //  check to make sure the sessionReader is not null
                this.sessionReader = new Lexicon(true, "ENGLISH");  //  if it is create a new Lexicon to use to process natural human language during this session
                parsePrompt = meaningInput.toLowerCase();
                finalResult = this.sessionReader.parseText(parsePrompt);
                console.log("~~~~~~~~~~~~~~~~~~~~~~~");
                console.log(finalResult);
              }
              else{
                parsePrompt = meaningInput.toLowerCase();
                finalResult = this.sessionReader.parseText(parsePrompt);
                console.log("~~~~~~~~~~~~~~~~~~~~~~~");
                console.log(finalResult);
              }
            }
          }
          else if(prefix==="mani"){
            if(meaningInput.substring(0,8)=="manifest"){
              let remainder = this.Cognition(meaningInput.substring(9), "searchFor");//assuming there is a space between "manifest" and the next word
              if(remainder){

                let matchingNote = document.createElement("p");
                matchingNote.classList.add("lyoko-ai-reply-container");
                matchingNote.textContent = "[ LYK ] I found an exact match!";
                //  loading file contents into workspace or OPENING file like a traditional open command
                if(memberHadTheLastWord){
                  matchingNote.classList.add("member-input-spacer");
                  memberHadTheLastWord = false;
                }
                terminalOutputContainer.append(matchingNote);
              }
              else{
                parsePrompt = meaningInput.toLowerCase();//substring(9);
                //parsePrompt = parsePrompt.toLowerCase();
                let tokenArray = this.sessionReader.tokenize(parsePrompt);
                let maniResponse, reactionResponse, musicAlbumResponse, photoAlbumResponse, gallerySpaceResponse, healthProfileResponse;

                if(tokenArray[0]==="manifest"){//should be the case so this is redundant
                  if(tokenArray[1]=="a"||tokenArray[1]=="an"||tokenArray[1]=="the"){
                    //if an indefinite article is the first word after "manifest" then this is a command to generate something
                    maniResponse = document.createElement("p");
                    maniResponse.classList.add("lyoko-ai-reply-container");
                    maniResponse.textContent = "[ LYK ] You would like me to manifest "+tokenArray[1]+" "+tokenArray[2]+"...?";
                    //  loading file contents into workspace or OPENING file like a traditional open command

                    if(tokenArray[2]==="album"){
                      albumResponse = document.createElement("p");
                      albumResponse.classList.add("lyoko-ai-reply-container");
                      albumResponse.textContent = "[ LYK ] ...what songs should I include?";
                    }
                    else if((tokenArray[2]==="photo"||tokenArray[2]==="photograph")&&(tokenArray[3]==="album"||tokenArray[3]==="book"||tokenArray[3]==="gallery")||tokenArray[2]==="photobook"){
                      photoAlbumResponse = document.createElement("p");
                      photoAlbumResponse.classList.add("lyoko-ai-reply-container");
                      photoAlbumResponse.textContent = "[ LYK ] ...what images should I include?";
                    }
                  }
                  else if(tokenArray[1]==="our"||tokenArray[1]==="ours"||tokenArray[1]==="your"||tokenArray[1]==="yours"||tokenArray[1]==="his"||tokenArray[1]==="her"||tokenArray[1]==="hers"){
                    //if a pronoun is the first word after "manifest" then this is commanding Lyoko to do something related to its own system or something related to a human subject-object
                    let reactions = {
                      our: {
                        resp: function(){
                          let oResponse = document.createElement("p");
                          oResponse.classList.add("lyoko-ai-reply-container");
                          oResponse.textContent = "[ LYK ] How do I access your "+tokenArray[2]+"?";
                          return oResponse;
                        }
                      },
                      your: {
                        resp: function(){
                          let yResponse = document.createElement("p");
                          yResponse.classList.add("lyoko-ai-reply-container");
                          yResponse.textContent = "[ LYK ] I don't have any possessions to act on yet."
                          return yResponse;
                        }
                      },
                      yours: {
                        resp: function(){
                          let yResponse = document.createElement("p");
                          yResponse.classList.add("lyoko-ai-reply-container");
                          yResponse.textContent = "[ LYK ] I don't have any possessions to act on yet."
                          return yResponse;
                        }
                      },
                      her: {
                        resp: function(){
                          let nonResponse = document.createElement("p");
                          nonResponse.classList.add("lyoko-ai-reply-container");
                          nonResponse.textContent = "[ LYK ] I can't do that yet. Sorry :/"
                          return nonResponse;
                        }
                      },
                      his: {
                        resp: function(){
                          let nonResponse = document.createElement("p");
                          nonResponse.classList.add("lyoko-ai-reply-container");
                          nonResponse.textContent = "[ LYK ] I can't do that yet. Sorry :/"
                          return nonResponse;
                        }
                      },
                      hers: {
                        resp: function(){
                          let nonResponse = document.createElement("p");
                          nonResponse.classList.add("lyoko-ai-reply-container");
                          nonResponse.textContent = "[ LYK ] I can't do that yet. Sorry :/"
                          return nonResponse;
                        }
                      }
                    };

                    reactionResponse = reactions[tokenArray[1]].resp();

                  }

                  if(memberHadTheLastWord){
                    maniResponse.classList.add("member-input-spacer");
                    memberHadTheLastWord = false;
                  }

                  if(maniResponse)terminalOutputContainer.append(maniResponse);
                  if(reactionResponse)terminalOutputContainer.append(reactionResponse);
                  if(albumResponse)terminalOutputContainer.append(albumResponse);
                  if(photoAlbumResponse)terminalOutputContainer.append(photoAlbumResponse);
                }

                //if the remainder of the sentence is not an exact match
              }
            }
          }
          else{
            if(this.sessionReader==null){
              this.sessionReader = new Lexicon(true, "ENGLISH");
              parsePrompt = meaningInput.toLowerCase();
              finalResult = this.sessionReader.parseText(parsePrompt);
              console.log("~~~~~~~~~~~~~~~~~~~~~~~");
              console.log(finalResult);
            }
            else{
              console.log("use the sessionReader");
              parsePrompt = meaningInput.toLowerCase();
              finalResult = this.sessionReader.parseText(parsePrompt);
              console.log("~~~~~~~~~~~~~~~~~~~~~~~");
              console.log(finalResult);
            }
          }
        }
      }
      else if(action=="searchFor"){
        let isFound = false, wasFound = false, foundTerm = meaningInput;
        for(var i=0; i<this.longTermMemory["lyoko-blockchain"].length; i++){
          let currentTerm = this.longTermMemory["lyoko-blockchain"][i];
          (function(){
            isFound = topLevelThis.processWrittenText(meaningInput, currentTerm);
            //processWT(meaningInput, currentTerm);
            //console.log("match found? ",isFound);

            /*let additive = document.createElement("p");
            additive.textContent = "[L] "+meaningInput;*/
            if(isFound){
              wasFound = isFound;
              foundTerm = currentTerm;
              topLevelThis.longTermMemory.lastFoundTerm = foundTerm;
              //processLFT(foundTerm);
            }
          })();
        }
        return wasFound;
      }
    }
  }
};

var TextClientSenses;

document.addEventListener("DOMContentLoaded", function(){
    TextClientSenses = new Senses({name: "Vision", on: false}, {name: "Hearing/Balance", on: false}, {name: "Olfaction", on: false}, {name: "Taste", on: false}, {name: "Touch", on: false});

    document.getElementById("return-to-pangaea-map-button-container").addEventListener("click", function(){
        window.location.href = "./preview";
    });

    document.getElementById("return-to-experience-lobby-button-container").addEventListener("click", function(){
        //window.location.href = "./daria";
        //if(TextClientSenses.Vision.on){
          TextClientSenses.toggleSenses(0);
        //}
    });

    document.getElementById("text-mode-button-container").addEventListener("click", function(){
      if(TextClientSenses.literate){ //  if Text console reader is visible...
        document.getElementById("text-mode-input-container").style.opacity = 0; // ...conceal it
        //document.getElementById("text-mode-input-container").style.width = 0;
        document.getElementById("text-mode-input-container").classList.remove("elongated-input-container");
        setTimeout(function(){
          document.getElementById("text-mode-input-container").style.display = "none";
          TextClientSenses.literate = false;
        }, 505);
      }
      else{ //  ...else if Text console reader is not visible...
        document.getElementById("text-mode-input-container").style.display = "block"; // ...reveal it
        setTimeout(function(){
          document.getElementById("text-mode-input-container").style.opacity = 1.0;
          //document.getElementById("text-mode-input-container").style.width = "90%";
          document.getElementById("text-mode-input-container").classList.add("elongated-input-container");
          TextClientSenses.literate = true;
        }, 50);
      }
      // else if already off, change nothing and continue ...
    });

    document.getElementById("text-mode-input-container").addEventListener("keypress", function (e) {
      let currentPrompt = document.getElementById("text-mode-input-container").value;
      if (e.key === 'Enter') {
        // code for enter
        if(TextClientSenses.literate&&currentPrompt!=null&&currentPrompt!=""){
          TextClientSenses.Cognition(currentPrompt, "read");
          document.getElementById("text-mode-input-container").value = "";
        }
      }
    });
});
