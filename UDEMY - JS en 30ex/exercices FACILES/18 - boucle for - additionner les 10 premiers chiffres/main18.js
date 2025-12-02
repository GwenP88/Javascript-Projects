
var resultat = 0;

for(let i = 1; i <= 10; i++){
        resultat += i;
        console.log("Etape " + i + " : " + resultat)
};

console.log("le résultat de la somme des 10 premiers chiffre est égal à " + resultat);

var resultatInv = 0;

for(let x = 10; x >= 1 ; x--){
    resultatInv += x;
    console.log("Etape " + x + " : " + resultatInv)
};

console.log("le résultat de la somme des 10 premiers chiffre est égal à " + resultatInv);

