// start second counter
function startTicker() {
    var timer = setInterval(logTime, 1000);
}

// handle displaying updated current time string
function logTime() {
    let date = new Date();
    console.log(date.toLocaleTimeString());
}

startTicker();