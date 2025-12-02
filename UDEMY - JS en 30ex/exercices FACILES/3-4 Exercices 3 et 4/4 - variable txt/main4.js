// Exercice 4 : la variable txt

// pour pouvoir utiliser le module readline et pouvoir entrer du texte dans le terminal
var readline = require("readline-sync");

// exercice : les saisies clavier

// débuter par le paramétrage de la saisie clavier
// permet d'afficher une "boite de dialogue" avec la question en lien.
var nom = (readline.question("Quel est votre nom ? "));
var prenom = (readline.question("Quel est votre prenom ? "));
var age = parseInt(readline.question("Quel est votre age ? ")); //ParseInt : analyse une chaine de caractère donnée et renvoie un nombre entier

// ensuite, il existe 2 solutions

// solution 1 : avec la variable txt

// ne pas oublier de sauter des lignes avec \n

var txt = "--------------------------------------\n";
txt += "---------------BEINVENUE-------------\n";
txt += "--------------------------------------\n";

txt += "Votre nom est : " + nom + "\n";
txt += "Votre prenom est : " + prenom + "\n";
txt += "Vous avez : " + age + " ans" + "\n";

console.log(txt);

// solution 2 : avec le console.log

/*
console.log("--------------------------------------------------------");
console.log("--------------------BIENVENUE---------------------------");
console.log("--------------------------------------------------------");
*/

/*
console.log("Votre nom est : " + nom);
console.log("Votre prénom est : " + prenom);
console.log("Vous avez : " + age);
*/

//affiche le type d'une variable
console.log(typeof(age));
console.log(typeof(nom));