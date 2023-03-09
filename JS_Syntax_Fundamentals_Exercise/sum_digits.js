function sum_digits(number) {

    let sum = 0;

    let numStr = number.toString();

    for (let i = 0; i < numStr.length ; i++) {

        sum += parseInt(numStr[i])
    }

    return sum
}

console.log(sum_digits(245678))