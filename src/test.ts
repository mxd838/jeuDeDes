import { De } from "./classes/de";
import { Gobelet } from "./classes/gobelet";
import { Joueur } from "./classes/joueur";

const readline = require('readline-sync')

// === Récupération des choix de l'utilisateur ===
const nbDes : number = readline.questionInt("Nombre de dés : ")
const nbTours : number = readline.questionInt("Nombre de tours : ")
const participants : Object[] = []
let i : number = 1
while (true){
    const joueur : string = readline.question(`Nom du joueur ${i} : `)
    if (joueur === ''){
        break
    }
    const participant = new Joueur(joueur)
    participants.push(participant)
    i++
}
console.log(participants)

// TESTS
// === Test classe dé ===
const random1 = new De()
// console.log(random1)
random1.lancer()
// console.log(random1)
// console.log(random1.get_valeur())


// === Test classe gobelet ===
const gobUn = new Gobelet(nbDes)
// console.log(gobUn)


// === Création des dés ===
for(let i = 0; i < nbDes; i++){
    const nvDe = new De()
    nvDe.lancer()
    gobUn.des[i] = nvDe.get_valeur()
}

// console.log(gobUn.des)

// === Création des gobelets pour chaque participant ===

// test gobelet.lancer

// set un objet Partie (nb de des, nb de tours)
// initialise partie
// DONE --- instancie un objet Joueur pour chaque joueur
// DONE --- push chaque joueur dans tableau
// determine valeurs des des pour les gobelets de chacun des participants
// --- instancie un gobelet pour chaque participant
// --- gobelet.lancer
// ------ instancie autant d'objets des que de nombre de des indique en param de gobelet
// ------ de.lancer() pour fixer la valeur de chaque de
// ------ recuperer la val pcdte et la push dans le tableau des de gobelet
// ------ faire la somme des elements du tableau pour fixer le score du gobelet
// ------ ajouter cette somme au score du joueur (ajouter le resultat de chaque tour au score du joueur)