function palindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {

        let currentNum = arr[i];
        let reversedNum = Number(currentNum.toString().split('').reverse().join(''));

        if (currentNum === reversedNum) {
            console.log('true');
        }

        else {
            console.log('false');
        }
    }
}

palindromeIntegers([123, 323, 421, 121]);
