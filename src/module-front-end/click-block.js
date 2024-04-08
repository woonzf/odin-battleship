const clickBlock = (() => {
    const clickBlock1 = document.querySelector("#click-block-1");
    const clickBlock2 = document.querySelector("#click-block-2");

    function remove() {
        clickBlock1.classList.add("hidden");
        clickBlock2.classList.add("hidden");
    }

    return { remove };
})()

export { clickBlock };