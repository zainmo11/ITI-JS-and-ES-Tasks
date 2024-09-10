// Function to check if a string is a palindrome
function isPalindrome(str, caseSensitive) {
    if (!caseSensitive) {
        str = str.toLowerCase();
    }
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

let inputString;

do {
    inputString = prompt("Please enter a string to check if it's a palindrome:");
    if (inputString.trim() === "") {
        alert("The string cannot be empty. Please enter a valid string.");
    }
} while (inputString.trim() === "");


let caseSensitive = confirm("Do you want to consider case sensitivity? (Click 'OK' for Yes, 'Cancel' for No)");

let result = isPalindrome(inputString, caseSensitive);

if (result) {
    alert(`The string '${inputString}' is a palindrome.`);
} else {
    alert(`The string '${inputString}' is not a palindrome.`);
}
