// exercice 9 : les objets - la voiture

// déclarer l'objet voiture. attention séparée chaque propriété par des virgules

/*
var voiture = {
    immatriculation : "AB1234CD",
    marque : "Yotota",
    annee : 2002
}
*/

// on peut faire des objets d'objets :


var voiture = {
    immatriculation : "AB1234CD",
    marque : "Yotota",
    annee : 2002,
    prix : 3500,
    caracteristiques : {
        nbDeKm : 150000,
        couleur : "bleue",
        nbDePortes : 5,
        BoiteDeVitesse : "automatique",
    }
}

// deux écritures pour le log

/*
console.log("La voiture d'immatriculation " + voiture.immatriculation + " , de marque " + voiture.marque + " , date de " + voiture.annee);

console.log(`La voiture d'immatriculation ${voiture.immatriculation}, de marque ${voiture.marque}, date de ${voiture.annee}.`);
*/

console.log(`La voiture de marque ${voiture.marque} et d'immatriculation ${voiture.immatriculation}, date de ${voiture.annee}. 
Elle a ${voiture.caracteristiques.nbDeKm} kilomètres au compteur. 
Elle est de couleur ${voiture.caracteristiques.couleur} et a ${voiture.caracteristiques.nbDePortes} portes.
La boite de vitesse est ${voiture.caracteristiques.BoiteDeVitesse}. 
Elle est en vente au prix de ${voiture.prix} euros. `);