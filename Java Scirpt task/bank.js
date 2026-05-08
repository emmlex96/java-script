const account = { balance: 500, isBlocked: false };
let message;

if (account.isBlocked === true) {
    message = "Account blocked";
} else if (account.balance < 100) {
    message = "low balance";
} else {
    message = "ok";
}

console.log(message); 

console.log("Final Account Status: " + message);

