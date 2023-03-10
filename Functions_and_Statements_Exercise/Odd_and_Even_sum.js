function odd_and_Even_sum(num) {

    let numAsString = num.toString();

    let oddSum =0;
    let evenSum = 0;

    for (let i = 0; i < numAsString.length; i++){
        let currentNum = Number(numAsString[i]);
        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        }
        else {
            oddSum += currentNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

odd_and_Even_sum(1000435);
odd_and_Even_sum(3495892137259234);