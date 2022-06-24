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
        // change la valeur des dés du gobelet
        for (let i = 0; i < this.des.length; i++) {
            const nvDe = new de_1.De();
            nvDe.lancer();
            this.des[i] = nvDe.get_valeur();
            this.valeur += this.des[i];
        }
    }
    afficher_score() {
        console.log(`Lancer : ${this.des.join(' - ')}`);
        console.log(`Score pour ce tour : ${this.valeur}`);
    }
}
exports.Gobelet = Gobelet;
