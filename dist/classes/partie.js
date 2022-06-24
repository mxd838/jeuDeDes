"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partie = void 0;
const joueur_1 = require("./joueur");
const readline = require('readline-sync');
class Partie {
    constructor(nb_tours, nb_des, nb_joueurs) {
        this.joueurs = [];
        this.gobelet = {};
        this.nb_tours = nb_tours;
        this.nb_des = nb_des;
        this.nb_joueurs = nb_joueurs;
    }
    initialiser() {
        // push nom joueur dans tableau joueur
        for (let i = 1; i <= this.nb_joueurs; i++) {
            const joueur = new joueur_1.Joueur(readline.question(`Nom du joueur ${i} : `));
            this.joueurs.push(joueur);
        }
    }
    lancer() {
        // chaque jouer joue à tour de rôle pendant n tours
        for (let i = 1; i <= this.nb_tours; i++) {
            console.log(`Tour ${i}`);
            for (let j = 0; j < this.nb_joueurs; j++) {
                console.log(this.joueurs[j]);
            }
        }
    }
    afficher_gagnant() {
        // afficher les scores des joueurs
        // boucle sur les scores pour deter le max
        // affiche le nom et le score du gagnant
    }
}
exports.Partie = Partie;
