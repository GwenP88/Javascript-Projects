// le premier sportif : toto

let sportif1 = {
    nom : "Toto", 
    age : 25, 
    poids : 80, 
    taille : 180,

    affichage : function(){
        var txt = "Nom : " + this.nom + "\n";
        txt += "Age : " + this.age + "\n";
        txt += "Poids : " + this.poids + "\n";
        txt += "Taille : " + this.taille;
        console.log(txt);
    },

    getForce : function(){
        return (this.taille * this.poids) / this.age;
    },

};

// le deuxième sportif : marcel

let sportif2 = {
    nom : "Marcel", 
    age : 32, 
    poids : 100, 
    taille : 175,

    affichage : function(){
        var txt = "Nom : " + this.nom + "\n";
        txt += "Age : " + this.age + "\n";
        txt += "Poids : " + this.poids + "\n";
        txt += "Taille : " + this.taille;
        console.log(txt);
    },

    getForce : function(){
        return (this.taille * this.poids) / this.age;
    },
};

// programme

if(sportif1.getForce() > sportif2.getForce()){
    console.log("Toto est plus fort que Marcel! Voici ses informations :");
    sportif1.affichage()
    console.log(`Force : ${sportif1.getForce()}`)
}else{
    console.log("Marcel est plus fort que Toto ! Voici ses informations :");
    sportif2.affichage()
    console.log(`Force : ${sportif2.getForce()}`)
};