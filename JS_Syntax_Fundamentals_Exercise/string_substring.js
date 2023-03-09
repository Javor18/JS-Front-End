function findWord(word, text) {
    const lowerWord = word.toLowerCase();
    const lowerText = text.toLowerCase();

    if (lowerText.includes(lowerWord)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

findWord('python',
    'JavaScript is the best programming language')

findWord('javascript',
    'JavaScript is the best programming language')