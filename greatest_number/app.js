function Guesser(number, lives) {
    this.number = number
    this.lives = lives
}

Guesser.prototype.guess = function(n) {
    if ( n > this.number) {
        console.log(`${n} is too big`)

        if(this.lives !== 0) { 
        //if the user guesses a number too big - 1 off the total lives
        this.lives = this.lives -1
        console.log(`You ${this.lives} lives left`)
    } else (
        console.log(`Oopse! You dont have anymore lives`)
    )

    } else if ( n < this.number) {

        if (this.life !== 0) {
         // if the user guesses a number to small - 1 off the total lives
            this.lives = this.lives -1
        } else {
        console.log(`Oopse! You dont have anymore lives`)
        }
               
    } else if (n === this.number) {
        console.log(`${n} is the correct number!`)
    }
}


const myGuess = new Guesser( 10, 2 )

 myGuess.guess(50)
 myGuess.guess(7)
 myGuess.guess(10)
 myGuess.guess(27)

