function nxN_Matrix(number) {
    let result = '';

    for (let i = 0; i < number; i++){
        for (let j = 0; j < number; j++){
            result += number + ' ';
        }

        result += '\n';
    }

    console.log(result);
}

nxN_Matrix(3);
nxN_Matrix(7);
nxN_Matrix(2);