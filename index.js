"use strict";
var screenOutput = document.getElementById("output");
var expression = screenOutput.innerHTML;
var opButtons = document.querySelectorAll("button[data-op]");
var numButtons = document.querySelectorAll('button[data-num]');
opButtons.forEach(function (opButton) {
    var sign = opButton.getAttribute("data-op");
    opButton.addEventListener("click", function () {
        expression += sign;
        screenOutput.innerHTML = expression;
    });
});
numButtons.forEach(function (numButton) {
    var num = numButton.getAttribute('data-num');
    numButton.addEventListener('click', function () {
        expression += num;
        screenOutput.innerHTML = expression;
    });
});
function clearscreen() {
    expression = "";
    screenOutput.innerHTML = expression;
}
function correctExpression(str) {
    var newstr = "";
    if (str == "") {
        return "0";
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "x") {
            newstr += "*";
        }
        else if (str[i] == "÷") {
            newstr += "/";
        }
        else {
            newstr += str[i];
        }
    }
    return newstr;
}
function addDecimal() {
    expression += ".";
    screenOutput.innerHTML = expression;
}
function calculate() {
    var correctedExpression = correctExpression(expression);
    try {
        var result = eval(correctedExpression);
        screenOutput.innerHTML = result;
        expression = result;
    }
    catch (err) {
        if (err) {
            screenOutput.innerHTML = "Invalid input";
            expression = "";
        }
    }
}
