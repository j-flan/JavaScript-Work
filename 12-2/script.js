/*
Jeff Flanegan
CWB 205
Homework 12
script.js
2019-11-20
*/
function convert(){
    var lb = $("#pValue").val();
    var kg = Math.round(lb/2.2);
    $("#kValue").html(kg);
}
$("#convertButton").click(convert);
$("#pValue").val("");
$("#kValue").html("");