// les variables du programmes

var readline = require("readline-sync");
var armesConfig = require("./armesconfig");

//---------------------------------------------------------------------------------------------------------
// le programme

do{
    menu();
    var saisie = parseInt(readline.question("Quel est votre choix ? "));
    if(saisie === 1){
        armesConfig.afficherArmes();

    }else if(saisie === 2){
        armesConfig.ajouterArmes();

    }else if(saisie === 3){
        armesConfig.supprimerArmes();

    }else if (saisie === 0){
        console.log("A bientot !");

    }else if (saisie !== 0 && saisie !== 1 && saisie !== 2 && saisie !== 3){
        console.log ("----------veuillez saisir une demande valide----------")
    }
} while(saisie !== 0);

//---------------------------------------------------------------------------------------------------------
// fonction pour les menus :

function menu(){
    var menu = ("1/ Afficher les armes \n");
        menu += ("2/ Ajouter une arme \n");
        menu += ("3/ Supprimer une arme \n");
        menu += ("0/ Quitter");
        console.log(menu);
};
