function reverse_an_array_of_numbers(n, array) {
    const new_array = array.slice(0, n)
    const reverse_array = new_array.reverse()
    console.log(reverse_array.join(" "))
}

reverse_an_array_of_numbers(3, [10, 20, 30, 40, 50])