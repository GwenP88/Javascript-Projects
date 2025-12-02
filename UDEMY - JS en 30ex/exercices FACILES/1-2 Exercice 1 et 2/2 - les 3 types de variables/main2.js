// Exercice 2 : afficher les 3 types de variables

let nom = "toto";
let age = 30;
let homme = true;

console.log("Nom : " + nom); // correspond à l'écriture console.log("nom : %s", nom) sans les +;
console.log("Age : " + age); // correspond à l'écriture console.log("nom : %d", nom) sans les +;

if(homme === true){ //if(homme === true) correspond à l'écriture suivante if(homme) ET pour afficher l'inverse (homme !=== true) OU (!homme)
    console.log("Sexe : Homme");
}else{
    console.log("Sexe : Femme");
}
