import { Igobelet } from "../interfaces/igobelet";
import { De } from "./de";

export class Gobelet implements Igobelet {
    public valeur : number = 0
    public des : number[] = []

    constructor(nb_des : number){
        this.valeur = 0
        for(let i = 0; i < nb_des; i++){
            this.des.push(0)
        }
    }
    

    public get_valeur(): number {
        return this.valeur
    }

    public lancer() : void {
        this.valeur = 0
        // get value for each dice
        for(let i = 0; i < this.des.length; i++){
            const nvDe = new De()
            nvDe.lancer()
            this.des[i] = nvDe.get_valeur()
            // increase the value of the 'gobelet' with each dice value
            this.valeur += this.des[i]
        }
    }

    public afficher_score(): void {
        // display the die results as a string
        console.log(`Lancer : ${this.des.join(' - ')}`)    
        console.log(`Score pour ce tour : ${this.valeur}`) 
    }
}