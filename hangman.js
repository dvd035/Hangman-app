class Hangman{
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'Playing'
    }

    //getting status
    getStatus(){
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
    
        if(this.remainingGuesses === 0){
            this.status = 'Failed'
        }else if(finished){
            this.status = 'Finished'
        }else{
            this.status = 'Playing'
        }  
    }

    //status message
    get statusMsg(){
        const st = this.status
        if(st === 'Playing'){
            return `Guesses left: ${this.remainingGuesses}`
        }else if(st === 'Failed'){
            return `Nice try! the word was "${this.word.join('')}".`
        }else if(st === 'Finished'){
            return `Great work! You guessed the word.`
        }
    }

    //getting puzzle
    get puzzle(){
        let puzzle = ''
        this.word.forEach((letter)=>{
            if(this.guessedLetters.includes(letter) || letter === ' '){
                puzzle += letter
            }else{
                 puzzle += '*'
            }
        })
    
        return puzzle
    }

    //check for unique and bad guesses
    makeGuess(guess){
        guess = guess.toLowerCase()

        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
    
        if(this.status === !'Playing'){
            return
        }
    
        if(isUnique){
            this.guessedLetters.push(guess)
        }
    
        if(isUnique && isBadGuess){
            this.remainingGuesses--
        }
    
        this.getStatus()
        this.statusMsg
    }
}







 

