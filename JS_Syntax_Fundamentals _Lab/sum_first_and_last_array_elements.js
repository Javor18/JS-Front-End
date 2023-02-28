function sum_first_and_last_array_elements(array) {
    let n = array[0]
    let m = array[array.length - 1]

    console.log(n + m)
}

sum_first_and_last_array_elements([20, 30, 40])
sum_first_and_last_array_elements([10, 17, 22, 33])
sum_first_and_last_array_elements([11, 58, 69])