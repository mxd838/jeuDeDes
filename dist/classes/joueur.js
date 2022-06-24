"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Joueur = void 0;
class Joueur {
    constructor(nom) {
        this.nom = '';
        this.score = 0;
        this.nom = nom;
        this.score = 0;
    }
    get_nom() {
        return this.nom;
    }
    get_score() {
        return this.score;
    }
    jouer(gobelet) {
        // lance le gobelet
        // met à jour le score du joueur selon résultat
    }
    affiche_score() {
        console.log(`Score de ${this.nom} : ${this.score}`);
    }
}
exports.Joueur = Joueur;
