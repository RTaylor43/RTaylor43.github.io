/*
      JavaScript 6th Edition
      Chapter 12
      Hands-on Project 12-2

      Author: Richard Taylor
      Date:  7/23/2018 

      Filename: script.js
   */

   
   function convert() //converts pounds to kilograms
   {
       var lb = $("#pValue").val();
       var kg = Math.round(lb / 2.2);
       $("#kValue").html(kg);
   }
   $("#convertButton").click(convert); //event listener
   $("#pValue").val("");
   $("kValue").val("");