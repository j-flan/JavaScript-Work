/*  JavaScript 6th Edition
    Chapter 10
    Hands-on Project 10-4

    Author: Jeff Flanegan
    Date:   2019-11-7

    Filename: script.js
*/

"use strict";
var waitForUser;
function geoTest(){
    waitForUser = {timeout: 10000}
    navigator.geolocation.getCurrentPosition(createMap,fail, waitForUser);
}
function createMap(position){
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var mapOptions = {
        center: new google.maps.LatLng(lat,lng),
        zoom:10
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    //beiging - lat 39.903050, long 116.388904
    //paris - lat 48.845945, long 2.339833
    //Rio - lat -22.909871, long -43.173964
}
function fail(){
    document.getElementById("map").innerHTML = "Unable to access your current location"
}