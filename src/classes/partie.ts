import { Ipartie } from "../interfaces/ipartie";
import { Joueur } from "./joueur";

const readline = require('readline-sync')

export class Partie implements Ipartie {
    public joueurs : Object[] = []
    public nb_joueurs : number 
    public nb_tours: number
    public nb_des : number
    public gobelet: Object = {}

    constructor(nb_tours :number, nb_des : number, nb_joueurs : number){
        this.nb_tours = nb_tours
        this.nb_des = nb_des
        this.nb_joueurs = nb_joueurs
    }

    public initialiser(): void {
        // push nom joueur dans tableau joueur
        for (let i = 1; i <= this.nb_joueurs; i++){
            const joueur = new Joueur(readline.question(`Nom du joueur ${i} : `))
            this.joueurs.push(joueur)
        }

    }


    public lancer(): void {
        // chaque jouer joue à tour de rôle pendant n tours
        for (let i = 1 ; i <= this.nb_tours; i++){
            console.log(`Tour ${i}`)
            for (let j = 0; j < this.nb_joueurs; j++){
                // instancie un gobelet
                // gobelet.lancer
                // dans gobelet, instancier des des et les lancer
                // associe un joueur à ce gobelet et met à jour son score
                console.log(this.joueurs[j])
            }
        }
    }

    public afficher_gagnant(): void {
        // afficher les scores des joueurs
        // boucle sur les scores pour deter le max
        // affiche le nom et le score du gagnant
    }
}