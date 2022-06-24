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
        // Push the adequate number of Joueur objects into the array
        for (let i = 1; i <= this.nb_joueurs; i++) {
            const joueur = new joueur_1.Joueur(readline.question(`Nom du joueur ${i} : `));
            this.joueurs.push(joueur);
        }
    }
    lancer() {
        for (let i = 1; i <= this.nb_tours; i++) {
            console.log(`\n=== TOUR ${i} ===\n`);
            for (let j = 0; j < this.nb_joueurs; j++) {
                console.log(`\n--- ${this.joueurs[j].get_nom()} ---\n`);
                // create a 'gobelet' object
                const newGob = new gobelet_1.Gobelet(this.nb_des);
                newGob.lancer();
                this.joueurs[j].jouer(newGob);
                this.joueurs[j].affiche_score();
            }
        }
    }
    afficher_gagnant() {
        console.log('\n=== Scores finaux ===\n');
        // Loop over the players to get the best score and its user name
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
        // display the winner and its score
        console.log('\n=====================\n');
        console.log(`Le gagnant est ${gagnant} avec un score de ${max}`);
    }
}
exports.Partie = Partie;
