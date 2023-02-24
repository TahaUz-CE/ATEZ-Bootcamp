const prompt = require("prompt-sync")();

const controlNegativeAndZero = () => {
    
    if (!isNaN(inputNumber)) {
        if (inputNumber < 0) {
            console.log("Negative number!");
            return false;
        } else if (inputNumber == 0) {
            console.log("Factoriel of the number: " + 1);
            return false;
        }
    } else {
        console.log("If you entered a string or special character value, you got an error.");
        return false;
    }
    
    return true;
}

const factorialCalculate = () => {
    if(controlNegativeAndZero(inputNumber)){
        for (let i = 1; i <= inputNumber; i++) {
            userResult *= i;
        }
        console.log("Factoriel of the number: " + userResult);
    }   
}

const inputNumber = prompt("Please enter a value ? ");

let userResult = 1;

factorialCalculate(inputNumber);