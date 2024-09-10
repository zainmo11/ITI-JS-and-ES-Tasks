
function openTypingWindow() {
    let typingWindow = window.open("", "TypingWindow", "width=300,height=200");
    let message = "Typing message...";
    let displayMessage = "";
    let index = 0;

    const type = () => {
        if (index < message.length) {
            displayMessage += message[index];
            typingWindow.document.body.innerHTML = "<h1>" + displayMessage + "</h1>";
            index++;
            setTimeout(type, 100);
        } else {
            setTimeout(() => typingWindow.close(), 2000);
        }
    };

    type();
}
