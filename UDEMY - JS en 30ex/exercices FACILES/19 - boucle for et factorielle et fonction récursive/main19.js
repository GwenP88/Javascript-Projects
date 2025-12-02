var readline = require("readline-sync");

nbdonné = parseInt(readline.question("Saisir un chiffre pour afficher la factorielle de ce chiffre : ")); 

// solution 1 : avec une fonction

/*
function factorielle(n) {
    var resultat = 1;
    for (var i = 1; i < n+1 ; i++){
        resultat = resultat * i; // correspond à resultat *= i;
        console.log("Etape " + i + " : " + resultat)
    }
    console.log("Le resultat de la factorielle de " + n + " est " + resultat +".");
};

factorielle(nbdonné);
*/

// solution 2 : sans fonction


/*
var resultat = 1;
    for (var i = 1; i <= nbdonné ; i++){
        resultat *= i;
        console.log("Etape " + i + " : " + resultat)
    }
    console.log("Le resultat de la factorielle de " + nbdonné + " est " + resultat +".");

var resultatInv = 1;

for (var x = nbdonné ; x > 1 ; x--){
    resultatInv *= x;
    console.log("Etape " + x + " : " + resultatInv)
};

console.log("Le resultat de la factorielle de " + nbdonné + " est " + resultatInv +".");
*/

// solution 3 : la focntion récursive

var resultat = factorielle(nbdonné);

console.log("Le resultat de la factorielle de " + nbdonné + " est " + resultat +".");

function factorielle(n) {
    
    if(n > 1) { // if est ici la conditon d'arret, quand n arrive à 1.

    // !5 = 5 * 4 * 3 * 2 * 1 = 5 * !4
    // !4 = 4 * 3 * 2 * 1 = 4 * !3
    // !3 = 3 * 2 * 1 = 3 * !2
    // !2 = 2 * 1 = 2 * !1
    // ! 1 = 1
        // ce qui correspond à :
        return n * factorielle(n-1)
    } else {
        return 1;
    }};