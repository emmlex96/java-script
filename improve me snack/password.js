function removePassword(user) {
  delete user.password;
  return user;
}

const user = { username: "admin", password: "12345" };
console.log(removePassword(user)); 
