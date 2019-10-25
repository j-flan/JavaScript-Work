/*
Jeff Flanegan
8-3
2019-10-24
 */

"use strict"

function selectCardType(){
    var cardNumValue = document.getElementById("ccNum").value;
    var visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
    var mc = /^5[1-5][0-9]{14}$/;
    var discover = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
    var amex = /^3[47][0-9]{13}$/;

    if(visa.test(cardNumValue)){
        document.getElementById("visa").checked = "checked";
    }else if(mc.test(cardNumValue)){
        document.getElementById("mc").checked = "checked";
    }else if(discover.test(cardNumValue)){
        document.getElementById("discover").checked = "checked";
    }else if(amex.test(cardNumValue)){
        document.getElementById("amex").checked = "checked";
    }
}
function listeners(){
    var cardNum = document.getElementById("ccNum");
    cardNum.addEventListener("change",selectCardType,false);
}
window.addEventListener("load", listeners,false);