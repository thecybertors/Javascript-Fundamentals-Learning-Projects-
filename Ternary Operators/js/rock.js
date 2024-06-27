let human="paper";
let machine="rock";
let output= human===machine?"Tie breaker": human==="rock" && machine === "paper"? 
    "Machine Wins": 
human==="paper" && machine==="scissor" ? 
    "Machine Wins" : 
human==="scissor" && machine==="rock"?
"Machine Wins" : "Human Wins";
console.log(output);