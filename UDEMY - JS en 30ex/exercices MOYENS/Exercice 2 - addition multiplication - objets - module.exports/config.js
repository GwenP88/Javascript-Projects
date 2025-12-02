var configuration = {
    addition : function(nombre){
        var resultat = 0;
        for(var i = 1 ; i <= nombre ; i++){
            resultat += i;
            console.log("Step : " + i + " ; Total : " + resultat);
        }
        console.log("Le resultat de la somme des " + nombre + " premiers nombres est : " + resultat);

    },
    multiplication : function(nombre){
        var resultat = 1;
        for(var i = 1 ; i <= nombre ; i++){
            resultat *= i;
            console.log("Step : " + i + " ; Total : " + resultat);
        }
        console.log("Le resultat de la multiplication des " + nombre + " premiers nombres est : " + resultat);
    }
};

module.exports = configuration;