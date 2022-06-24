"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const partie_1 = require("./classes/partie");
const nouvellePartie = new partie_1.Partie(3, 3, 3);
nouvellePartie.initialiser();
// console.log(nouvellePartie.joueurs)
nouvellePartie.lancer();
