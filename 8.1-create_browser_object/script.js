/*
Jeff Flanegan
Hands-on 8-2
2019-10-24
*/

"use strict"

//var newAccountArray=[];
var newAccountObject = {};
var newAccountSubmission;

function createID(){
    var fname = document.getElementById("fnameinput");
    var lname = document.getElementById("lnameinput");
    var zip = document.getElementById("zipinput");
    var account = document.getElementById("accountidbox");

    var fields = document.getElementsByTagName("input");

    var acctid;
    var firstInit;
    var lastInit;

    if (fname.value !== "" || lname.value !== "" || zip.value !== ""){
        firstInit = fname.value.charAt(0).toUpperCase();
        lastInit = lname.value.charAt(0).toUpperCase();
        acctid = firstInit + lastInit + zip.value;
        account.value = acctid;
        //newAccountArray=[];
        newAccountObject = {};
        for(var i = 0; i < fields.length -1; ++i){
            //newAccountArray.push(fields[i].value);
            newAccountObject[fields[i].name] = fields[i].value;
        }
        newAccountSubmission = JSON.stringify(newAccountObject);
    }
}
//submit button refreshes page, so I put stringify in createID
/*function createString(){
    newAccountSubmission = JSON.stringify(newAccountObject);
}*/
function createEventListeners(){
    var fname = document.getElementById("fnameinput");
    var lname = document.getElementById("lnameinput");
    var zip = document.getElementById("zipinput");
    var button = document.getElementById("submitBtn");

    fname.addEventListener("change", createID, false);
    lname.addEventListener("change", createID,false);
    zip.addEventListener("change",createID,false);
    //button.addEventListener("click", createString,false);
}

window.addEventListener("load",createEventListeners,false);