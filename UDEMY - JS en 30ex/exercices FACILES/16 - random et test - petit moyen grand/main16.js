// solution 1

/*
var random = Math.floor(Math.random() * 21);
if(random < 7){
    console.log(random + "\npetit");
};
if(random > 15){
    console.log(random + "\ngrand");
};
if(random >= 7 && random <= 15){
    console.log(random + "\nmoyen");
};
*/

// solution 2 : 

var random = Math.floor(Math.random() * 21);
if(random < 7){
    console.log(random + "\npetit");
}else if(random < 15){
    console.log(random + "\nmoyen");
}else{
    console.log(random + "\ngrand");
};

