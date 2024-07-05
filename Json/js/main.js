const myObj={
  car: "Ferrari",
  bike: "BMW",
  countries_visited: ["india","america","china","africa"], 
  name: function(){
  console.log("Albert");
  }
};
console.log(myObj);
strObj=JSON.stringify(myObj);
console.log(strObj);
console.log(JSON.parse(strObj));
myObj.name();