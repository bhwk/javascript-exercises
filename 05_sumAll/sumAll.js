const sumAll = function(firstNumber, secondNumber) {
    let sum = 0;
    switch(true){
        case (typeof(firstNumber) != 'number' || typeof(secondNumber)!='number'):
        case (firstNumber < 0 || secondNumber < 0):
            return 'ERROR';

        case (firstNumber < secondNumber):
            for (let i = firstNumber; i<=secondNumber; i++){
                sum+=i;
            }
            break;
    
        case (secondNumber < firstNumber):
            for (i = secondNumber; i<=firstNumber; i++){
                sum+=i;
            }
            break;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
