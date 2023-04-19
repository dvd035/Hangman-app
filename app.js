 


//dom for showing on page
const puzzleElement = document.querySelector('#puzzle')
const guessesElement = document.querySelector('#guesses')
const game1 = new Hangman('Car Parts', 2)

puzzleElement.textContent = game1.puzzle
guessesElement.textContent = game1.statusMsg
console.log(game1.status);


//getting user input guess
window.addEventListener('keypress', function(e){
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleElement.textContent = game1.puzzle
    guessesElement.textContent = game1.statusMsg
    console.log(game1.status); 
})  