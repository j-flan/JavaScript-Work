/*    JavaScript 6th Edition
 *    Chapter 12
 *    Hands-on Project 12-3

 *    Author: Jeff Flanegan
 *    Date:   2019-11-20

 *    Filename: script.js
 */

"use strict";

// validate form 
function validateForm(event) {
   /*if (event.preventDefault) {
      event.preventDefault(); // prevent form from submitting
   } else {
      event.returnValue = false; // prevent form from submitting in IE8
   }*/
   event.preventDefault();
   var formValidity = true; // reset value for revalidation
   var inputElements = document.querySelectorAll("#contactinfo input");
   //var errorDiv = document.getElementById("errorText");
   var elementCount = inputElements.length;
   try {
      for (var i = 0; i < elementCount; i++) { 
         // validate all input elements in fieldset
         if (inputElements[i].value === "") {
            inputElements[i].style.background = "rgb(255,233,233)";
            formValidity = false;
         } else {
            inputElements[i].style.background = "";
         }
      }
      if (formValidity === false) { 
         throw "Please complete all fields.";
      } 
     // errorDiv.style.display = "none";
     // errorDiv.innerHTML = "";
     $("#errorText").hide();
     $("#errorText").html("")
   }
   catch(msg) {
     // errorDiv.style.display = "block";
     // errorDiv.innerHTML = msg; 
      $("#errorText").show();
      $("#errorText").html(msg);
   }

   if (formValidity === true) {
      //document.getElementsByTagName("form")[0].submit();
      $("form").submit();
   }
} 

// create event listeners  
/*var button = document.getElementById("submitBtn");
if (button.addEventListener) {
   button.addEventListener("click", validateForm, false);
} else if (button.attachEvent) {
   button.attachEvent("onclick", validateForm);
}*/
$("#submitBtn").click(ValidateForm);
