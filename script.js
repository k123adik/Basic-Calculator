let currentDisplay = '';
let currentOperator = '';
let firstOperand = '';
let resultDisplay = document.getElementById('result');

function appendToDisplay(value) {
    if (currentDisplay === '0' || currentDisplay === 'Error') {
        currentDisplay = '';
    }
    currentDisplay += value;
    resultDisplay.textContent = currentDisplay;
}

function clearDisplay() {
    currentDisplay = '0';
    resultDisplay.textContent = currentDisplay;
    firstOperand = '';
    currentOperator = '';
}

function operate(operator) {
    if (currentDisplay === 'Error') return;

    if (firstOperand === '') {
        firstOperand = currentDisplay;
        currentOperator = operator;
        currentDisplay = '';
    } else {
        calculate();
        firstOperand = currentDisplay;
        currentOperator = operator;
        currentDisplay = '';
    }
}

function calculate() {
    if (currentDisplay === 'Error') return;

    if (firstOperand === '' || currentOperator === '' || currentDisplay === '') {
        return;
    }

    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(currentDisplay);

    switch (currentOperator) {
        case '+':
            currentDisplay = (num1 + num2).toString();
            break;
        case '-':
            currentDisplay = (num1 - num2).toString();
            break;
        case '*':
            currentDisplay = (num1 * num2).toString();
            break;
        case '/':
            if (num2 === 0) {
                currentDisplay = 'Error';
            } else {
                currentDisplay = (num1 / num2).toString();
            }
            break;
    }

    firstOperand = '';
    currentOperator = '';
    resultDisplay.textContent = currentDisplay;
}

clearDisplay();
