function multiplication_table(number) {

    for (let i = 1; i <= 10; i++) {

        let result = number * i;
        console.log(`${number} X ${i} = ${result}`)
    }
}

multiplication_table(5)