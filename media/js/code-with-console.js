for (let config of codeWithConsoleConfig) {
    // setup play button
    let playBtn = document.getElementById(config.elementId).getElementsByClassName("code-with-console__play-btn")[0];
    playBtn.addEventListener("click", config.func.bind(config));
    // setup reset button
    let resetBtn = document.getElementById(config.elementId).getElementsByClassName("code-with-console__reset-btn")[0];
    resetBtn.addEventListener("click", () => {
        config.consoleElement.innerHTML = "&gt;";
    });
}