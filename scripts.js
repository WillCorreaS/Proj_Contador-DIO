var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 10){
        document.getElementById("currentNumber").innerHTML = "Você chegou ao limite.";
        elseif (currentNumber <= -10); {
            document.getElementById("currentNumber").innerHTML = "Você chegou ao limite.";
        }
}


function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 10){
        document.getElementById("currentNumber").innerHTML = "Você chegou ao limite.";
        elseif (currentNumber <= -10); {
            document.getElementById("currentNumber").innerHTML = "Você chegou ao limite.";
        }
}
}
}

