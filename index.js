const screenOutput = document.getElementById('output');

let expression = screenOutput.innerHTML;

function clearscreen() {
    expression = "";
    screenOutput.innerHTML = expression;
}

function correctExpression(str) {
    let newstr = "";
    for(let i = 0; i < str.length; i++) {
        if(str[i] == "x") {
            newstr += "*";
        } else if(str[i] == "÷") {
            newstr += "/"
        } else {
            newstr += str[i]
        }
    }
    return newstr;
}

function calculate() {
    let correctedExpression = correctExpression(expression);
    let result = eval(correctExpression);
    screenOutput.innerHTML = result;
}