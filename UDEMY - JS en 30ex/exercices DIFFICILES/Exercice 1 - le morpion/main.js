// les variables utiles
var readline = require("readline-sync");
var tour = 1;
var fin = false;

var morpion = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

var nbCelluleReste = 9;

// le corps du programme

afficherGrille(morpion);

while(!fin && nbCelluleReste > 0){
    var positionOk = false;

    while (!positionOk){
        console.log("------------------------------------");
        console.log("joueur " + tour + " ,c'est à vous!")

        
        var questionLigne = parseInt(readline.question("Quelle position voulez-vous ? \nLigne : "));
        var questionColonne = parseInt(readline.question("Colonne : "));

        positionOk = verifPositionOk(questionLigne, questionColonne, morpion);
        if(!positionOk) console.log("******Veuillez choisir une position valide******");
    };

    morpion[questionLigne-1][questionColonne-1] = tour;
    nbCelluleReste--;
    afficherGrille(morpion);
    fin = verifierFinGame(morpion);

    if(fin){
        console.log("Bravo! Joueur %d, tu as gagné !", tour)
    };
    
    if(tour===1)tour = 2;
    else tour = 1;

    if(nbCelluleReste===0){
        console.log("Le jeu est fini, vous êtes à égalité, personne ne peut gagner... :(")
    };
};

//-------------------------------------------------------------------------------------------------------

// les fonctions utiles pour le programme

function afficherGrille (grille){
    for(var i = 0; i < grille.length; i++){
        var txt = "";
        for(var j = 0; j < grille[i].length; j++){
            if(grille[i][j] === 0)txt += "| |";
            else if(grille[i][j] === 1)txt += "|X|";
            else if(grille[i][j] === 2)txt += "|O|"
        };
        console.log(txt);
    }};

function verifPositionOk(questionLigne, questionColonne, morpion){
    if(questionLigne >=1 && questionLigne <=3 && questionColonne >=1 && questionColonne <=3 && morpion[questionLigne-1][questionColonne-1] === 0)
        return true;
    else return false;
};

function verifierFinGame(morpion){
    for(var i = 0; i<morpion.length; i++){
        if(morpion[i][0] === morpion[i][1] && morpion[i][0] === morpion[i][2] && morpion[i][0] !== 0) return true;
        if(morpion[0][i] === morpion[1][i] && morpion[0][i] === morpion[2][i] && morpion[0][i] !== 0) return true;
    };
    if(morpion[0][0] === morpion[1][1] && morpion[0][0] === morpion[2][2] && morpion[1][1] !==0) return true;
    if(morpion[0][2] === morpion[1][1] && morpion[0][2] === morpion[2][0] && morpion[1][1] !==0) return true;
    return false;
};