const blocker = (() => {
  const blockBoard = document.querySelector("#block-board");
  const blockScreen = document.querySelector("#block-screen");
  const blockRandomize = document.querySelector("#block-randomize");

  const blocks = [blockBoard, blockScreen, blockRandomize];

  function activate(string) {
    let element = null;
    if (string === "board") element = blockBoard;
    else if (string === "screen") element = blockScreen;
    else if (string === "randomize") element = blockRandomize;
    element.classList.remove("hidden");
  }

  function deactivate(string) {
    let element = null;
    if (string === "board") element = blockBoard;
    else if (string === "screen") element = blockScreen;
    else if (string === "randomize") element = blockRandomize;
    element.classList.add("hidden");
  }

  function reset() {
    blocks.forEach((block) => {
      block.classList.add("hidden");
    });
  }

  return { activate, deactivate, reset };
})();

export { blocker };
