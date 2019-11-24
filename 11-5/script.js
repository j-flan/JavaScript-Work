/*  JavaScript 6th Edition
    Chapter 11
    Hands-on Project 11-5

    Author: Jeff Flanegan
    Date:   2019-11-12

    Filename: script.js
*/

"use strict";
var httpRequest = false;
var countrySel ="";
function getRequestObject(){
    try{
        httpRequest = new XMLHttpRequest();
    }
    catch(requestError){
        document.getElementById("zipset").style.visibility = "visible";
        document.getElementById("csset").style.visibility = "visible";
        var germany = document.getElementById("germany");
        var us = document.getElementById("us");
        var zip = document.getElementById("zip").value;
        germany.removeEventListener("click",checkButtons,false);
        us.removeEventListener("click",checkButtons,false);
        zip.removeEventListener("keyup",checkInput,false);
        return false;
    }
    return httpRequest;
}
function checkButtons(){
    var germany = document.getElementById("germany");
    var us = document.getElementById("us");
    if(germany.checked || us.checked){
        document.getElementById("zipset").style.visibility = "visible";
        if(germany.checked){
            countrySel = "de";
        }else{
            countrySel = "us";
        }
    }
}
function checkInput(){
    var zip = document.getElementById("zip").value;
    if(zip.length === 5){
        getLocation();
    }else{
        document.getElementById("city").value = "";
        document.getElementById("state").value = "";
    }
}
function getLocation(){
    var zip = document.getElementById("zip").value;
    if (!httpRequest){
        httpRequest = getRequestObject();
    }
    httpRequest.abort();
    httpRequest.open("get", "http://api.zippopotam.us/" + countrySel + "/" + zip, true);
    httpRequest.send();
    httpRequest.onreadystatechange = displayData;
}
function displayData(){
    if (httpRequest.readyState === 4 && httpRequest.status === 200){
        var resultData = JSON.parse(httpRequest.responseText);
        var city = document.getElementById("city");
        var state = document.getElementById("state");
        city.value = resultData.places[0]["place name"];
        state.value = resultData.places[0]["state abbreviation"];
        document.getElementById("zip").blur();
        document.getElementById("csset").style.visibility = "visible";
    }
}
var germany = document.getElementById("germany");
var us = document.getElementById("us");
germany.addEventListener("click",checkButtons, false);
us.addEventListener("click", checkButtons,false);

var zip = document.getElementById("zip");
zip.addEventListener("keyup",checkInput,false);
