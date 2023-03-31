//
// Write a function that reads the text inside an input field and
// appends the specified text to a list inside an HTML page.

function addItem() {

    let input = document.getElementById('newItemText');
    let li = document.createElement('li');
    li.textContent = input.value;
    document.getElementById('items').appendChild(li);
    input.value = '';

    console.log(input.value);
}