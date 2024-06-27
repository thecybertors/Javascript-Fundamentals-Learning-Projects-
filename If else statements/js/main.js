let soup="French Bun Soup";
let customerIsBanned=false;
let crackers=false;
let reply;
if(customerIsBanned){
    reply="No soup for you!";
}
else if(soup && crackers){
    reply="Here is your soup and crackers";
}
else if(soup){
    reply=`Here is your ${soup}`;
}
console.log(reply);