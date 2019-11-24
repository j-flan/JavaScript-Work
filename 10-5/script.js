/*  JavaScript 6th Edition
    Chapter 10
    Hands-on Project 10-5

    Author: Jeff Flanegan
    Date:   2019-11-7

    Filename: script.js
*/

"use strict";
var waitForUser;
function setUpPage(){
    var buttons = document.querySelectorAll("#cities div");
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", createMap, false);
    }
}
function geoTest(){
    waitForUser = {timeout: 10000}
    navigator.geolocation.getCurrentPosition(createMap,fail, waitForUser);
}
function createMap(position){
    clearTimeout(waitForUser);
    if(position.coords){
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
    }else{
        var city = this.innerHTML
        if(city == "Beijing"){
            var lat = 39.903050; 
            var lng  = 116.388904;
        }else if (city == "Paris"){
            var lat = 48.845945; 
            var lng = 2.339833;
        }else if (city == "Rio de Janeiro"){
            var lat = -22.909871; 
            var lng = -43.173964;
        }
    }
    document.getElementById("caption").innerHTML = city;
    var mapOptions = {
        center: new google.maps.LatLng(lat,lng),
        zoom:10
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
function fail(){
    document.getElementById("map").innerHTML = "Unable to access your current location"
}
window.addEventListener("load", setUpPage, false);