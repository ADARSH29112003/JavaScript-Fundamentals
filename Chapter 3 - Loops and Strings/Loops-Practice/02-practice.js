//2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let gamenum = 25;

let usernum = prompt("Guess the game number = ");

while(usernum != gamenum){
    usernum = prompt("You entered wrong number. Guess gain = ");
}

console.log("Congragulations, you entered the right number");