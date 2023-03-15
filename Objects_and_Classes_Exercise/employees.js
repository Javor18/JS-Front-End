// You're tasked to create a list of employees and their personal numbers.
// You will receive an array of strings. Each string is an employee name and to assign them
// a personal number you have to find the length of the name (whitespace included).
//
// Try to use an object.
//     At the end print all the list employees in the following format:
//     "Name: {employeeName} -- Personal Number: {personalNum}"

function employees(input){

    let employees = {};

    for (let people of input){
        employees[people] = people.length;
    }

    for (let key in employees){
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`)
    }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])
