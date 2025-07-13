// const randomNumber = parseInt(Math.random() * 10+1 );
// console.log(randomNumber);

// const submit = document.querySelector('#subt');
// const userInput = document.querySelector('#guessField');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.resultParas');

// const p = document.createElement('p');

// let prevGuess = [];
// let numGuess = 1;

// let playGame = true;

// if (playGame) {
//     submit.addEventListener('click',function(e){
//     e.preventDefault()
//     const guess = parseInt(userInput.value);
//     validateGuess(guess)
// })
// }



// function validateGuess(guess){
//     if (isNaN(guess)) {
//         alert('Please enter a valid number')
//     }
//     else if (guess <= 1 || guess > 10) {
//         alert('Please enter a number between 1 and 10')
//     } else {
//         prevGuess.push(guess);
//        if (numGuess === 3) {
//            displayGuess(guess);
//             displayMessage(`Game Over! <br>Random number was ${randomNumber}`);
//             endGame();
//        } else{
//             displayGuess(guess)
//             checkGuess(guess)
//        }
//     }
// }
// function checkGuess(guess){
//     if (guess === randomNumber){
//         displayMessage(`You won! you guess it right `);
//         endGame();
//     }
//      else if (guess < randomNumber){
//         displayMessage(`Your guess is too low !`)
//     } 
//     else if (guess > randomNumber){
//       displayMessage(`Your guess is too high !`)
//     }
        
// }
// function displayGuess(guess) {
//     userInput.value = ''
//     guessSlot.innerHTML += `${guess}   `;
//     numGuess++;
//     remaining.innerHTML = `${4 - numGuess}`
// }

// function displayMessage(message){
//     lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// function endGame() {
//     userInput.value = '';
//     userInput.setAttribute('disabled',);
//     p.classList.add('button')
//     p.innerHTML = `<h2>Start new game</h2>`;
//     startOver.appendChild(p)
//     playGame = false ;
//     newGame();
// }
// function newGame(){
//    const newGameButton = document.querySelector('#newGame');
//    newGameButton.addEventListener('click', function(e){
//     randomNumber = parseInt(Math.random() * 10 + 1);
//     prevGuess = [];
//     numGuess = 1;
//     guessSlot.innerHTML = '';
//     remaining.innerHTML = '3';
//     userInput.removeAttribute('disabled');
//     startOver.removeChild(p);
//     playGame = true;
//    })
// }
let randomNumber = parseInt(Math.random() * 10 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

const formError = document.createElement('div');
formError.className = 'form-error';
userInput.parentNode.insertBefore(formError, userInput.nextSibling);

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  formError.style.display = 'none';
  formError.textContent = '';
  if (isNaN(guess)) {
    formError.textContent = 'Please enter a valid number';
    formError.style.display = 'block';
    return;
  } else if (guess < 1) {
    formError.textContent = 'Please enter a number more than 1';
    formError.style.display = 'block';
    return;
  } else if (guess > 10) {
    formError.textContent = 'Please enter a number less than 10';
    formError.style.display = 'block';
    return;
  } else {
    prevGuess.push(guess);
    displayGuess(guess);
    if (message === 'You won!') {
    lowOrHi.innerHTML = `<h2 style="color: red; font-weight: bold;">${message}</h2>`;
  } else {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
  }
    } else if (prevGuess.length === 3) {
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${3 - prevGuess.length}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  startOver.appendChild(p);
  playGame = false;
  newGame();
}


function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 10 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = '3';
    userInput.removeAttribute('disabled');
    if (startOver.contains(p)) {
      startOver.removeChild(p);
    }
    playGame = true;
  });
}
