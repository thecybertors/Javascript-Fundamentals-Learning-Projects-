let confirmation=confirm("Are your ready to play rock, paper, scissors?");
if(confirmation){
    let userInput=prompt("Rock, paper or scissors?");
    userInput=userInput.trim().toLowerCase();
    if(userInput==="rock" || userInput==="paper" || userInput=="scissors"){
        let computerInput=Math.floor(Math.random()*3+1);
        computerInput=computerInput===1 ? "rock" :  computerInput===2?"paper" : computerInput===3 ? "scissor":null;
        let result= userInput===computerInput?"Tie Breaker" : userInput==="rock" && computerInput==="paper" ? "Computer wins" : userInput==="paper" && computerInput=="scissors" ? "Computer wins": userInput==="scissors"&&computerInput==="rock"?"Computer wins":"Human Wins";
        alert(`you chose ${userInput} and computer chose ${computerInput}\n ${result}`);
        }
    else{
        alert("Please enter either rock,paper or scissors");
    }
}
else{
    alert("Ok the. Maybe Next Time.");
}
let replay=confirm("Do you want to play again?");
if(replay){
    location.reload();
}
else{
    alert("Ok see you later.");
}