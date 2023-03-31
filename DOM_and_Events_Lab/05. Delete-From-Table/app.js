
// Write a program that takes an email from an input
// field and deletes the matching row from a table.
//
// ⦁	If entry is found, the textContent in the
// element with id="result" must be set to "Deleted."
//
// ⦁	Otherwise, an error should be displayed in a <div>
// with id="result". The error should be "Not found."
//
// Submit only the deleteByEmail() function in Judge.
//
//     Input/Output
//
// There will be no input/output, your program should
// instead modify the DOM of the given HTML document.


    function deleteByEmail() {

    let input = document.querySelector('input[name="email"]');
    let table = document.querySelector('table');
    let result = document.getElementById('result');
    let isFound = false;

    for (let i = 1; i < table.rows.length; i++) {
        if (table.rows[i].children[1].textContent == input.value) {
            table.deleteRow(i);
            result.textContent = 'Deleted.';
            isFound = true;
            break;
        }
    }

    if (!isFound) {
        result.textContent = 'Not found.';
    }


    input.value = '';

    console.log(input.value);
}