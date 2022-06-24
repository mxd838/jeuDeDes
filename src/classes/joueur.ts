import { Ijoueur } from "../interfaces/ijoueur";
import { Gobelet } from "./gobelet";

export class Joueur implements Ijoueur {
    public nom : string = ''
    public score : number = 0

    constructor(nom : string){
        this.nom = nom
        this.score = 0
    }

    public get_nom() :string {
        return this.nom
    }

    public get_score() : number {
        return this.score
    }

    public jouer(gobelet : Gobelet){

        gobelet.lancer()
        gobelet.afficher_score()
        this.score += gobelet.get_valeur()
        // console.log(this.score)
    }

    public affiche_score(): void {
        console.log(`Score de ${this.nom} : ${this.score}`)
    }
}