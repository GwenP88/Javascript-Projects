// solution 

var readline = require("readline-sync");

var tableau = [3,5,10,12];

var saisie = "";
// obligation de déclarer une variable saisie "vide" car sinon, la boucle while va demander à l'utiliser avant qu'elle soit déclaré

// le corps du programme
// plusieurs actions 

// 1: ajouter un chiffre
// 2: afficher un tableau
// 3: de pouvoir quitter

// pour faire ses 3 actions il va falloir :


// mise en place de la boucle "tant que"
while(saisie !== "Q" && saisie !== "q"){
// 1: afficher un menu
menu();
// 2: réaliser une saisie
var saisie = readline.question("Quel est votre choix?"); // ici on decide de passer par desd lettres
// methode switch and case pour passer d'une valeur à l'autre dans le menu
switch(saisie){
    case "A" : 
    case "a" : ajouterNombre();
    break
    case "B" : 
    case "b" : afficherTableau();
    break ;
    case "Q" : 
    case "q" : console.log("A +");
    break ;
    default :  console.log("Je n'ai pas compris votre demande...")
};};

// programmation des différentes fonctions qui seront utilisées dans le programme
function menu(){
    var menu = "";
        menu += "A/ Ajouter un nombre au tableau \n";
        menu += "B/ Afficher le tableau \n";
        menu += "Q/ Quitter";
        console.log(menu);
};

function ajouterNombre(){
    // 1: demander à l'utilisateur d'ajouter un nombre
    var ajoutNombre = parseInt(readline.question("Quel Nombre voulez-vous ajouter ?"));
    // positionner ce nombre dans le tableau avec une focntion qui prend en paramètre le tableau et le nombre donnée
    var positionToPush = getPosition(tableau,ajoutNombre); // fonction qui va retourner la position
    tableau.splice(positionToPush,0,ajoutNombre); // la fonction splice permet d'insérer l'élément déjà positionner. elle prend en paramètre : d'ou l'élémént vient (de la variable positionToPush), le 0 indique que l'on ne veut supprimer auucne élément deja présent, et ce qu'on veut ajouter comme élément (ici un nombre)
};

function getPosition(tab,nombre){
    for(var i = 0 ; i < tab.length ; i++){
        if(tab[i] > nombre){
            return i;
        }
    }
    return tab.length;
}

function afficherTableau(){
    console.log(tableau);

};