const blocker = (() => {
    const clickBlock = document.querySelector("#click-block");

    function activateClickBlock() {
        clickBlock.classList.remove("hidden");
    }

    function deactivateClickBlock() {
        clickBlock.classList.add("hidden");
    }

    return { activateClickBlock, deactivateClickBlock };
})()

export { blocker };