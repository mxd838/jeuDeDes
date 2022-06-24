"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partie = void 0;
const gobelet_1 = require("./gobelet");
const joueur_1 = require("./joueur");
const readline = require('readline-sync');
class Partie {
    constructor(nb_tours, nb_des, nb_joueurs) {
        this.joueurs = [];
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
            console.log(`\n=== TOUR ${i} ===\n`);
            for (let j = 0; j < this.nb_joueurs; j++) {
                console.log(`\n--- ${this.joueurs[j].get_nom()} ---\n`);
                // instancie un gobelet
                const newGob = new gobelet_1.Gobelet(this.nb_des);
                newGob.lancer();
                this.joueurs[j].jouer(newGob);
                this.joueurs[j].affiche_score();
            }
        }
    }
    afficher_gagnant() {
        // afficher les scores des joueurs
        console.log('=== Scores finaux ===');
        // boucle sur les scores pour deter le max
        let max = this.joueurs[0].get_score();
        let gagnant = this.joueurs[0].get_nom();
        for (let i = 0; i < this.joueurs.length; i++) {
            const nomJoueur = this.joueurs[i].get_nom();
            const score = this.joueurs[i].get_score();
            console.log(nomJoueur + ' : ' + score);
            if (max < score) {
                max = score;
                gagnant = nomJoueur;
            }
        }
        // affiche le nom et le score du gagnant
        console.log('=====================');
        console.log(`Le gagnant est ${gagnant} avec un score de ${max}`);
    }
}
exports.Partie = Partie;
