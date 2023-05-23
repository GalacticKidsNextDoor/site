/*
*
* SECURE LOGIN TO THE PARK
* ACCESS LYOKO FX AND IDE
* v. 0.0.9.0
* by Patrice-Morgan de Goma
*
*/
var storage, database, AlbumAuthor, AlbumAuthorNoSpaces, AlbumName, AlbumNameNoSpaces, PromisedPause, AlbumTrackList;
const config = {
  apiKey: "AIzaSyAzqXRxpmI9K7UMTsiuFU6b54SkSjNojkU",
  authDomain: "lyoko-blockchain.firebaseapp.com",
  databaseURL: "https://lyoko-blockchain-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lyoko-blockchain",
  storageBucket: "lyoko-blockchain.appspot.com",
  messagingSenderId: "820284895954",
  appId: "1:820284895954:web:e69039cadfd002bc15b30b"
};
var windowIsLoaded = false;

firebase.initializeApp(config);

firebase.auth().signInWithEmailAndPassword("traderjoesdeliverydc@gmail.com", "L3R0!duL0@ng0")
  .then((userCredential) => {
    // Signed in
    console.log("signed in");
    var user = userCredential.user;
    //console.log(user);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

storage = firebase.storage();
database = firebase.database();
