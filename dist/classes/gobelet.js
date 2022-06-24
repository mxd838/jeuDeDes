"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gobelet = void 0;
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
    lancer(values) {
        // change la valeur des dés du gobelet
        // met à jour la valeur du gobelet
    }
    afficher_score() {
    }
}
exports.Gobelet = Gobelet;
