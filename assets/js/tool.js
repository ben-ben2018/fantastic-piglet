function debounce(func, waitTime) {
    let timerID = null;
    return function (...args) {
        if (timerID) {
            clearTimeout(timerID);
        }
        timerID = setTimeout(function () {
            func(...args);
        }, waitTime)
    }
}

export {
    debounce
}