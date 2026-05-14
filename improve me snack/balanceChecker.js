function checkBalance(account) {
  if (account.balance < 1000) {
    return "Low Balance";
  } else {
    return "Sufficient Balance";
  }
}

const account = { accountName: "David", balance: 500 };
console.log(checkBalance(account));
