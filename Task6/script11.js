function openAdWindow() {
    // Create the child window with specified dimensions and features
    var adWindow = window.open("", "adWindow", "width=300,height=400,scrollbars=yes");

    // Set the content of the child window
    adWindow.document.write(`
        <h1>Ad Content</h1>
        <p>${"Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ".repeat(20)}</p>
    `);

    function StepScroll() {
        var currentScroll = adWindow.scrollY;
        var maxScroll = adWindow.document.body.scrollHeight - adWindow.innerHeight;

        if (currentScroll < maxScroll ) {
            //console.log(maxScroll)
            adWindow.scrollBy(0, 10);
            //console.log(currentScroll)
        } else {
            adWindow.close();
            clearInterval(scrollInterval);
        }
    }

    var scrollInterval = setInterval(StepScroll, 30);
}
