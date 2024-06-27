let computer="paper";
let human="paper";
switch(computer){
    case human:
        console.log("Tie Game!");
        break;
    case "rock":
        if(human==="scissors"){
            console.log("Computer wins");
        }
        else{
            console.log("Human wins");
        }
        break;
    case "paper":
        if(human==="rock"){
            console.log("Computer wins");
        }
        else{
            console.log("Human wins");
        }
        break;
    default:
        if(human==="paper"){
            console.log("Computer wins");
        }
        else{
            console.log("Human wins");
        }
        break;
}