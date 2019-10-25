/*
Jeff Flanegan
8-5
2019-10-24
 */

 "use strict"
var list = [];
function generateList(){
    var listItems = document.getElementsByTagName("li");
    for(var i = listItems.length -1; i>= 0; i--){
        document.getElementsByTagName("ol")[0].removeChild(listItems[i]);
    }
    for(var i = 0; i < list.length; i++){
        var newItem = "<span class='first'>first</span>" + "<span class='last'>last</span>" + list[i];
        var newListItem = document.createElement("li");
        newListItem.innerHTML = newItem;
        document.getElementsByTagName("ol")[0].appendChild(newListItem);
        var firstButtons = document.querySelectorAll(".first");
        var lastFirstButton = firstButtons[firstButtons.length - 1];
        var lastButtons = document.querySelectorAll(".last");
        var lastLastButton = lastButtons[lastButtons.length - 1];
        lastFirstButton.addEventListener("click", moveToTop, false);
        lastLastButton.addEventListener("click", moveToBottom, false);
    }
}
function addItem(){
    var newItem = document.getElementById("newItem");
    list.push(newItem.value);
    newItem.focus();
    newItem.value = "";
    generateList();
}
function moveToTop(evt){
    var callerElement = evt.target;
    var parentItem = callerElement.parentNode;
    for (var i = 0; i < list.length; i++){
        if (parentItem.innerHTML.search(list[i]) !== -1){
            var itemToMove = list.splice(i,1);
            list.unshift(itemToMove);
        }
    }
    generateList();
}
function moveToBottom(evt){
    var callerElement = evt.target;
    var parentItem = callerElement.parentNode;
    for (var i = 0; i < list.length; i++){
        if (parentItem.innerHTML.search(list[i]) !== -1){
            var itemToMove = list.splice(i,1);
            list.push(itemToMove);
        }
    }
    generateList();
}
function listener(){
    var button = document.getElementById("button");
    button.addEventListener("click", addItem, false);
}
window.addEventListener("load",listener,false);