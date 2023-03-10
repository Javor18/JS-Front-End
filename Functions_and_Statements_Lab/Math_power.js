// Write a function that calculates and print the value of a number raised to a given power:

function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }

    console.log(result);
}

power(2, 8);
power(3, 4);