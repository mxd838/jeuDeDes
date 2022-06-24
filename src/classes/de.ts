import { Ide } from "../interfaces/ide";

export class De implements Ide {

    public valeur : number = 0

    constructor(){
        this.valeur = 0
    }

    public get_valeur() : number {
        return this.valeur
    }

    public lancer() : void{
        this.valeur = Math.floor(Math.random() * 6 ) + 1
    }


}