function reveal_words(words, template) {

    const wordList = words.split(', ');
    const templateList = template.split(' ');

    for (let i = 0; i < templateList.length; i++) {

        const word = wordList.find(w => w.length === templateList[i].length);

        if (word) {
            templateList[i] = word;
        }
    }

    return templateList.join(' ')
}

console.log(reveal_words('great',
    'softuni is ***** place for learning new programming languages'))

console.log(reveal_words('great, learning',
    'softuni is ***** place for ******** new programming languages'))