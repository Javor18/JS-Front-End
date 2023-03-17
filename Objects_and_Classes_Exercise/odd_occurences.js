// Write a function that extracts the elements of a sentence, if it appears an odd number
// of times (case-insensitive).
// The input comes as a single string. The words will be separated by a single space.


// Input	                                     Output
// 'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'	c# php 1 5


function oddOccurences(input){

    let words = {};

    for (let word of input.split(' ')){

        if (words.hasOwnProperty(word.toLowerCase())){

            words[word.toLowerCase()]++;

        }else{

            words[word.toLowerCase()] = 1;
        }
    }

    let odd = [];

    for (let word in words){

        if (words[word] %2 !== 0){

            odd.push(word);
        }
    }

    console.log(odd.join(' '))
}

oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
