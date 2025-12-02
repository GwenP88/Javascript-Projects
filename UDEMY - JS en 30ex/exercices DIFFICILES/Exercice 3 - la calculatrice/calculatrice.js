// variables
let touches = document.getElementById ("touches");
let ZoneResultat =  document.getElementById ("zoneResultat");
let zoneDetail = document.getElementById ("zoneDetail")

let chiffre = "";
let operateur = "+";
let recap = "";
let resultat = 0;
let nbCalcul = 0;
let reinit = true;

// programmes
touches.addEventListener("click", function(event){
    let toucheCal = event.target.id;

    if(toucheCal.substring(0,1) === "c"){
        chiffre += toucheCal.substring(2,1);
        ZoneResultat.value = chiffre;
    }else if(toucheCal.substring(0,1) === "b"){
        managerOperation();
        switch (toucheCal){
            case "badditionner" : operateur = "+";
            break;
            case "bsoustraire" : operateur = "-";
            break;
            case "bmultiplier" : operateur = "*";
            break;
            case "bdiviser" : operateur = "/";
            break;
            default :
        };
        if(reinit){
            recap ="";
            reinit = false
        }
        if(nbCalcul > 1) recap += "<br />"
        recap += resultat + " " + operateur + " "

    }else if(toucheCal === "virgule"){
        chiffre += ".";
    }else if(toucheCal === "egal"){
        managerOperation();
        recap += " = " + resultat;
        nbCalcul = 1;
        reinit = true;
    };
      zoneDetail.innerHTML = recap;
      zoneDetail.scrollTop = zoneDetail.scrollHeight - zoneDetail.clientHeight;
});


// fonctions

function managerOperation(){
    if(chiffre !== ""){
        resultat = calOperation (operateur, resultat, parseFloat(chiffre));
        if(nbCalcul > 0){
            recap += parseFloat(chiffre);
        }
        ZoneResultat.value = resultat;
        chiffre = "";
        nbCalcul++;
    }else{
        let sautDeLigne = recap.lastIndexOf("<br />")
        recap = recap.substring(0,sautDeLigne);
    }; 
};

function calOperation (operateur, chiffreA, chiffreB){
    var calcul = 0;
    switch(operateur){
        case "+" : calcul = chiffreA + chiffreB;
        break;
        case "-" : calcul = chiffreA - chiffreB;
        break;
        case "*" : calcul = chiffreA * chiffreB;
        break;
        case "/" : calcul = chiffreA / chiffreB;
        break;
    }
    return calcul;
};