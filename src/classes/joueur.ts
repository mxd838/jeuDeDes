import { Ijoueur } from "../interfaces/ijoueur";

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

    public jouer(gobelet : Object){
        // lance le gobelet
        // met à jour le score du joueur selon résultat
    }

    public affiche_score(): void {
        console.log(`Score de ${this.nom} : ${this.score}`)
    }
}