"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gobelet = void 0;
const de_1 = require("./de");
class Gobelet {
    constructor(nb_des) {
        this.valeur = 0;
        this.des = [];
        this.valeur = 0;
        for (let i = 0; i < nb_des; i++) {
            this.des.push(0);
        }
    }
    get_valeur() {
        return this.valeur;
    }
    lancer() {
        this.valeur = 0;
        // get value for each dice
        for (let i = 0; i < this.des.length; i++) {
            const nvDe = new de_1.De();
            nvDe.lancer();
            this.des[i] = nvDe.get_valeur();
            // increase the value of the 'gobelet' with each dice value
            this.valeur += this.des[i];
        }
    }
    afficher_score() {
        // display the die results as a string
        console.log(`Lancer : ${this.des.join(' - ')}`);
        console.log(`Score pour ce tour : ${this.valeur}`);
    }
}
exports.Gobelet = Gobelet;
