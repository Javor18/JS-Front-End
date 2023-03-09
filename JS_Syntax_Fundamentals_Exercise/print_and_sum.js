function print_and_sum(start, end) {
    let numbers = ""
    let sum = 0

    for (let i = start; i <= end; i++) {
        numbers += i + " ";
        sum += i
    }

    console.log(numbers.trim());
    console.log(`Sum: ${sum}`);
}

print_and_sum(5, 10)