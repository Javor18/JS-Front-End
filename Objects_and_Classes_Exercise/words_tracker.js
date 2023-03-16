// Write a function that receives an array of words and finds occurrences
// of given words in that sentence.
//
// The input will come as an array of strings. The first string
// will contain the words you will be looking for separated by a space.
//
// All strings after that will be the words in which you will check for a match.
//
// Print for each word how many times it occurs. The words should be sorted
// by count in descending.


function wordsTracker(input){

    let tracked_words = input.shift().split(' ');

    let words = {};

    for (let word of tracked_words){

        words[word] = 0;
    }

    for (let word of input){

        if (words.hasOwnProperty(word)){

            words[word]++;
        }
    }

    let sorted = Object.entries(words).sort((a,b) => b[1] - a[1])

    for (let [word, count] of sorted){

        console.log(`${word} - ${count}`)
    }
}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])
