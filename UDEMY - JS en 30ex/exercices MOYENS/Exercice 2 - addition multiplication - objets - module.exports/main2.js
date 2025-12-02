var readline = require("readline-sync");
var configuration = require("./config");

var saisie = "";

do{
    menu();
    var saisie = parseInt(readline.question("Saisir l'action a realiser :"));
    if(saisie === 1){
        configuration.addition(parseInt(readline.question("Choisir un nombre : ")));
    }else if(saisie === 2){
        configuration.multiplication(parseInt(readline.question("Choisir un nombre : ")));
    }else if(saisie === 3){
        console.log("Fin du programme");
    }
} while(saisie !== 3);

// fonction pour le menu :
function menu(){
    var menu = "";
        menu = ("1 : Additionner les n premiers nombres \n");
        menu += ("2 : Multiplier les n premiers nombres \n");
        menu += ("3 : Quitter");
        console.log(menu);
};

