/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *    Variables and functions
 *    Author: Richard Taylor
 *    Date:   6/18/2018

 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";

/* populate img element and create event listener */
function closeWin()  {
    window.close();
  }
  function createEventListener() {
    var closeWindowDiv = document.getElementsByTagName("p") [0];
    if (closeWindowDiv.addEventListener) {
      closeWindowDiv.addEventListener("click", closeWin, false);
    }else if (closeWindowDiv.attachEvent) {
      closeWindowDiv.attachEvent("onclick", closeWin)
    }
  }
  
  function pageSetup() {
    document.getElementsByTagName("img")[0].src = figFilename;
    createEventListener();
  }
/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;