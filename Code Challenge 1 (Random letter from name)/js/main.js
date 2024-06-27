const myName="Albert";

nameLength=myName.length;
randomNum=Math.floor(Math.random()*nameLength);
console.log(myName.charAt(randomNum));

//single line code

console.log(myName.charAt(Math.floor(Math.random()*myName.length)));