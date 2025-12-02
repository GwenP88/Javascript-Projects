// générer chaque animal grace à la fonction creerAnimal
var chat1 = creerAnimal("Tya",7,true );
var chat2 = creerAnimal("Milo",5,false);
var chat3 = creerAnimal("Felicia",5,true);
var chat4 = creerAnimal("Lili",1,true);
var chien1 = creerAnimal("Nina",2,true);
var chien2 = creerAnimal("Pan",15,false);
var chien3 = creerAnimal("Hocket",7,false);

// les tableaux regroupant les différents animaux
let tabChats = [chat1, chat2, chat3, chat4];
let tabChiens = [chien1, chien2, chien3];

// la fonction "objet vide" qui generera les animaux
function creerAnimal (nom, age, sexe){
    let animal = {};
    animal.nom = nom;
    animal.age = age;
    animal.sexe = sexe;
    return animal;
};

// la focntion pour afficher les animaux selon le modèle donné
function afficherListeAnimal (liste){
var txt = "";
for(let i = 0; i < liste.length; i++){
   txt += "Nom : " + liste[i].nom + ".\n";
   txt += "Age : " + liste[i].age + " ans.\n";
        if(liste[i].sexe === true){
        txt += "Sexe : femelle. \n";
        }else{
        txt += "Sexe : male. \n";
        } 
    txt += "------------------------------"
        if(i !== liste.length-1) txt += "\n"
    console.log(txt);
}
};

// la fonction pour calculer la moyenne d'age des animaux
function calculerMoyenneAge (liste){
    var moyenne = 0;
    for(let i = 0; i < liste.length; i++){
        moyenne += liste[i].age;
    }
    return moyenne/liste.length;
};

// le corps du programme

afficherListeAnimal (tabChats);
console.log(`La moyenne d'age des ${tabChats.length} chats est de : ${calculerMoyenneAge(tabChats)} ans.`);
console.log("------------------------------------------");
afficherListeAnimal (tabChiens);
console.log("La moyenne d'age des " + tabChiens.length + " chiens est de : " + calculerMoyenneAge(tabChiens) + " ans.")
