const log = (() => {
    const logDiv1 = document.querySelector("#log-1");
    const logDiv2 = document.querySelector("#log-2");

    function message(string, n) {
        if (n === 1) {
            reset();
            logDiv1.textContent = string;
        }
        else if (n === 2) logDiv2.textContent = string;
    }

    function reset() {
        logDiv1.textContent = "...";
        logDiv2.textContent = "...";
    }

    return { message, reset };
})()

export { log }