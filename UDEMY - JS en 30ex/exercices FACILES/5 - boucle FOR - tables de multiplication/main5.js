// Exercice 5 :  la boucle FOR


// pour pouvoir utiliser le module readline et pouvoir entrer du texte dans le terminal
var readline = require("readline-sync");

// pour poser la question :
var question = parseInt(readline.question("Quelle table de multiplication voulez-vous afficher ? "));
var nbrdonné = question;

/*
// boucle pour afficher la table de multiplication jusqu'à 10 du nombre donnée 
for(let i = 1; i <= 10 ; i++){
    console.log(nbrdonné + " x " + i + " = " + nbrdonné*i);  
}
*/

// autre possibilité
for(let i = 1 ; i <= 10 ; i++){
    // determiner le calcul
    let resultat = nbrdonné*i;
    // afficher le résultat
    console.log(nbrdonné + " x " + i + " = " + resultat); 
}

