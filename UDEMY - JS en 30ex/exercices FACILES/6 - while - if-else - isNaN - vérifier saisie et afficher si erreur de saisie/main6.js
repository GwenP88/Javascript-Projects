// Exercice 6 :  la boucle while
// vérifier la saisie d'un utilisateur avec message si erreur

// pour pouvoir utiliser le module readline et pouvoir entrer du texte dans le terminal
var readline = require("readline-sync");

// solution 1 :
var nbrdonné = parseInt(readline.question("Quel nombre voulez-vous saisir ? "));

// pour la saisie
var nbrdonné = parseInt(readline.question("Quel nombre voulez-vous saisir ? "));

// mettre en place la boucle avec while et IsNaN (is Not A Number)
while(isNaN(nbrdonné)){
    console.log("Veuillez recommencer la saisie. Vous devez saisir un nombre!");
    nbrdonné = parseInt(readline.question("Quel nombre voulez-vous saisir ? "));
}
console.log("Vous avez saisi le nombre " + nbrdonné);

// solution 2 : avec booleans et while et if/else

/*
// défnir un booléen : est ce qu'on a réussi à saisir un nombre?
const fin = false;

// mettre en place une boucle avec while "tant que ça n'est pas fini et donc tant que ça n'est pas un nombre, alors on continu la boucle"

// tant que c'est différent de fin et donc tant que c'est différent d'un nombre
while(!fin){
    if(isNaN(nbrdonné)){
        console.log("Veuillez recommencer la saisie. Vous devez saisir un nombre!");
        nbrdonné = parseInt(readline.question("Quel nombre voulez-vous saisir ? "));
    }else{
        console.log("C'est un nombre!");
        break;
     // condition d'arret
    }
}  
console.log("Vous avez saisi le nombre " + nbrdonné);
*/


