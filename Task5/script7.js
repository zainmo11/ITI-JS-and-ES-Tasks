
let values = [];
for (let i = 0; i < 5; i++) {
    values.push(parseFloat(prompt(`Enter value ${i + 1}:`)));
}


let ascending = [...values].sort((a, b) => a - b);
let descending = [...values].sort((a, b) => b - a);


document.getElementById('output').innerHTML = `
            <p>You've entered the values: ${values.join(", ")}</p>
            <p>Your values after being sorted descending: ${descending.join(", ")}</p>
            <p>Your values after being sorted ascending: ${ascending.join(", ")}</p>
        `;