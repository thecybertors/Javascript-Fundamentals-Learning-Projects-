let arr = ["albert","tesla","human","AI"];
console.log(arr);

arr.push("steve");
console.log(arr);

arr.unshift("jobs");
console.log(arr);

arr.shift();
console.log(arr);

arr.pop();
console.log(arr);

//splice(position, how much elements to be replaced, content to replace)

arr.splice(1,1,"developer");
console.log(arr);

arr.splice(3,0,"freelance");
console.log(arr);

arr.splice(1, 3, "cybersecurity");
console.log(arr);

const newString=arr.join();
console.log(newString);

const newArray=newString.split(",");
console.log(newArray);

let newArray1=arr.slice(1, 2);
console.log(newArray1);

arr.reverse();
console.log(arr);

const myArrayA=["A","B","C"];
const MyArrayB=["D","E","F"];
var nextArray=MyArrayB.concat(myArrayA);
console.log(nextArray);

var myArray1=["A","B","C"];
var MyArray2=["D","E","F"];
var nextArr=[myArray1,MyArray2];
console.log(nextArr);
var nextArr=[...myArray1,...MyArray2];
console.log(nextArr);

//multidimensional arrays
var arr1=["A","B","c","d"];
var arr2=["e","f","G","H"];
var arr3=[arr1,arr2];
console.log(arr3);
console.log(arr1[0]);
console.log(arr2[2]);
console.log(arr3[0][0]);
console.log(arr3[1][2]);

var arr1=["A","B","c","d"];
var arr2=["e","f","G","H"];
var arr3=["I","J","k","l"];
var arr4=["m","n","O","P"];
var arr5=[arr1,arr2];
var arr6=[arr3,arr4];

var arr7=[arr5,arr6];
console.log(arr7);
console.log(arr7[0][0][0]);
console.log(arr7[1][0][2]);

