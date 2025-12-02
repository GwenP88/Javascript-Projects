var readline = require("readline-sync");
var fs = require("fs");
    //module fs : file systeme, permettant de gérer les fichiers et les sauvegardes
var types = require("./JSON/types.json");
var armes = require("./JSON/armes.json");

var armesConfig  = {
    afficherArmes(){
        for(var arme in armes){
            if(arme.substring(0,4) === "arme"){
                var idArme = arme.substr(-1,1);
                console.log(idArme + " : " + this.afficherArme(armes[arme]));
            }           
        }
    },

    afficherArme(arme){
        return ("Nom : " + arme.nom + " - Type : " + types[arme.type]);

    },

    ajouterArmes(){
        var nouvelleArme = {};
            nouvelleArme.nom = readline.question("Quel est le nom de l'arme que vous voulez ajouter ? ");
            this.afficherType()
            nouvelleArme.type = parseInt(readline.question("Quel est son type ? "));
            armes.increment++;
            armes["arme"+armes.increment] = nouvelleArme;
            fs.writeFileSync("./JSON/armes.json", JSON.stringify(armes));
    },

    afficherType(){
        for(var type in types){
            console.log(type + " : " + types[type]);
        }
    },

    supprimerArmes(){
        var armeASupprimer = readline.question("Quel est le numero de l'arme que vous voulez supprimer ? ");
        delete armes["arme"+ armeASupprimer];
        fs.writeFileSync("./JSON/armes.json", JSON.stringify(armes));
    },
};

module.exports = armesConfig;

/*
Les arguments de la méthode substring() représentent les indices de début et de fin sur la chaîne. 
Pour substr() , les arguments représentent l'indice de début et le nombre de caractères à utiliser pour la chaîne résultante

*/