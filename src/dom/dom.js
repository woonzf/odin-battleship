import iconGitHub from '../icon/github-mark-white.png';

const dom = (() => {
    function init() {
        _initImg();
    }

    function _initImg() {
        const imgGitHub = document.querySelector("#icon-github");
        imgGitHub.src = iconGitHub;
    }

    return { init };
})()

export { dom };