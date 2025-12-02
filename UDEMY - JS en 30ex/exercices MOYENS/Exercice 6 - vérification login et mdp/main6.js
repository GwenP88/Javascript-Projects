let baliseLog = document.getElementById("log");
let baliseMdp = document.getElementById("mdp");
let baliseDivLog = document.getElementById("errorLog");
let baliseDivMdp = document.getElementById("errorMdp");


baliseLog.addEventListener("keyup", ()=>{ // keyup = lors de la saisie
        let regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/
        if(!regex.test(baliseLog.value)){
                baliseDivLog.style.border = "solid red 2px";
                baliseLog.style.backgroundColor = "red";
                baliseDivLog.innerHTML = "veuillez saisir un Email valide";
                
        }else{
                baliseDivLog.style.border = "solid green 2px";
                baliseLog.style.backgroundColor = "green";
                baliseDivLog.innerHTML = "L'Email est valide !";
        }
});

baliseMdp.addEventListener("blur", ()=>{ //blur = quand on nest plus dans le zone de saisie, quand on l'a quitté
        var caracDeci = /\d/
        var caracSpe = /[$!@&]/
        var lettres = /[a-zA-Z]/
        var error = "";

        if(baliseMdp.value.length <6){
                error += "<li> est trop court (minimum 6 caractères) </li>";
        }else if(baliseMdp.value.length >8){
                error += "<li> est trop long (maximum 8 caractères) </li>";
        };
        
        if (!baliseMdp.value.match(caracDeci)){
                error += "<li> doit contenir au moins un chiffre </li>";
        };
        
        if(!baliseMdp.value.match(caracSpe)){
                error += "<li> doit contenir au moins un caractère spécial : $, &, ! ou @ </li>";
        };

        if(!baliseMdp.value.match(lettres)){
                error += "<li> doit contenir au moins une lettre </li>";
        };


        if(error !== ""){
                baliseDivMdp.style.border = "solid red 2px";
                baliseDivMdp.innerHTML = "Le mot de passe : <ul>" + error + "</ul>";
                baliseMdp.style.backgroundColor = "red";
                
        }else{
                baliseDivMdp.style.border = "solid green 2px";
                baliseDivMdp.innerHTML = "Le mot de passe est correct";
                baliseMdp.style.backgroundColor = "green";
                
        }
});
