const myNumber=42;
const myFloat=42.0;
const myString="12.34abcd";

console.log(Number(myString)===myNumber);

console.log(Number("Hello"));
console.log(Number("12434"));
console.log(Number(true));

console.log(parseFloat(myFloat));
console.log(parseFloat(myNumber));
console.log(parseFloat(myString));

console.log(Number.parseFloat(myString).toFixed(1));
console.log(Number.parseInt(myString).toFixed(1));

console.log(Number.isNaN("Hello"));
console.log(isNaN("Hello"));