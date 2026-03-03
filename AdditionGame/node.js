let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");
firstNumberElement.textContent = Math.ceil(Math.random()*100);
secondNumberElement.textContent = Math.ceil(Math.random()*100);
let successMessage = "Congratulations! You got Right.";
let tryAgainMessage  = "Please Try Again!";

function buttonRestart() {
    let firstRandomNumber = Math.random()*100;
    let secondRandomNumber = Math.random() *100;
    firstNumberElement.textContent = Math.ceil(firstRandomNumber);
    secondNumberElement.textContent = Math.ceil(secondRandomNumber);
    userInputElement.value = "";
    gameResultElement.textContent = "";

}
buttonRestart()

function buttonCheck(){
    let fisrtRandomNumberElemnet = parseInt(firstNumberElement.textContent);
    let secondRandomNumberElement = parseInt(secondNumberElement.textContent);
    let userSumElement = parseInt(userInputElement.value);
    let sumOfBothTheNumbers = fisrtRandomNumberElemnet + secondRandomNumberElement;

    if (sumOfBothTheNumbers === userSumElement) {
        gameResultElement.textContent = successMessage;
        gameResultElement.style.backgroundColor = "#028a0f"
    }
    else {
        gameResultElement.textContent = tryAgainMessage;
        gameResultElement.style.backgroundColor = "#1e217c"
    }
    
    
 }
 
