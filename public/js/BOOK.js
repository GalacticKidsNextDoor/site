/*
*
* BOOK.js
* version 0.0.0.1
* by Patrice-Morgan de Goma
*
* implementation of an omnichannel book OBJECT-SUBJECT that can be integrated
* in immersive experiences; will be first released through
* THE LITTLE FREE DIGITAL LIBRARY on the Public Augmented Reality Kinectome
*
*/

class Book{
  constructor(bookSource){
    this.text = loadTextFromSourceProvided(bookSource);
  }
  loadTextFromSourceProvided(source){
    let materialOrigin = source;
    console.log(materialOrigin);
  }
}
