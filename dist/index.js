"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const partie_1 = require("./classes/partie");
const readline = require('readline-sync');
const nbTours = readline.questionInt('Nombre de tours : ');
const nbDes = readline.questionInt('Nombre de dés : ');
const nbJoueurs = readline.questionInt('Nombre de joueurs : ');
const nouvellePartie = new partie_1.Partie(nbTours, nbDes, nbJoueurs);
nouvellePartie.initialiser();
// console.log(nouvellePartie.joueurs)
nouvellePartie.lancer();
nouvellePartie.afficher_gagnant();
// console.log(nouvellePartie.joueurs)
// const newGob = new Gobelet(5)
// const newPlayer = new Joueur('Marc')
// newPlayer.jouer(newGob)
// newPlayer.affiche_score()
