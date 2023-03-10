function factorialDivision(firstNumber, secondNumber) {
    let firstFactorial = 1;
    let secondFactorial = 1;

    for (let i = 0; i < firstNumber; i++){
        firstFactorial *= firstNumber - i;
    }

    for (let i = 0; i < secondNumber; i++){
        secondFactorial *= secondNumber - i;
    }

    let result = firstFactorial / secondFactorial;

    console.log(result.toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);