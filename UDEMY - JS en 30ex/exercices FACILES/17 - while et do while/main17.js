var readline = require("readline-sync");

/*
// solution 1 : avec while
var nbDonne = parseInt(readline.question("Saisir le chiffre 3 : "));

while(nbDonne !==3){
    console.log("vous n'avez pas saisi le bon chiffre...")
    nbDonne = parseInt(readline.question("Saisir le chiffre 3 : "));
}

console.log("bravo, vous avez saisi le chiffre 3!")
*/

// solution 2 avec DO...while
var nbDonne = 0;

do{
   // faire le console.log ET reposer la question.... 
    console.log("vous n'avez pas saisi le bon chiffre...")
    nbDonne = parseInt(readline.question("Saisir le chiffre 3 : ")); 
}while(nbDonne !== 3)
    // tant que le nb est différent de 3

    // comme nombre = 3 alors on sort de la boucle et on log un message
console.log("bravo, vous avez saisi le chiffre 3!")

