function cooking_by_numbers(inputNum, op1, op2, op3, op4, op5) {

    let num = Number(inputNum)

    const operations = {
        chop: () => num /= 2,
        dice: () => num = Math.sqrt(num),
        spice: () => num += 1,
        bake: () => num *= 3,
        fillet: () => num -= 0.2 * num,
    };

    const executeOp = (op) => {
        operations[op]();

        console.log(num)
    }

    executeOp(op1)
    executeOp(op2)
    executeOp(op3)
    executeOp(op4)
    executeOp(op5)
}

cooking_by_numbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')