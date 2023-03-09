function splitPascalCase(str) {
    const regex = /[A-Z][a-z]*/g; // regex to match words in PascalCase format
    const words = str.match(regex); // extract all matches
    console.log(words.join(', ')); // print the words joined by comma and space
}

splitPascalCase('HoldTheDoor')
splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')


// function for summing ten numbers in a row
function sumTenNumbers() {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += i;
    }
    return sum;
}