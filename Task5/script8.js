

function calculateCircleArea() {
    let radius = parseFloat(prompt("What is the value of your circle's radius?"));
    if (!isNaN(radius)) {
        let area = Math.PI * Math.pow(radius, 2);
        alert(`Total area of the circle is ${area}`);
    } else {
        alert("Please enter a valid number for the radius.");
    }
}

function calculateSquareRoot() {
    let value = parseFloat(prompt("What is the value you want to calculate its square root?"));
    if (!isNaN(value)) {
        let squareRoot = Math.sqrt(value);
        alert(`Square root of ${value} is ${squareRoot}`);
    } else {
        alert("Please enter a valid number for the square root calculation.");
    }
}

function calculateCosine() {
    let angle = parseFloat(prompt("What is the angle you want to calculate its cosine value?"));
    if (!isNaN(angle)) {
        let radians = angle * (Math.PI / 180);
        let cosValue = Math.cos(radians);
        alert(`Cos(${angle}°) is ${cosValue.toFixed(4)}`);
        document.getElementById('cosineResult').innerText = `Cos(${angle}°) is ${cosValue.toFixed(4)}`;
    } else {
        alert("Please enter a valid number for the angle.");
    }
}

function executeAllTasks() {
    calculateCircleArea();
    calculateSquareRoot();
    calculateCosine();
}