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
        // Push the adequate number of Joueur objects into the array
        for (let i = 1; i <= this.nb_joueurs; i++){
            const joueur = new Joueur(readline.question(`Nom du joueur ${i} : `))
            this.joueurs.push(joueur)
        }
    }


    public lancer(): void {

        for (let i = 1 ; i <= this.nb_tours; i++){
            console.log(`\n=== TOUR ${i} ===\n`)
            for (let j = 0; j < this.nb_joueurs; j++){
                console.log(`\n--- ${this.joueurs[j].get_nom()} ---\n`)
                // create a 'gobelet' object
                const newGob = new Gobelet(this.nb_des)
                newGob.lancer()
   
                this.joueurs[j].jouer(newGob)
                this.joueurs[j].affiche_score()


            }
        }
    }

    public afficher_gagnant(): void {
        console.log('\n=== Scores finaux ===\n')
        // Loop over the players to get the best score and its user name
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
        // display the winner and its score
        console.log('\n=====================\n')
        console.log(`Le gagnant est ${gagnant} avec un score de ${max}`)
    }
}