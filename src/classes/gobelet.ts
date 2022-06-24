import { Igobelet } from "../interfaces/igobelet";

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

    public lancer(values : number[]) : void {
        // change la valeur des dés du gobelet
        for(let i = 0; i < this.des.length; i++){

        }
        // met à jour la valeur du gobelet
    }

    public afficher_score(): void {
        
    }
}