const prompt = require("prompt-sync")();
let userInput =prompt("Enter a number ");
let output = getNegative(userInput);

function getNegative(number){

if(number < 0){
return "Negetive"
}else if(number > 0){
return "Positive"
}else{
return "Zero"
}
}

console.log(output);
