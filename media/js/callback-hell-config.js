const codeWithConsoleConfig = [
    {
        elementId: "Example-Alert",
        consoleElement: document.getElementById("Example-Alert__Console"),
        func: function() {
            console.log(this);
            let text = "&gt; první<br>";
            this.consoleElement.innerHTML = text + "&gt;";

            setTimeout(() => { alert("zavřením tohoto okna bude moci JavaScript pokračovat ve vykonávání kódu") }, 50);

            text += "&gt; druhý<br>";
            setTimeout(() => {
                this.consoleElement.innerHTML = text + "&gt;";
            }, 100);
        }
    }
];