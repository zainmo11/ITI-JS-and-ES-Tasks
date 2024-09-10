// Function to count
function countCharacter(str, char, caseSensitive) {
    if (!caseSensitive) {
        str = str.toLowerCase();
        char = char.toLowerCase();
    }
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }

    return count;
}

let inputString, inputChar, caseSensitive;

do{
    inputString = prompt("Please enter a string:");
    if(inputString.trim() === ""){
        alert("The string cannot be empty. Please enter a valid string.");
    }
}while(inputString.trim() === "")


do {
    inputChar = prompt("Enter the character you want to count:");
    if (inputChar.length !== 1 || inputChar.trim() !== "") {
        alert("Please enter only one character for counting.");
    }
} while (inputChar.length !== 1 || inputChar.trim() === "");

caseSensitive = confirm("Do you want to consider case sensitivity? (Click 'OK' for Yes, 'Cancel' for No)");
let result = countCharacter(inputString, inputChar, caseSensitive);
alert(`The character '${inputChar}' appears ${result} times in the string.`);
