let userName=prompt("Enter your name");
if(userName){
    console.log(`Hello ${userName}`);
}
else if(userName.length===0){
    console.log("Please enter your username");
}
else{
        console.log("Please enter your username");
}
console.log(userName.length);
console.log(userName.trim().length);
console.log(userName.trim());