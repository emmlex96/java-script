const prompt = require("prompt-sync")();

let num = prompt("Enter a number: ");
num = Number(num);

let double = num * 2;
console.log(double);
