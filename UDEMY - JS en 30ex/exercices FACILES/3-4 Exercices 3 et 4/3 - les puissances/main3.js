// Exercice 3 : la puissance de 2

// pour pouvoir utiliser le module readline et pouvoir entrer du texte dans le terminal
var readline = require("readline-sync");

// exercice sur les puissances : puissance 2 : 2 possibilités

var nbChoisi = parseInt(readline.question("Puissance voulue ? ")); // permet d'afficher une "boite de dialogue" avec la question en lien.
// ici parsInt permet d'éviter les erreur en indiquant que ce qui doit être afficher est une chaine de caractère

// possibilité 1 : avec **
console.log("--------SOLUTION 1---------")

let nbPuissance2 = nbChoisi**2;
console.log(nbChoisi + " à la puissance 2 = " + nbPuissance2);

// possibilité 2 : avec la fonction math.pow
console.log("--------SOLUTION 2---------")

// créer une const puissance et la fixer à 2
const PUISSANCE = 2;
console.log(PUISSANCE + " à la puissance " + nbChoisi + " = " + Math.pow(PUISSANCE,nbChoisi));
//
