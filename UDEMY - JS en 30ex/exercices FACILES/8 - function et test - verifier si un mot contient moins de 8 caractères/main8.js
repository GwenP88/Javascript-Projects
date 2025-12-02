function verifierSiMotValide (mot){
    if(mot.length < 8){
        console.log(`Le mot contient ${mot.length} caracteres.`);
        //===("Le mot contient " + mot.length + " caracteres.")
        //===("Le mot contient %d caracteres." , mot.length)
    }else{
        console.log("le mot " + mot + " contient plus de 8 caracteres.");
    }
}

var mot1 = "hello";
var mot2 = "Gwenaelle";

verifierSiMotValide (mot1);
verifierSiMotValide (mot2);

