function same_numbers(number) {

    let digits = number.toString().split('');

    let allSame = digits.every((digit) => digit === digits[0]);

    let sum = digits.reduce((total, digit) => total + parseInt(digit), 0)

    console.log(allSame)
    console.log(sum)
}

same_numbers(2222222)