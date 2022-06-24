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
        gobelet.lancer();
        gobelet.afficher_score();
        this.score += gobelet.get_valeur();
    }
    affiche_score() {
        console.log(`Score de ${this.nom} : ${this.score}`);
    }
}
exports.Joueur = Joueur;
