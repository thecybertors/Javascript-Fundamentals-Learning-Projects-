const makeError=()=>{
  try{
    const name="hello";
    name="hii";
  }
  catch(err){
    console.log(err);
    console.warn(err);
    console.error(err);
    console.log(err.name);
    console.log(err.stack);
    console.log(err.message);
  }
};
makeError();
let i=0;
const thrownewError=()=>{
  while(i<=5){
  try{
    if(i%2!==0)
    {
    throw new Error("This is a custom error");
    }
    console.log("Even number");
  }
  catch(err)
  {
      console.error(err.stack);
  } 
    finally{
      console.log("..finallyyyy");
      i++;
    }
  }
};
thrownewError();