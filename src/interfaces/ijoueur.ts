export interface Ijoueur {
    nom : string
    score : number
    get_nom() : string
    get_score() : number
    jouer(gobelet : Object) : void
    affiche_score() : void
}