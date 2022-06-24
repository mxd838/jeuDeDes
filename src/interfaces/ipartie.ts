export interface Ipartie {
    joueurs : Object[]
    nb_tours : number
    gobelet : Object
    initialiser(name : string) : void
    lancer() : void
    afficher_gagnant() : void
}