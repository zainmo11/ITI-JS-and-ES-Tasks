

function validateName(name) {
    const namePattern = /^[A-Za-z]+$/;
    return namePattern.test(name);
}

function validatePhoneNumber(phone) {
    return phone.length === 8 && /^\d+$/.test(phone);
}


function validateMobileNumber(mobile) {
    return /^01[012]\d{8}$/.test(mobile);
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

const today = new Date().toDateString();

let name, phoneNumber, mobileNumber, email;
do {
    name = prompt("Enter your name (letters only):");
    if (!validateName(name)) {
        alert("Please enter a valid name (letters only).");
    }
} while (!validateName(name));

do {
    phoneNumber = prompt("Enter your telephone number (8 digits):");
    if (!validatePhoneNumber(phoneNumber)) {
        alert("Please enter a valid telephone number (8 digits).");
    }
} while (!validatePhoneNumber(phoneNumber));

do {
    mobileNumber = prompt("Enter your mobile number (starts with 010, 011, or 012 and 11 digits long):");
    if (!validateMobileNumber(mobileNumber)) {
        alert("Please enter a valid mobile number (starts with 010, 011, or 012 and 11 digits long).");
    }
} while (!validateMobileNumber(mobileNumber));

do {
    email = prompt("Enter your email address (e.g., abc@xyz.com):");
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
    }
} while (!validateEmail(email));

let color;
do {
    color = prompt("Choose a color for the text (red, green, or blue):").toLowerCase();
    if (color !== 'red' && color !== 'green' && color !== 'blue') {
        alert("Please choose a valid color (red, green, or blue).");
    }
} while (color !== 'red' && color !== 'green' && color !== 'blue');


document.getElementById("output").innerHTML = `
            <p style="color: ${color};">
                Welcome dear guest <span style="color: black">${name}</span><br>
                your telephone number is <span style="color: black">${phoneNumber}</span> <br>
                your mobile number is <span style="color: black">${mobileNumber}</span><br>
                your email address is <span style="color: black">${email}</span><br>
                <br>today is <span style="color: black">${today}</span> 
            </p>
        `;