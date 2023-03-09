function sorting_numbers(numbers) {

    numbers.sort((a, b) => a - b);
    let result = [];
    let mid = Math.floor(numbers.length / 2);

    for (let i = 0; i < mid; i++) {

        result.push(numbers[i])
        result.push(numbers[numbers.length - 1 -i]);
    }

    if (numbers.length % 2 !== 0){
        result.push(numbers[mid])
    }

    return result

}

console.log(sorting_numbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))