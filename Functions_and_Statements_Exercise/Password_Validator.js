function password_Validator(password) {

    let isBetween6And10Chars = false;
    let isOnlyLettersAndDigits = false;
    let hasAtLeast2Digits = false;
    let isPasswordValid = false;

    if (password.length >= 6 && password.length <= 10){
        isBetween6And10Chars = true;
    }



    for (let i = 0; i < password.length; i++) {

        let currentChar = password[i];
        let currentCharAscii = password.charCodeAt(i);

        if ((currentCharAscii >= 48 && currentCharAscii <= 57)
            || (currentCharAscii >= 65 && currentCharAscii <= 90)
            || (currentCharAscii >= 97 && currentCharAscii <= 122)) {
            isOnlyLettersAndDigits = true;
        }

        else {
            isOnlyLettersAndDigits = false;
            break;
        }
    }

    let digitsCount = 0;

    for (let i = 0; i < password.length; i++) {

        let currentChar = password[i];
        let currentCharAscii = password.charCodeAt(i);

        if (currentCharAscii >= 48 && currentCharAscii <= 57) {
            digitsCount++;
        }

        if (digitsCount >= 2) {
            hasAtLeast2Digits = true;
            break;
        }

    }

    if (isBetween6And10Chars && isOnlyLettersAndDigits && hasAtLeast2Digits) {
        isPasswordValid = true;
    }

    if (!isBetween6And10Chars) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (!isOnlyLettersAndDigits) {
        console.log('Password must consist only of letters and digits');
    }

    if (!hasAtLeast2Digits) {
        console.log('Password must have at least 2 digits');
    }

    if (isPasswordValid) {
        console.log('Password is valid');
    }

}

password_Validator('Pa$s$s');
