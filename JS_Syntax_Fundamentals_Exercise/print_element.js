function print_element(arr, n) {

    let result = []

    for (let i = 0; i < arr.length; i+= n) {

        result.push(arr[i]);
    }

    return result;
}

console.log(print_element(['5',
        '20',
        '31',
        '4',
        '20'],
    2))

console.log(print_element(['dsa',
        'asd',
        'test',
        'tset'],
    2
))