import { Ipartie } from "../interfaces/ipartie";
import { Gobelet } from "./gobelet";
import { Joueur } from "./joueur";

const readline = require('readline-sync')

export class Partie implements Ipartie {
    public joueurs : Joueur[] = []
    public nb_joueurs : number 
    public nb_tours: number
    public nb_des : number

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
            console.log(`\n=== TOUR ${i} ===\n`)
            for (let j = 0; j < this.nb_joueurs; j++){
                console.log(`\n--- ${this.joueurs[j].get_nom()} ---\n`)
                // instancie un gobelet
                const newGob = new Gobelet(this.nb_des)
                newGob.lancer()
   
                this.joueurs[j].jouer(newGob)
                this.joueurs[j].affiche_score()


            }
        }
    }

    public afficher_gagnant(): void {
        // afficher les scores des joueurs
        console.log('=== Scores finaux ===')
        // boucle sur les scores pour deter le max
        let max = this.joueurs[0].get_score()
        let gagnant = this.joueurs[0].get_nom()
        for (let i = 0; i < this.joueurs.length; i++){
            const nomJoueur = this.joueurs[i].get_nom()
            const score = this.joueurs[i].get_score()
            console.log(nomJoueur + ' : ' + score)
            if (max < score){
                max = score
                gagnant = nomJoueur
            }
        }
        // affiche le nom et le score du gagnant
        console.log('=====================')
        console.log(`Le gagnant est ${gagnant} avec un score de ${max}`)
    }
}