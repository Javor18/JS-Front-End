function character_in_range(character1, character2){
    let first = character1.charCodeAt(0);
    let second = character2.charCodeAt(0);
    let result = '';


    if (second > first) {
        for (let i = first + 1; i < second; i++) {
            result += String.fromCharCode(i) + ' ';
        }
    }

    else if (first > second) {
        for (let i = second + 1; i < first; i++) {
            result += String.fromCharCode(i) + ' ';
        }
    }

    return result;

}

console.log(character_in_range('a', 'd'));
console.log(character_in_range('#', ':'));
console.log(character_in_range('C', '#'));