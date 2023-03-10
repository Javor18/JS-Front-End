function sign_check(a, b, c) {

    let result = a * b * c;

    if (result > 0) {
        console.log("Positive");
    }

    else if (result < 0) {
        console.log("Negative");
    }
}

sign_check(5, 12, -15);
sign_check(-6, -12, 14);
sign_check(-1, -2, -3);
sign_check(-5, -1, 1);
