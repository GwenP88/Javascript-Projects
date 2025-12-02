let classe = {

    marc : {
        nom : "Marc",
        age : 21,
        notes : [12, 15, 13, 10, 7],
    },
    
    eric : {
        nom : "Eric",
        age : 18,
        notes : [5, 15, 3, 8, 17],
    },
    
    marie : {
        nom : "Marie",
        age : 22,
        notes : [10, 10, 11, 12, 11],
    },

    afficherEleve : function(eleve){
        console.log("Nom : " + eleve.nom);
        console.log("Age : " + eleve.age);
        console.log("Notes : ");
        var notes = "";
        for (var i = 0; i < eleve.notes.length; i++){
            notes += "  num" + i + " - " + eleve.notes[i] + "\n";
        }
        console.log(notes)
    },

    afficherClasse : function(){
        this.afficherEleve(this.marc);
        console.log(`Moyenne : ${this.calculerMoyenneEleve(this.marc)}\n`);
        this.afficherEleve(this.eric);
        console.log(`Moyenne : ${this.calculerMoyenneEleve(this.eric)}\n`);
        this.afficherEleve(this.marie);
        console.log(`Moyenne : ${this.calculerMoyenneEleve(this.marie)}\n`);
    },

    calculerMoyenneEleve : function(eleve){
        var moyenneE = 0;
        for (var i = 0; i < eleve.notes.length; i++){
            moyenneE += eleve.notes[i]
        }
        return moyenneE / eleve.notes.length
    },

    calculerMoyenneClasse : function(){
        var moyenneMarc = this.calculerMoyenneEleve(this.marc);
        var moyenneEric = this.calculerMoyenneEleve(this.eric);
        var moyenneMarie = this.calculerMoyenneEleve(this.marie)

        return ((moyenneEric + moyenneMarc + moyenneMarie)/3);
    },
};

console.log("Voici vos élèves : \n");
classe.afficherClasse(classe);
console.log(`Voici la moyenne de la classe : ${classe.calculerMoyenneClasse(classe)}`);
