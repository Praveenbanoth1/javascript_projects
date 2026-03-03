let outPutElement = document.getElementById("outPut");
let guessNumberElement = document.getElementById("guessNumber");
let randomNumberElement = Math.ceil(Math.random()*100);
console.log(randomNumberElement);

function submitBtn(){
    let guessNumberValue = guessNumberElement.value;
    let randomNumberElements = parseInt(randomNumberElement)

    if (randomNumberElements > guessNumberValue) {
        outPutElement.textContent = "Guessed Number is too Low! Try Again";
    }

    else if (randomNumberElements < guessNumberValue) {
        outPutElement.textContent = "Guessed Number is too High! Try Again";
    }

    else if (randomNumberElements === guessNumberValue) {
        outPutElement.textContent = "Guessed number is correct"
    }
}