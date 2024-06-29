//Global Scope
let x=6; //block scoped
var y=0; //function scoped
const z=4; //block scoped

console.log(`Global Scope: ${x}`);
console.log(`Global Scope: ${y}`);
console.log(`Global Scope: ${z}`);

function myFunction(){
    const z=6;
    var y=5;
    console.log(`Function Scope: ${x}`);
    console.log(`Function Scope: ${y}`);
    console.log(`Function Scope: ${z}`);
    {
        var y=12;
        const x=5;
        const z=8;
        console.log(`Block Scope: ${x}`);
        console.log(`Block Scope: ${y}`);
        console.log(`Block Scope: ${z}`);
    }
}
myFunction();