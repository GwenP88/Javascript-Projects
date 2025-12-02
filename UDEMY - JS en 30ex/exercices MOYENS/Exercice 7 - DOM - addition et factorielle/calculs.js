var configuration = {
    addition : function(nombre){
        var resultat = 0;
        for(var i = 1 ; i <= nombre ; i++){
            resultat += i;
        }
        return resultat;

    },
    multiplication : function(nombre){
        var resultat = 1;
        for(var i = 1 ; i <= nombre ; i++){
            resultat *= i;
        }
        return resultat;
    }
};