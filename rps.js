// rps.js

console.log("You are here");

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

var functionName = function (ev) {

	ev = ev || window.event; // browser compatibility
	var target = ev.target || ev.srcElement; //browser c...
	var choice = target.id; //sets a variable from the id
	
	console.log(target);
	console.log(choice);
    
    var userChoice =choice;
    alert("you chose " + userChoice);
    
var computerChoice = Math.random();
    
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}
    alert("the computer chose " + computerChoice);
    
    
    
    var compare = function(choice1, choice2) {
    if (choice1 === choice2)  {
        return "The result is a tie!";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors wins";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === “paper”) {
            return “scissors wins";
        } else {
            return “rock wins";
        }
    }
};

alert(compare(userChoice, computerChoice));
    
};


rock.addEventListener('click', functionName);
paper.addEventListener('click', functionName);
scissors.addEventListener('click', functionName);