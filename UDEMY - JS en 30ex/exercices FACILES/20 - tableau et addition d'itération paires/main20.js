var tableau = [2,6,10,3,8,7,20];
var resultat = 0;

for (var i = 0 ; i < tableau.length ; i++){
    if(tableau[i] %2 === 0){
        resultat += tableau[i];
        console.log("itération : " + i + " : " + resultat)
    }else{
        console.log("itération : " + i + " : " + " non paire")
    }
};

console.log("le total est de : " + resultat)