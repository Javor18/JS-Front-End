
// Write a JS function that scans a given HTML list and appends
// all collected list items’ text to a textarea on the same page
// when the user clicks on a button.
//
//     Input/Output
// There will be no input/output, your program should instead modify
// the DOM of the given HTML document.


function extractText() {
    // TODO

    let items = document.querySelector('#items').children;
    let result = document.querySelector('#result');
    let text = '';

    for (let item of items){

        text += item.textContent + '\n'
    }

result.value = text;

}