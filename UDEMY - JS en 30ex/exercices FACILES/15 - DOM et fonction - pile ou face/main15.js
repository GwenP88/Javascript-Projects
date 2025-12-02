// solution 1 - sans generer de nombre aléatoires

/*
var maDiv = document.querySelector("div");
var nbDeClic = 0;
    function cliquer(){
        nbDeClic++;
            if(nbDeClic%2 === 0){
                maDiv.innerHTML = "pile";
            }else{
                maDiv.innerHTML = "face";
            }};
*/

// solution 2 : en gérénrer un nombre aléatoire avec random

/*
var maDiv = document.querySelector("div");
function cliquer(){
    maDiv.innerHTML = pileOuFace();
}

function pileOuFace(){
    var random = Math.floor(Math.random() * 2) 
    // la focntion Math.random seul va générer un chiffre aléatoire entre 0 et 1. Si on veut un nombre entre 1 et 2, on multiplie la focntion par 2. avec ajout de math.floor va être la pour arrondir l'ensemble (et donc nombre entier)
    // ici la focntion math.random nous permet de récupérer un chiffre avec deux valeur = soit 0 soit 1.
    //if(random >=1) return "face";
    //else return "pile";
    // ces deux phrases peuvent etre raccourcies en une
    return (random >=1) ? "face" : "pile";
    // le ? remplace le if et les : le else (ternaire)
}
*/

// possibilité de la faire aussi sans l'attribut onclick sur le html du button

/*
var maDiv = document.querySelector("div");
var monBouton = document.querySelector("button");

monBouton.addEventListener("click", function(){
    maDiv.innerHTML = pileOuFace();
});

function pileOuFace(){
    var random = Math.floor(Math.random() * 2) 
    return (random >=1) ? "face" : "pile";
}
*/

// solution 3  avec Jquery

$("button").on("click", function(){
    $("div").html(pileOuFace());
});
// $("button") = permet de récupérer le bouton (a la place de querySelector)
// .on = permet de lancer la gestion d'event en jquery (a la place de addEventListener)
// $("div") = pour récupérer la div
// .html = fonction html pour modifier le contenu html de la balise div (remplace le inner.html)

function pileOuFace(){
    var random = Math.floor(Math.random() * 2) 
    return (random >=1) ? "face" : "pile";
};