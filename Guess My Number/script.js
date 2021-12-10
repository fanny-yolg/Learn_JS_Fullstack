'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct number' ;
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value)
*/

let secretNumber = Math.trunc((Math.random() * 20) + 1);
let score = 20;
let highscore = 0

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const displayNumber = function(number) {
    document.querySelector('.number').textContent = number ; 
}

const displayScore = function(score) {
    document.querySelector('.score').textContent = score ; 
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        displayMessage('⛔ No Number') ;
    } else if(guess === secretNumber){
        displayMessage('🎉 Correct number') ;
        displayNumber(secretNumber) ;

        if(highscore < score){
            highscore = score
            document.querySelector('.highscore').textContent = highscore;
        }

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else if(guess !== secretNumber) {
        if(score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low') ;
            score--;
            displayScore(score) ;
        } else {
            displayMessage('🎇 You lost the game') ;
            displayScore(0) ;
        }
    }
})

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc((Math.random() * 20) + 1);
    score = 20;

    displayNumber('?') ;
    document.querySelector('.guess').value = '';
    displayScore(score) ;
    displayMessage('Start guessing...') ;

    document.querySelector('body').style.backgroundColor = '#222' ;
    document.querySelector('.number').style.width = '15rem' ;
})
