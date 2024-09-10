let flyingWindow;
let moving = true;

function openFlyingWindow() {
    flyingWindow = window.open("", "FlyingWindow", "width=200,height=100",resizeable=0,scrollbars=false);
    flyingWindow.document.write("<h1>I'm Flying</h1>");
    moveWindow();
}

function moveWindow() {
    let direction = 1;
    let position = 0;

    const move = () => {
        if (!moving) return;
        position += direction * 5;
        if (position <= 0 || position >= screen.availHeight - 100) {
            direction *= -1;
        }
        flyingWindow.moveTo(screen.availWidth / 2, position);
        setTimeout(move, 100);
    };

    move();
}

function stopFlyingWindow() {
    moving = false;
    flyingWindow.focus();
}