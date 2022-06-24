"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const partie_1 = require("./classes/partie");
const readline = require('readline-sync');
// Get user inputs for the game settings
const nbTours = readline.questionInt('Nombre de tours : ');
const nbDes = readline.questionInt('Nombre de dés : ');
const nbJoueurs = readline.questionInt('Nombre de joueurs : ');
// Create new Object Partie
const nouvellePartie = new partie_1.Partie(nbTours, nbDes, nbJoueurs);
nouvellePartie.initialiser();
nouvellePartie.lancer();
nouvellePartie.afficher_gagnant();
