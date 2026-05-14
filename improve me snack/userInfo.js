const prompt = require("prompt-sync")();

function credential(username, userpassword){

    
    if(username == "BigSiko" && userpassword == "55446556"){
    
    return "login successful";
    }else
    return "invalid login";
      
    return { username, userpassword};
    }

let username = prompt("Enter name: ");
let userpassword = prompt("Enter password: "); 
     
    let result = credential(username, userpassword);
    
    console.log(result);

