//Exercice 1 : inverser la valeur de deux variables

//2 possibilités

//possibilité 1 : 
let a = 1;
let b = 5;

console.log("-------------------AVANT INVERSION----------------------");
console.log("A : " + a);
console.log("B : " + b);

console.log("-------------------APRES INVERSION----------------------");

a = a + b;
b = a - b;
a = a - b;

console.log("A : " + a);
console.log("B : " + b);

//possibilité 2 : 
let c = 4;
let d = 10;

console.log("-------------------AVANT INVERSION----------------------");
console.log("C : " + c);
console.log("D : " + d);

console.log("-------------------APRES INVERSION----------------------");

let tmp = c;
c = d;
d = tmp;

console.log("C : " + c);
console.log("D : " + d);