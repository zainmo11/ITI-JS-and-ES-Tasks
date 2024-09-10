var sum = 0;
var num;

while (sum <= 100 && num !== 0) {
    num = prompt("Enter a number:");

    if (!isNaN(num)) {
        num = +num;

        if (num !== 0) {
            sum += num;
        }
    } else {
        alert("enter a valid number.");
    }
}

document.write("The sum of values is " + sum);