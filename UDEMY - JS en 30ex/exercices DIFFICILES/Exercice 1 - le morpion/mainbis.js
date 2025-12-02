// les variables utiles
var readline = require("readline-sync");

// variable pour alternance joueur 1 joueur 2. initialisé à 1.
var tour = 1;

// variable fin pour determiner si le jeu est fini ou non (au démarrage le jeu n'est pas terminé)
// true = jeu fini - false = jeu non fini
var fin = false;

// tableau en 2 dimensions
var morpion = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

// pour commpter le nombre de cellule restantes
var nbCelluleReste = 9; // initialisée à 9 car 9 cases

// le corps du programme

afficherGrille(morpion);

while(!fin && nbCelluleReste > 0){
    // variable pour determiné si position saisie par les joueurs est valide ou non : valide si place dans la grille OU si pas de jeton à la position demandée. initialisé à false (on estime de base que la position n'est pas bonne et si elle n'est pas bonne, alors on recommence la saisie)
    var positionOk = false;
    while (!positionOk){ // tant que la position n'est pas bonne, alosrs on recommence la saisie
        console.log("------------------------------------");
        console.log("joueur " + tour + " ,c'est à vous!")

        // les questions avec saisie des joueurs
        var questionLigne = parseInt(readline.question("Quelle position voulez-vous ? \nLigne : "));
        var questionColonne = parseInt(readline.question("Colonne : "));

        positionOk = verifPositionOk(questionLigne, questionColonne, morpion);
        if(!positionOk) console.log("******Veuillez choisir une position valide******");
    }

    // placer un éléments
    // -1 car le tableau commence à 0, alors que pour le joueur cela correspond à 1
    morpion[questionLigne-1][questionColonne-1] = tour;

    // a chaque tour on enlève une cellule dispo
    nbCelluleReste--;

    // avec une ternaire (tour===1) ? tour =2 : tour =1  meme résultat
    afficherGrille(morpion);
    fin = verifierFinGame(morpion);
    if(fin){
        console.log("Bravo! Joueur %d, tu as gagné !", tour)
    }
    // pour passer d'un joueur à l'autre
    if(tour===1)tour = 2; //si tour = 1 alors on passe au tour 2, sinon on reste au tour 1
    else tour = 1;

    if(nbCelluleReste===0){
        console.log("Le jeu est fini, vous êtes à égalité, personne ne peut gagner... :(")
    };
};


//-------------------------------------------------------------------------------------------------------

// les fonctions utiles pour le programme

// fonction qui parcourt tous le tableau (chaque ligne puis chaque case de chaque ligne), pour permettre son affichage
function afficherGrille (grille){
    for(var i = 0; i < grille.length; i++){
        var txt = "";
        for(var j = 0; j < grille[i].length; j++){
            if(grille[i][j] === 0)txt += "| |";
            else if(grille[i][j] === 1)txt += "|X|";
            else if(grille[i][j] === 2)txt += "|O|"
        }
        console.log(txt);
    }};

function verifPositionOk(questionLigne, questionColonne, morpion){
    // condition 1, vérifier que la saisie correspond bien à une case de la grille ET que la case === 0(soit vide)
    if(questionLigne >=1 && questionLigne <=3 && questionColonne >=1 && questionColonne <=3 && morpion[questionLigne-1][questionColonne-1] === 0)
        return true;
    else return false;
};

function verifierFinGame(morpion){
    for(var i = 0; i<morpion.length; i++){
        // on va dabord parcourir toutes les lignes et vérifier si un des joueur a gagné sur cette ligne et donc si un des joueur a choisi les 3 positions de la ligne (est ce que sur la ligne i, la position 0 = à la position 1 et si la position 0 est aussi égale à la position 2)
        if(morpion[i][0] === morpion[i][1] && morpion[i][0] === morpion[i][2] && morpion[i][0] !== 0) return true;
        // idem pour les colonne
        if(morpion[0][i] === morpion[1][i] && morpion[0][i] === morpion[2][i] && morpion[0][i] !== 0) return true;
    }
    // pour les diagonales
    if(morpion[0][0] === morpion[1][1] && morpion[0][0] === morpion[2][2] && morpion[1][1] !==0) return true;
    if(morpion[0][2] === morpion[1][1] && morpion[0][2] === morpion[2][0] && morpion[1][1] !==0) return true;
    return false;
}