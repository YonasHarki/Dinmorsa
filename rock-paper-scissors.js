let scores = JSON.parse(localStorage.getItem('scores'));

         
let computerMove = '';

function aidsbooger(A) {
const randomNumber = Math.random();
playerMove = A;
let result = '';

if (randomNumber < 1/3) {
   computerMove = 'rock'
} else if (randomNumber >= 1/3 && randomNumber <= 2/3) {
   computerMove = 'paper'
} else {
   computerMove = 'scissors'
};

if (playerMove === 'rock') {
   if (computerMove === 'rock') {
       result = 'Draw'
   } else if (computerMove === 'paper') {
       result = 'Loss'
   } else if (computerMove === 'scissors') {
       result = 'Win'
   }
};

if (playerMove === 'paper') {
   if (computerMove === 'paper') {
       result = 'Draw'
   } else if (computerMove === 'rock') {
       result = 'Win'
   } else if (computerMove === 'scissors') {
       result = 'Loss'
   }
};

if (playerMove === 'scissors') {
   if (computerMove === 'scissors') {
       result = 'Draw'
   } else if (computerMove === 'rock') {
       result = 'Loss'
   } else if (computerMove === 'paper') {
       result = 'Win'
   }
};

if (result === 'Win') {
   scores.Win += 1
} else if (result === 'Loss') {
   scores.Loss += 1
} else if (result === 'Draw') {
   scores.Draw += 1
};

console.log(`You picked ${A} computer picked ${computerMove} ${result}`);

console.log(scores);


localStorage.setItem('scores' , JSON.stringify(scores));

aidsBOOGER()

if (result === 'Win') {
   document.querySelector('.js-boogerbooger').innerHTML = 'You win broski'
} else if (result === 'Loss') {
   document.querySelector('.js-boogerbooger').innerHTML = 'You lose lil nibba'
} else if (result === 'Draw') {
   document.querySelector('.js-boogerbooger').innerHTML = 'Its a draw'
}

   


document.querySelector('.js-aidsbooger').innerHTML = `
   You

   <img src="images/${playerMove}-emoji.png" class="move-icon">
    -
   <img src="images/${computerMove}-emoji.png" class="move-icon">

   Computer
   
`
;

};

function boogeraids() {
scores.Win = 0;
scores.Draw = 0;
scores.Loss = 0;
console.log('Score has been reset');
let result = '';
console.log(scores);
aidsBOOGER();
document.querySelector('.js-aidsbooger').innerHTML = 'The score has been reset';
};

function aidsBOOGER() {
let result = '';
document.querySelector('.js-boogeraids').innerHTML = `Wins: ${scores.Win}, Losses: ${scores.Loss}, Ties: ${scores.Draw}`;
}

