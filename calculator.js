const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector('#button4');
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const button7 = document.querySelector('#button7');
const button8 = document.querySelector("#button8");
const button9 = document.querySelector("#button9");
const button0 = document.querySelector('#button0');
const buttonPlus = document.querySelector("#buttonPlus");
const buttonMinus = document.querySelector("#buttonMinus");
const buttonDiv = document.querySelector("#buttonDiv");
const buttonMult = document.querySelector("#buttonMult");
const result = document.querySelector("#result");
const buttonClear = document.querySelector("#clear");
const equal = document.querySelector("#buttonEqual");

let currentNumber = "";
let previousNumber = "";
let operation = null;
result.innerText = "0";

function updateDisplay() {
    result.innerText = currentNumber || previousNumber || "0";
}

function updateNumber(number) {
    currentNumber = currentNumber + number;
    updateDisplay();
}

function updateOperation(op) {
    if (previousNumber === "") {
        // Store the current number and operation
        previousNumber = currentNumber;
        currentNumber = "";
    } else if (currentNumber !== "") {
        // Perform calculation if both numbers are available
        previousNumber = calcul(operation).toString();
        currentNumber = "";
    }
    operation = op;
    updateDisplay();
}

function calcul(op) {
    switch (op) {
        case "+":
            return parseFloat(previousNumber) + parseFloat(currentNumber);
        case "-":
            return parseFloat(previousNumber) - parseFloat(currentNumber);
        case "*":
            return parseFloat(previousNumber) * parseFloat(currentNumber);
        case "/":
            return currentNumber === "0" ? "Error" : parseFloat(previousNumber) / parseFloat(currentNumber);
        default:
            return parseFloat(currentNumber);
    }
}

function clear() {
    currentNumber = "";
    previousNumber = "";
    operation = null;
    updateDisplay();
}

// Button event listeners
button0.onclick = () => updateNumber(0);
button1.onclick = () => updateNumber(1);
button2.onclick = () => updateNumber(2);
button3.onclick = () => updateNumber(3);
button4.onclick = () => updateNumber(4);
button5.onclick = () => updateNumber(5);
button6.onclick = () => updateNumber(6);
button7.onclick = () => updateNumber(7);
button8.onclick = () => updateNumber(8);
button9.onclick = () => updateNumber(9);

buttonClear.onclick = () => clear();
buttonDiv.onclick = () => updateOperation("/");
buttonPlus.onclick = () => updateOperation("+");
buttonMinus.onclick = () => updateOperation("-");
buttonMult.onclick = () => updateOperation("*");
equal.onclick = () => updateOperation("=");



