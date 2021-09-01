const screenOutput = document.getElementById('output');

let expression = screenOutput.innerHTML;

function clearscreen() {
    expression = "";
    screenOutput = expression;
}

function calculate() {
    let result = eval(expression);
    screenOutput.innerHTML = result;
}