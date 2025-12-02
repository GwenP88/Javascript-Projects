const monBoutton = document.querySelector("button");
const maDiv = document.querySelector("div");

monBoutton.addEventListener("click", ()=>{
    var texte = "";
    for(var i = 1 ; i <= 10 ; i++){
        texte += "3 x " + i + " = " + (3*i) + "<br />"
        }
        maDiv.innerHTML = texte;
});
