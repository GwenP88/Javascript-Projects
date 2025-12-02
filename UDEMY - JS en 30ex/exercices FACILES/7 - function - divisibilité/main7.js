// Exercice 7 :  vérifier la divisibilité d'un nombre par 3.



//solution 1 : avec if/else et le modulo%
// le modulo permet de determiné le reste d'une division, si le reste est egal à zero, alors c'est que le nombre est divisible par trois


// pour pouvoir utiliser le module readline et pouvoir entrer du texte dans le terminal
var readline = require("readline-sync");

/*
var nbrdonné = parseInt(readline.question("Veuillez saisir un nombre ? "));
var diviseur = 3;
var division = nbrdonné / 3;
var reste = nbrdonné % diviseur;

    if(reste === 0){
    console.log("le résultat de " + nbrdonné + " / " + diviseur + " = " + division);
    }else{
    console.log("Le nombre " + nbrdonné + " n'est pas divisible par 3");
    }
*/

/*




// solution 2 : avec une fonction

// les variables nombres utilisées
var c1 = 123;
var c2 = 20;

function diviserPar3(nombre){
    if(nombre % 3 === 0){
    console.log("le résultat de " + nombre + " / 3 = " + (nombre/3));
    }else{
    console.log("Le nombre " + nombre + " n'est pas divisible par 3");
    }
}

// l'appel de la fonction prenant en paramètre une des variables nombres
diviserPar3(c1);
diviserPar3(c2);
*/



/*
// solution 3 : utiliser deux fonctions : une pour vérifier si le chiffre est divisible par trois (et donc une fonction pour tester la divisibilité) et une focntion pour afficher le resultat

// les variables nombres utilisées
var c1 = 123;
var c2 = 20;

// la fonction test de divisibilité

function testerLaDivisibilite(nombre){
    return nombre % 3 === 0;
}

// fonction qui donne les résultat et l'affichage
function diviserPar3(nombre){
    // appel dans le if de la fonction test
    if(testerLaDivisibilite(nombre)){
    console.log("le résultat de " + nombre + " / 3 = " + (nombre/3));
    }else{
    console.log("Le nombre " + nombre + " n'est pas divisible par 3");
    }
}

// l'appel de la fonction prenant en paramètre une des variables nombres
diviserPar3(c1);
diviserPar3(c2);
*/



// autre exercice : programme pour vérifier que n'importe qu'elle nombre et divisible par n'importe quel autre

var dividende = parseInt(readline.question("Veuillez saisir un nombre à diviser ? "));
var diviseur = parseInt(readline.question("Veuillez saisir un diviseur ? "));

function testerLaDivisibilite(dividende,diviseur){
    return dividende % diviseur === 0;
}

function diviserEtAfficher(dividende,diviseur){
    if(testerLaDivisibilite(dividende,diviseur)){
    console.log("le résultat de " + dividende + " / " + diviseur + " = " + (dividende/diviseur));
        }else{
    console.log("Le nombre " + dividende + " n'est pas divisible par " + diviseur);
    }
}

diviserEtAfficher(dividende,diviseur);