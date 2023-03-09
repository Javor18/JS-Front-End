function array_rotation(arr, rotations) {

    for (let i = 0; i < rotations; i++) {

        const temp = arr.shift()
        arr.push(temp);
    }

    console.log(arr.join(' '))

}

array_rotation([51, 47, 32, 61, 21], 2)