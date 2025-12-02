// configuration

var readline = require("readline-sync");

var tableau = [3,5,10,12];

var menu = ("1/ Ajouter un nombre au tableau \n");
menu += ("2/ Afficher le tableau \n");
menu += ("0/ Quitter");

// programme

var choix = "";
var saisie = "";

while(choix !== "0"){
    console.log(menu);
    var choix = (readline.question("Quel est votre choix ? : "))

        switch(choix){
            case "1" : ajouterNombre(saisie);
            break;
            case "2" : console.log(tableau);
            break;
            case "0" : console.log("A+!");
            break;
            default : console.log("Je n'ai pas compris votre demande")
        }
}
   
function ajouterNombre(){

    var saisie = parseInt(readline.question("Veuillez saisir un nombre a ajouter au tableau :"));

    tableau.push(saisie);
    tableau.sort(function(a, b){
    return a - b;
    })
};








        
        
    
    

    


