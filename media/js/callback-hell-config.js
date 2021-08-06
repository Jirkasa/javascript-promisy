const codeWithConsoleConfig = [
    {
        elementId: "Example-Alert",
        consoleElement: document.getElementById("Example-Alert__Console"),
        func: function() {
            let text = "&gt; první<br>";
            this.consoleElement.innerHTML = text + "&gt;";

            setTimeout(() => { alert("zavřením tohoto okna bude moci JavaScript pokračovat ve vykonávání kódu") }, 50);

            text += "&gt; druhý<br>";
            setTimeout(() => {
                this.consoleElement.innerHTML = text + "&gt;";
            }, 100);
        }
    },
    {
        elementId: "Example-SetTimeout",
        consoleElement: document.getElementById("Example-SetTimeout__Console"),
        func: function() {
            let text = "&gt; první<br>";
            this.consoleElement.innerHTML = text + "&gt;";

            setTimeout(() => {
                text += "&gt; třetí<br>";
                this.consoleElement.innerHTML = text + "&gt;";
            }, 1000);

            text += "&gt; druhý<br>";
            this.consoleElement.innerHTML = text + "&gt;";
        }
    },
    {
        elementId: "Example-Callback-Hell",
        consoleElement: document.getElementById("Example-Callback-Hell__Console"),
        func: function() {
            setTimeout(() => {
                let text = "&gt; první<br>";
                this.consoleElement.innerHTML = text + "&gt;";
                setTimeout(() => {
                    text += "&gt; druhý<br>";
                    this.consoleElement.innerHTML = text + "&gt;";
                    setTimeout(() => {
                        text += "&gt; třetí<br>";
                        this.consoleElement.innerHTML = text + "&gt;";
                    }, 1000);
                }, 1000);
            }, 1000);
        }
    }
];