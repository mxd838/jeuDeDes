import { Partie } from "./classes/partie";


const nouvellePartie = new Partie(3, 3, 3)
nouvellePartie.initialiser()

// console.log(nouvellePartie.joueurs)
nouvellePartie.lancer()