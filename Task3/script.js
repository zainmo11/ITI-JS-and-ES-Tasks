// display prompt
let word = prompt("enter a message");

// take value from propmt and make heriechial header tags
for (let i = 1; i <= 6; i++) {
    document.write(`<h${i}>${word}${i}</h${i}>`);
}