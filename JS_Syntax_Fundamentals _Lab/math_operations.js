function math_operations(num1, num2, operation) {
    let result;
    switch (operation) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2;break;
        case '/': result = num1 / num2;break;
        case '%': result = num1 % num2;break;
        case '**': result = num1 ** num2;break;

    }
    console.log(result)
}

math_operations(5, 6, '+')