const prompt = require("prompt-sync")();

let age = prompt("enter age");
let country = ("enter country: ");

const user = {
age: age,
 country: country

}
if (user.age >= 18 &&  country === "nigeria") console.log("Access granted: ");

else console.log("Access denied");

