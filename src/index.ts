import { Partie } from "./classes/partie";

const readline = require('readline-sync')

// Get user inputs for the game settings
const nbTours = readline.questionInt('Nombre de tours : ')
const nbDes = readline.questionInt('Nombre de dés : ')
const nbJoueurs = readline.questionInt('Nombre de joueurs : ')

// Create new Object Partie
const nouvellePartie = new Partie(nbTours, nbDes, nbJoueurs)

nouvellePartie.initialiser()
nouvellePartie.lancer()
nouvellePartie.afficher_gagnant()

