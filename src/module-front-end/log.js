const log = (() => {
    const logDiv = document.querySelector("#log");

    function message(string) {
        const span = document.createElement("span");
        span.textContent = string;
        logDiv.append(span);
        logDiv.scrollTop = logDiv.scrollHeight;
    }

    function reset() {
        while (logDiv.children.length > 0) logDiv.removeChild(logDiv.lastChild);
    }

    return { message, reset };
})()

export { log }