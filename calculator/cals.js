let previousCounterValue = document.getElementById("counterValue");
let btnInc = document.getElementById("incBtn");
let btnDec = document.getElementById("decBtn");
let btnRes = document.getElementById("resBtn");
function onIncrement() {
    let counterValue = previousCounterValue.textContent;
    let updatedValue = parseInt(counterValue)+1;
    previousCounterValue.textContent = updatedValue;
    if (updatedValue >0) {
        previousCounterValue.style.color = "green";
    }
    else if (updatedValue < 0) {
        previousCounterValue.style.color = "red";
    }
    else {
        previousCounterValue.style.color = "black";
        btnRes.style.color = "black";
    }
    

}

function onDecrement() {
    let counterValue = previousCounterValue.textContent;
    let updatedValue = parseInt(counterValue)-1;
    previousCounterValue.textContent = updatedValue;
    if (updatedValue >0) {
        previousCounterValue.style.color = "green";
    }
    else if (updatedValue < 0) {
        previousCounterValue.style.color = "red";
    }
    else {
        previousCounterValue.style.color = "black";
        btnRes.style.color = "black";
    }
    
}

function onReset() {
    previousCounterValue.textContent = 0;
    previousCounterValue.style.color = "black";
}