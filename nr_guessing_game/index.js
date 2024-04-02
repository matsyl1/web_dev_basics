// NR_GUESSING_GAME

const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a nr between ${min} - ${max}: `);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Enter a valid nr.");
    }
    else if(guess < min || guess > max){
        window.alert(`Enter a nr between ${min} - ${max}: `);
    }
    else {
        attempts++
        if(guess < answer){
            window.alert("Too low - try higher.");
        }
        else if(guess > answer){
            window.alert("Too high - try lower.");
        }
        else{
            window.alert(`BINGO! You guessed the correct nr (${answer}) in ${attempts} attempts.`);
            running = false;
        }
    }
}