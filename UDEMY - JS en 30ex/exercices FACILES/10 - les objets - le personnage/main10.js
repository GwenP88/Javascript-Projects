// Exercice 10 :  les objets - les personnages

// pour pouvoir utiliser le module readline et pouvoir entrer du texte dans le terminal
var readline = require("readline-sync");

/*
// solution 1

var questionNom = (readline.question("Quel est le nom ?"));
var questionAge = parseInt(readline.question("Quel age ?"))

var personnage = {
    nom : questionNom,
    age : questionAge,
};

console.log(personnage);

*/

// solution 2

var personnage = {};

personnage.nom = (readline.question("Quel est le nom ? "));
personnage.age = parseInt(readline.question("Quel age ? "))

console.log(personnage)

/*
// A SAVOIR

// création d'une variable personnage vide
var personnage = {};

// création de propriété lié à personnage
personnage.nom = "toto";
personnage.age = 25;

// on peut également rajouter des sous propriété, mais il faut d'abord générer l'objet vide (sinon erreur)
personnage.caracteristiques = {};

puis ensuite ajouter les nouvelles sous propriétés

SOIT
personnage.caracteristiques = {
    force : 7;
    intelligence : 8;
};

SOIT 
personnage.caracteristiques.force = 7.

//si je fais un console.log(personnage), le terminale va me donner {nom : 'toto', age : 25}
//===> création dynamique d'une propriété sur un objet, meme vide.

console.log(personnage);
*/