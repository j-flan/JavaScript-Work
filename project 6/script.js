/* Jeff flanegan
 * 2019-9-30
 * script.js
 * Hands on 6-3
 */
"use strict";

var formValidity = true;
//validate required fields
function validateRequired(){
    var inputElements = document.querySelectorAll("#contactinfo input");
    var errorDiv = document.getElementById("errorText");
    var elementCount = inputElements.length;
    var requiredValidity = true;
    var currentElement;
    try{
        //validate all input elements in fieldset
        for(var i = 0; i < elementCount; i++){
            currentElement = inputElements[i];
            if (currentElement.value === ""){
                currentElement.style.background = "rgb(255,233,233)";
                requiredValidity = false;
            }else{
                currentElement.style.background = "white";
            }
        }
        if(requiredValidity === false){
            throw "Please complete all fields";
            formValidity = false;
        }
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
    catch(msg){
        errorDiv.style.display ="block";
        errorDiv.innerHTML = msg;       
    }
}
//valudate number of fields
function validateNumbers(){
    var numberInputs = document.querySelectorAll("#contactInfo input[type=number]");
    var elementCount = numberInputs.length;
    var numErrorDiv = document.getElementById("numErrorText");
    var numbersValidity = true;
    var currentElement;
    try{
        for (var i = 0; i < elementCount; i++){
            currentElement = numberInputs[i];
            if(isNaN(currentElement.value) || currentElement.value === ""){
                currentElement.style.background = "rgb(255,233,233)";
                numbersValidity = false;
            }
            else{
                currentElement.style.background = "white";
            }
        }
        if(numbersValidity === false){
            throw "zip and SSN need to be numbers";
        }
        numErrorDiv.style.display = "none";
        numErrorDiv.innerHTML = "";
    }
    catch(msg){
        numErrorDiv.style.display = "block";
        numErrorDiv.innerHTML = msg;
        formValidity = false;
    }
}
//advance cursor focus
function advanceSsn(){
    var ssnFields = document.getElementsByClassName("ssn");
    var currentField = document.activeElement;
    if (currentField.value.length === currentField.maxLength){
        if(currentField === ssnFields[0]){
            ssnFields[1].focus();
        }
        if(currentField === ssnFields[1]){
            ssnFields[2].focus();
        }
        if(currentField === ssnFields[2]){
            document.getElementById("submitBtn").focus();
        }
    }
}
//validate Form
function validateForm(evt){
    if(evt.preventDefault){
        evt.preventDefault();
    }
    else{
        evt.returnValue = false;
    }
    formValidity = true;
    validateRequired();
    validateNumbers();
    if(formValidity === true){
        document.getElementsByTagName("form")[0].submit();
    }
}
//create event listeners
function createEventListeners(){
    var form = document.getElementsByTagName("form")[0];
    if(form.addEventListener){
        form.addEventListener("submit", validateForm, false);
    }
    else if(form.attachEvent){
        form.attachEvent("onsubmit", validateForm);
    }
    var ssnFields = document.getElementsByClassName("ssn");
    for (var i = 0; i < ssnFields.length; i++){
        if (ssnFields[i].addEventListener){
            ssnFields[i].addEventListener("input", advanceSsn, false);
        }
        else if (ssnFields[i].attachEvent){
            ssnFields[i].attachEvent("oninput", advanceSsn);
        }
    }
}
//run setup functions after page loads
if(window.addEventListener){
    window.addEventListener("load",createEventListeners, false);   
}
else if(window.attachEvent){
    window.attachEvent("onload", createEventListeners);
}