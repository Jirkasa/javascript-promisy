const codeWithConsoleConfig = [
    {
        elementId: "Example-Async-Function",
        consoleElement: document.getElementById("Example-Async-Function__Console"),
        func: function() {
            let soucet = async (cislo1, cislo2) => {
                return cislo1 + cislo2;
            }

            soucet(2, 1)
            .then((vysledek) => {
                this.consoleElement.innerHTML = "&gt; výsledek: " + vysledek + "<br>&gt;";
            });
        }
    },
    {
        elementId: "Example-Async-Function-Throw-Error",
        consoleElement: document.getElementById("Example-Async-Function-Throw-Error__Console"),
        func: function() {
            let soucet = async (cislo1, cislo2) => {
                if (typeof cislo1 !== "number" || typeof cislo2 !== "number") {
                    throw "nejedná se o číslo";
                }
                return cislo1 + cislo2;
            }

            soucet("dva", 1)
            .then((vysledek) => {
                this.consoleElement.innerHTML = "&gt; výsledek: " + vysledek + "<br>&gt;";
            })
            .catch((err) => {
                this.consoleElement.innerHTML = "&gt; " + err + "<br>&gt;";
            });
        }
    },
    {
        elementId: "Example-Await",
        consoleElement: document.getElementById("Example-Await__Console"),
        func: function() {
            let pockejChvili = () => {
                return new Promise((resolve, reject) => {
                    setTimeout(resolve, 1000);
                });
            }

            let postupneVypis = async () => {
                this.consoleElement.innerHTML = "&gt; první<br>&gt;";
                await pockejChvili(); // funkce pockejChvili vrací Promise, počkáme až se splní
                this.consoleElement.innerHTML = "&gt; první<br>&gt; druhý<br>&gt;";
                await pockejChvili();
                this.consoleElement.innerHTML = "&gt; první<br>&gt; druhý<br>&gt; třetí<br>&gt;";
            }

            postupneVypis();
        }
    },
    {
        elementId: "Example-Await-Reject",
        consoleElement: document.getElementById("Example-Await-Reject__Console"),
        func: function() {
            let text = "&gt;";
            let vypisSoucetAChviliPockej = (cislo1, cislo2) => {
                return new Promise((resolve, reject) => {
                    if (typeof cislo1 !== "number" || typeof cislo2 !== "number") {
                        return reject("nejedná se o číslo");
                    }
                    text += " " + (cislo1 + cislo2) + "<br>&gt;";
                    this.consoleElement.innerHTML = text;
                    setTimeout(resolve, 1000);
                });
            }

            let postupneVypis = async () => {
                await vypisSoucetAChviliPockej(2, 2);
                await vypisSoucetAChviliPockej("jedna", 2);
                await vypisSoucetAChviliPockej(3, 2);
            }

            postupneVypis()
            .catch((err) => {
                text += " " + err + "<br>&gt;";
                this.consoleElement.innerHTML = text;
            });
        }
    },
    {
        elementId: "Example-Await-Reject-Try-Catch",
        consoleElement: document.getElementById("Example-Await-Reject-Try-Catch__Console"),
        func: function() {
            let text = "&gt;";
            let vypisSoucetAChviliPockej = (cislo1, cislo2) => {
                return new Promise((resolve, reject) => {
                    if (typeof cislo1 !== "number" || typeof cislo2 !== "number") {
                        return reject("nejedná se o číslo");
                    }
                    text += " " + (cislo1 + cislo2) + "<br>&gt;";
                    this.consoleElement.innerHTML = text;
                    setTimeout(resolve, 1000);
                });
            }

            let postupneVypis = async () => {
                await vypisSoucetAChviliPockej(2, 2);
                try {
                    await vypisSoucetAChviliPockej("jedna", 2);
                } catch (err) {
                    text += " " + err + "<br>&gt;";
                    this.consoleElement.innerHTML = text;
                }
                await vypisSoucetAChviliPockej(3, 2);
            }

            postupneVypis();
        }
    },
    {
        elementId: "Example-Await-Get-Value",
        consoleElement: document.getElementById("Example-Await-Get-Value__Console"),
        func: function() {
            let pockejSekunduAVratSoucet = (cislo1, cislo2) => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(cislo1 + cislo2);
                    }, 1000);
                });
            }

            let postupneVypis = async () => {
                let soucet1 = await pockejSekunduAVratSoucet(2, 1);
                this.consoleElement.innerHTML = "&gt; " + soucet1 + "<br>&gt;";
                let soucet2 = await pockejSekunduAVratSoucet(3, 4);
                this.consoleElement.innerHTML = "&gt; " + soucet1 + "<br>&gt; " + soucet2 + "<br>&gt;";
                let soucet3 = await pockejSekunduAVratSoucet(5, 6);
                this.consoleElement.innerHTML = "&gt; " + soucet1 + "<br>&gt; " + soucet2 + "<br>&gt; " + soucet3 + "<br>&gt;";
            }

            postupneVypis();
        }
    }
];