"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = __importDefault(require("readline"));
var x; /*deklaracia premennych*/
var y;
var vysledok;
var z;
function scitovanie(x, y) {
    vysledok = x + y;
}
function odcitovanie(x, y) {
    vysledok = x - y;
}
function delenie(x, y) {
    vysledok = x / y;
}
function nasobenie(x, y) {
    vysledok = x * y;
}
var rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function otázky() {
    rl.question("Zadaj dalsie cislo: ", function (answer4) {
        z = parseInt(answer4);
        znamienka(vysledok, z);
    });
}
function znamienka(x, y) {
    rl.question("Zadaj znamienko(+ - / *): ", function (answer3) {
        if (answer3 == '+') {
            scitovanie(x, y);
            console.log("výsledok je:" + x + " + " + y + " = " + vysledok);
        }
        else if (answer3 == '-') {
            odcitovanie(x, y);
            console.log("výsledok je:" + x + " - " + y + " = " + vysledok);
        }
        else if (answer3 == '/') {
            delenie(x, y);
            console.log("výsledok je:" + x + " / " + y + " = " + vysledok);
        }
        else if (answer3 == '*') {
            nasobenie(x, y);
            console.log("výsledok je:" + x + " * " + y + " = " + vysledok);
        }
        rl.question("Chces pocitat dalej?(ano =A ,nie =N)", function (answer5) {
            if (answer5 == 'A') {
                otázky();
            }
            else
                (function () {
                    rl.close();
                });
        });
    });
}
/*pýtame sa na prve cisla a potom spuštame funkciu ktorá zisti ake znamienko ma použiť */
rl.question("Zadaj prve cislo", function (answer1) {
    x = parseInt(answer1);
    rl.question("Zadaj druhe cislo", function (answer2) {
        y = parseInt(answer2);
        znamienka(x, y);
    });
});
