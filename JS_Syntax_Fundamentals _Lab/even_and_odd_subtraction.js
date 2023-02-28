function even_and_odd_subtraction(array) {

    let even_sum = 0
    let odd_sum = 0

    for (let i = 0; i< array.length; i ++){
        if (array[i] % 2 === 0){

            even_sum += array[i]
        }

        else {
            odd_sum += array[i]
        }
    }

    console.log(even_sum - odd_sum)
}

even_and_odd_subtraction([1,2,3,4,5,6])
even_and_odd_subtraction([3,5,7,9])