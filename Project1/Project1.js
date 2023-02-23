//Generate random number
var randomNumber = Math.floor(Math.random() * 100);
console.log("Random Number: " + randomNumber)

//Global Counter
let counter = 0;


//Game function
function game() {


    // get input number
    const inputNumber = document.getElementById("numberInput").value;
    console.log(inputNumber);


    const bottomText = document.getElementById("bottomText");
    bottomText.innerHTML = "Awaiting Guess...";

    const guessText = document.getElementById("guessText");
    const topText = document.getElementById("topText");

    //compare input number to random number
    if (inputNumber == randomNumber) {
        topText.innerHTML = "You guessed " + inputNumber;
        counter++
        bottomText.innerHTML = "This number is correct! This took you " + counter + " tries.";
        guessText.innerHTML = "Number of guesses: " + counter;

        //disables guess button
        submitBtn.removeEventListener("click", game);

    }
    //makes sure the number is inbetween 100 and 0
    else if (inputNumber > 100 || inputNumber < 1) {
        topText.innerHTML = "This integer is outside the guessing range.";
        bottomText.innerHTML = "Please guess again";
        guessText.innerHTML = "Number of guesses: " + counter;
    }
    //tells user if number is too high
    else if (inputNumber > randomNumber) {
        topText.innerHTML = "You guessed " + inputNumber;
        bottomText.innerHTML = "Oh no! That's too high buddy";
        counter++
        guessText.innerHTML = "Number of guesses: " + counter;
    }
    //tells user if number is too low
    else if (inputNumber < randomNumber) {
        topText.innerHTML = "You guessed " + inputNumber;
        bottomText.innerHTML = "Oh no! That's too low buddy";
        counter++
        guessText.innerHTML = "Number of guesses: " + counter;
    }
    //checks to make sure value entered is an integer
    else {
        topText.innerHTML = "Please enter an integer";
        bottomText.innerHTML = "Please guess again";
    }

}

function reset() {

    //resets counter
    counter = 0

    //resets all html 
    const bottomText = document.getElementById("bottomText");
    bottomText.innerHTML = "Awaiting Guess...";

    const guessText = document.getElementById("guessText");
    guessText.innerHTML = "Number of guesses: " + counter;


    const topText = document.getElementById("topText");
    topText.innerHTML = "Good luck, have fun!";


    //new random number
    randomNumber = Math.floor(Math.random() * 100);
    console.log("New Random Number: " + randomNumber)

    //enables guess button again
    submitBtn.addEventListener("click", game);


}
//************* Button ******************/
// get the DOM <button> object
const submitBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");


// connect the button to the game and reset function upon "click" event
submitBtn.addEventListener("click", game);
resetBtn.addEventListener("click", reset);


