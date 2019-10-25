/*
 * Jeff Flanegan
 * Hands-on-project 7-5
 * 2019-10-18
 */

"use strict";

var delivInfo = { };
var foodInfo = {};
var delivSummary = document.getElementById("deliverTo");
var foodSummary = document.getElementById("order"); 


function processDeliveryInfo() {
    var prop;

    delivInfo.name = document.getElementById("nameinput").value;
    delivInfo.addr = document.getElementById("addrinput").value;
    delivInfo.city = document.getElementById("cityinput").value;
    delivInfo.email = document.getElementById("emailinput").value;
    delivInfo.phone = document.getElementById("phoneinput").value;

    for(prop in delivInfo) {
        delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
    }
}
function processFood(){
    var prop;
    var custOpt = document.getElementsByName("crust");
    var toppings = 0;
    var toppingBoxes = document.getElementsByName("toppings");
    var instr = document.getElementById("instructions");
    
    if (custOpt[0].checked){
        foodInfo.crust = custOpt[0].value;
    }
    else{
        foodInfo.crust = custOpt[1].value;
    }
    foodInfo.size = document.getElementById("size").value;
    for (var i = 0; i < toppingBoxes.length; i++){
        if (toppingBoxes[i].checked){
            toppings++;
            foodInfo["topping" + toppings] = toppingBoxes[i].value;
        }
         if (!(instr.value === "")) {
            foodInfo.instructions = instr.value;
        }
    }
    foodSummary.innerHTML += "<p><span>Crust</span>: " + foodInfo.crust + "</p>";
    foodSummary.innerHTML += "<p><span>Size</span>: " + foodInfo.size + "</p>";
    foodSummary.innerHTML += "<p><span>Topping(s)</span>: " + "</p>";
    foodSummary.innerHTML += "<ul>";
    for (var i = 1; i < 6; i++) {
        if (foodInfo["topping" + i]) {
            foodSummary.innerHTML += "<li>" + foodInfo["topping" + i] + "</li>";
        }
    }
    foodSummary.innerHTML += "</ul>";
    foodSummary.innerHTML += "<p><span>Instructions</span>: " + foodInfo.instructions;
    document.getElementById("order").style.display = "block";
}
function previewOrder() {
    processDeliveryInfo();
    processFood();
    document.querySelector("section").style.display = "block";
    document.getElementById("deliverTo").style.display = "block";
}

function createEventListener() {
    var previewButton = document.getElementById("previewBtn");
    if(previewButton.addEventListener) {
       previewButton.addEventListener("click", previewOrder, false);
    } else if (previewButton.attachEvent) {
       previewButton.attachEvent("onclick", previewOrder);
    }
 }

if (window.addEventListener) {
    window.addEventListener("load", createEventListener, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListener);
}
