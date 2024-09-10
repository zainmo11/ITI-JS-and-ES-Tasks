

let values = [];
for (let i = 0; i < 3; i++) {
        values.push(parseFloat(prompt(`Enter value ${i + 1}:`)));
}

let sum = values.reduce((a, b) => a + b, 0);
let multiplication = values.reduce((a, b) => a * b, 1);
let division = values.slice(1).reduce((a, b) => a / b, values[0]);

document.getElementById('output').innerHTML = `
            <p>Sum of the 3 values (${values[0]} + ${values[1]} + ${values[2]}) = ${sum}</p>
            <p>Multiplication of the 3 values (${values[0]} * ${values[1]} * ${values[2]}) = ${multiplication}</p>
            <p>Division of the 3 values (${values[0]} / ${values[1]} / ${values[2]}) = ${division.toFixed(2)}</p>
        `;
