let inputPseudo = document.querySelector("#pseudo");
let inputChiffre = document.querySelector("#chiffre");
let boutonAddition = document.querySelector("#addition");
let boutonFactorielle = document.querySelector("#factorielle");
let divResultat = document.querySelector("#resultat");

function afficherResultat (calcul){
    divResultat.innerHTML = "<h1>Bonjour  " + inputPseudo.value + "</h1>";
    divResultat.innerHTML += "<div> Le resultat du calcul demandé est : " + calcul + "</div>";
};

boutonAddition.addEventListener ("click", ()=>{
    let calculResultat = configuration.addition(parseInt(inputChiffre.value));
    afficherResultat(calculResultat)
});

boutonFactorielle.addEventListener ("click", ()=>{
    let calculResultat = configuration.multiplication(parseInt(inputChiffre.value));
    afficherResultat(calculResultat)
});