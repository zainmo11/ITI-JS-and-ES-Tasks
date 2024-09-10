let display = document.getElementById('display');
let input = document.getElementById('input');
let currentOperation = '';
let operationInProgress = false;

function appendNumber(number) {
    if (operationInProgress) {
        input.value = '';
        operationInProgress = false;
    }
    else
    {
        display.innerHTML = '';
    }
    input.value += number;
}

function setOperation(operation) {
    if (input.value === '') return;
    display.innerHTML += ` ${input.value} ${operation}`;
    currentOperation += input.value + operation;
    input.value = '';
    operationInProgress = true;
}

function calculateResult() {
    if (input.value === '') return;
    currentOperation += input.value;
    try {
        let result = eval(currentOperation);
        if (currentOperation.includes('/0')) {
            throw new Error('Division by zero');
        }
        display.innerHTML = result;
        currentOperation = '';
    } catch (error) {
        display.innerHTML = 'Error';
        currentOperation = '';
    }
    input.value = '';

}

function clearInput() {
    input.value = '';
    display.innerHTML = '';
    currentOperation = '';
}

function isNumberKey(evt) {
    let charCode = evt.which ? evt.which : evt.keyCode;

    // Excludes non-printable control characters (character codes 0 to 31).
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}