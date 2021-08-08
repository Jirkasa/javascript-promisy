const codeWithConsoleConfig = [
    {
        elementId: "Example-Create-Promise",
        consoleElement: document.getElementById("Example-Create-Promise__Console"),
        func: function() {
            let pujduBehat = new Promise((resolve, reject) => {
                let rand = Math.random();
                if (rand > 0.5) {
                    resolve();
                } else {
                    reject();
                }
            });
            pujduBehat.then(() => {
                this.consoleElement.innerHTML = "&gt; jdu běhat<br>&gt;";
            });
            pujduBehat.catch(() => {
                this.consoleElement.innerHTML = "&gt; nejdu běhat<br>&gt;";
            });
        }
    },
    {
        elementId: "Example-Arguments",
        consoleElement: document.getElementById("Example-Arguments__Console"),
        func: function() {
            let mujPromise = new Promise((resolve, reject) => {
                let rand = Math.random();
                if (rand > 0.5) {
                    resolve(rand);
                } else {
                    reject("něco se pokazilo");
                }
            });
            mujPromise.then((cislo) => {
                this.consoleElement.innerHTML = "&gt; Promise byl splněn, hodnota: " + cislo + "<br>&gt;";
            });
            mujPromise.catch((chyba) => {
                this.consoleElement.innerHTML = "&gt; Promise nebyl splněn: " + chyba + "<br>&gt;";
            });
        }
    },
    {
        elementId: "Example-Chain-Then-And-Catch",
        consoleElement: document.getElementById("Example-Chain-Then-And-Catch__Console"),
        func: function() {
            let pujduBehat = new Promise((resolve, reject) => {
                let rand = Math.random();
                if (rand > 0.5) {
                    resolve();
                } else {
                    reject();
                }
            });
            pujduBehat.then(() => {
                this.consoleElement.innerHTML = "&gt; jdu běhat<br>&gt;";
            })
            .catch(() => {
                this.consoleElement.innerHTML = "&gt; nejdu běhat<br>&gt;";
            });
        }
    },
    {
        elementId: "Example-Chain-Promises",
        consoleElement: document.getElementById("Example-Chain-Promises__Console"),
        func: function() {
            let pockejChvili = () => {
                return new Promise((resolve, reject) => {
                    let cas = 500 + (Math.random() * 1000);
                    setTimeout(() => { // funkce počká nějaký čas a potom splní Promise
                        resolve();
                    }, cas);
                });
            }

            let text = "&gt; první<br>";

            pockejChvili()
            .then(() => {
                this.consoleElement.innerHTML = text + "&gt;";
                return pockejChvili();
            })
            .then(() => {
                text += "&gt; druhý<br>";
                this.consoleElement.innerHTML = text + "&gt;";
                return pockejChvili();
            })
            .then(() => {
                text += "&gt; třetí<br>";
                this.consoleElement.innerHTML = text + "&gt;";
                return pockejChvili();
            })
            .catch(() => { // u tady toho příkladu bychom metodu catch ani nemuseli mít
                this.consoleElement.innerHTML = "&gt; chyba<br>&gt;";
            });
        }
    },
    {
        elementId: "Example-Then-Both-Arguments",
        consoleElement: document.getElementById("Example-Then-Both-Arguments__Console"),
        func: function() {
            let mujPromise = new Promise((resolve, reject) => {
                let rand = Math.random();
                if (rand > 0.5) {
                    resolve();
                } else {
                    reject();
                }
            });

            mujPromise.then(() => { // funkce, která se zavolá když se Promise splní
                this.consoleElement.innerHTML = "&gt; Promise splněn<br>&gt;";
            }, () => { // funkce, která se zavolá když se Promise nesplní
                this.consoleElement.innerHTML = "&gt; Promise nebyl splněn<br>&gt;";
            });
        }
    },
    {
        elementId: "Example-Catch",
        consoleElement: document.getElementById("Example-Catch__Console"),
        func: function() {
            let promiseResolved = false;
            let mujPromise = new Promise((resolve, reject) => {
                let rand = Math.random();
                if (rand > 0.5) {
                    resolve();
                    promiseResolved = true;
                } else {
                    reject();
                }
            });

            let text = "&gt; Promise nebyl splněn<br>";

            mujPromise
            .catch(() => { // metodu catch můžeme zavolat i před zavoláním metody then, to potom ale metoda catch vrací splněný Promise, takže ji voláme až na konci
                this.consoleElement.innerHTML = text + "&gt;";
            })
            .then(() => { // tato metoda then se týká jen Promisu vráceného funkcí catch
                // metoda catch vrací splněný Promise, takže se provede i tento kód (i když se třeba předaná funkce metody catch neprovede)
                if (promiseResolved) {
                    this.consoleElement.innerHTML = "&gt; Promise splněn<br>&gt;";
                } else {
                    text += "&gt; Promise splněn<br>";
                    this.consoleElement.innerHTML = text + "&gt;";
                }
            });
        }
    },
    {
        elementId: "Example-Finally",
        consoleElement: document.getElementById("Example-Finally__Console"),
        func: function() {
            let mujPromise = new Promise((resolve, reject) => {
                let rand = Math.random();
                if (rand > 0.5) {
                    resolve();
                } else {
                    reject();
                }
            });

            let text = "&gt; funkce předaná metodě finally se zavolá vždy<br>";

            mujPromise
            .then(() => {
                text = "&gt; Promise splněn<br>" + text;
            })
            .catch(() => {
                text = "&gt; Promise nebyl splněn<br>" + text;
            })
            .finally(() => {
                this.consoleElement.innerHTML = text + "&gt;";
            });
        }
    },
    {
        elementId: "Example-Method-All",
        consoleElement: document.getElementById("Example-Method-All__Console"),
        func: function() {
            let promise3Resolved = false;
            let promise1 = new Promise((resolve, reject) => {
                resolve(10);
            });
            let promise2 = new Promise((resolve, reject) => {
                setTimeout(resolve, 500, 20); // zavolá za půl sekundy funkci resolve s argumentem 20
            });
            let promise3 = new Promise((resolve, reject) => {
                let rand = Math.random();
                if (rand > 0.5) {
                    promise3Resolved = true;
                    resolve(30);
                    this.consoleElement.innerHTML = "&gt; promise3 se splnil<br>&gt;";
                } else {
                    reject();
                    this.consoleElement.innerHTML = "&gt; promise3 se nesplnil<br>&gt;";
                }
            });

            Promise.all([promise1, promise2, promise3])
            .then((hodnoty) => {
                if (promise3Resolved) {
                    this.consoleElement.innerHTML = "&gt; promise3 se splnil<br>&gt; všechny tři Promisy se splnily<br>&gt; hodnoty všech Promisů:<br>&gt; [" + hodnoty.toString().replaceAll(",", ", ") + "]<br>&gt;";
                } else {
                    this.consoleElement.innerHTML = "&gt; promise3 se nesplnil<br>&gt; všechny tři Promisy se splnily<br>&gt; hodnoty všech Promisů:<br>&gt; [" + hodnoty.toString().replaceAll(",", ", ") + "]<br>&gt;";
                }
            });
        }
    },
    {
        elementId: "Example-Method-Any",
        consoleElement: document.getElementById("Example-Method-Any__Console"),
        func: function() {
            let promise1Resolved = false;
            let promise1 = new Promise((resolve, reject) => {
                let rand = Math.random();
                if (rand > 0.5) {
                    promise1Resolved = true;
                    resolve(10);
                    this.consoleElement.innerHTML = "&gt; promise1 se splnil<br>&gt;";
                } else {
                    reject();
                    this.consoleElement.innerHTML = "&gt; promise1 se nesplnil<br>&gt;";
                }
            });
            let promise2 = new Promise((resolve, reject) => {
                setTimeout(resolve, 500, 20); // zavolá za půl sekundy funkci resolve s argumentem 20
            });
            let promise3 = new Promise((resolve, reject) => {
                resolve(30);
            });

            Promise.any([promise1, promise2, promise3])
            .then((hodnota) => {
                if (promise1Resolved) {
                    this.consoleElement.innerHTML = "&gt; promise1 se splnil<br>&gt; hodnota prvního Promisu, který byl splněný: " + hodnota + "<br>&gt;";
                } else {
                    this.consoleElement.innerHTML = "&gt; promise1 se nesplnil<br>&gt; hodnota prvního Promisu, který byl splněný: " + hodnota + "<br>&gt;";
                }
            })
            .catch((err) => {
                console.log(err);
            });
        }
    },
    {
        elementId: "Example-Method-AllSettled",
        consoleElement: document.getElementById("Example-Method-AllSettled__Console"),
        func: function() {
            let promise1Resolved = false;
            let promise1 = new Promise((resolve, reject) => {
                let rand = Math.random();
                if (rand > 0.5) {
                    promise1Resolved = true;
                    resolve(10);
                    this.consoleElement.innerHTML = "&gt; promise1 se splnil<br>&gt;";
                } else {
                    reject("vygenerované číslo je menší nebo se rovná 0.5");
                    this.consoleElement.innerHTML = "&gt; promise1 se nesplnil<br>&gt;";
                }
            });
            let promise2 = new Promise((resolve, reject) => {
                setTimeout(resolve, 500, 20); // zavolá za půl sekundy funkci resolve s argumentem 20
            });
            let promise3 = new Promise((resolve, reject) => {
                resolve(30);
            });

            Promise.allSettled([promise1, promise2, promise3])
            .then((vysledky) => {
                let text = "&gt;";
                for (let vysledek of vysledky) {
                    let objectText = "{";
                    let keyValuePairsTexts = [];

                    let keys = Object.keys(vysledek);
                    for (let key of keys) {
                        keyValuePairsTexts.push(key);
                    }
                    let values = Object.values(vysledek);
                    for (let i = 0; i < values.length; i++) {
                        if (typeof values[i] === "string") {
                            keyValuePairsTexts[i] += (": \"" + values[i] + "\"");
                        } else {
                            keyValuePairsTexts[i] += (": " + values[i]);
                        }
                    }
                    for (let i = 0; i < keyValuePairsTexts.length; i++) {
                        objectText += keyValuePairsTexts[i];
                        if (i < keyValuePairsTexts.length-1) {
                            objectText += ", ";
                        }
                    }
                    objectText += "}";
                    text += " " + objectText + "<br>&gt;";
                }
                if (promise1Resolved) {
                    this.consoleElement.innerHTML = "&gt; promise1 se splnil<br>&gt; informace o jednotlivých Promisech: <br>" + text;
                } else {
                    this.consoleElement.innerHTML = "&gt; promise1 se nesplnil<br>&gt; informace o jednotlivých Promisech: <br>" + text;
                }
            });
        }
    },
    {
        elementId: "Example-Method-Race",
        consoleElement: document.getElementById("Example-Method-Race__Console"),
        func: function() {
            let promise1 = new Promise((resolve, reject) => {
                setTimeout(resolve, 1000, "první Promise");
            });
            let promise2 = new Promise((resolve, reject) => {
                setTimeout(resolve, 500, "druhý Promise");
            });

            Promise.race([promise1, promise2])
            .then((hodnotaPromisu) => { // promise2 se splní dříve, takže jej metoda race vrátí
                this.consoleElement.innerHTML = "&gt; " + hodnotaPromisu + "<br>&gt;"
            });
        }
    },
    {
        elementId: "Example-Method-Resolve",
        consoleElement: document.getElementById("Example-Method-Resolve__Console"),
        func: function() {
            Promise.resolve("splněno")
            .then((hodnota) => {
                this.consoleElement.innerHTML = "&gt; " + hodnota + "<br>&gt;"
            });
        }
    },
    {
        elementId: "Example-Method-Reject",
        consoleElement: document.getElementById("Example-Method-Reject__Console"),
        func: function() {
            Promise.resolve("nesplněno")
            .then((hodnota) => {
                this.consoleElement.innerHTML = "&gt; " + hodnota + "<br>&gt;"
            });
        }
    }
];