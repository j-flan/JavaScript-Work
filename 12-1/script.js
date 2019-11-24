/*
Jeff Flanegan
CWB 205
Homework 12
script.js
2019-11-20
*/
function display(event){
    $(event.currentTarget).next().fadeIn("slow");
}
$("h3").click(display);