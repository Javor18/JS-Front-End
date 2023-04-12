function solve(input) {
let list = input.shift().split('!');

    let line = input.shift();

    while (line !== 'Go Shopping!') {
        let [command, item, newItem] = line.split(' ');
        switch (command) {
            case 'Urgent':
                if (!list.includes(item)) {
                    list.unshift(item);
                }
                break;
            case 'Unnecessary':
                if (list.includes(item)) {
                    list.splice(list.indexOf(item), 1);
                }
                break;
            case 'Correct':
                if (list.includes(item)) {
                    list.splice(list.indexOf(item), 1, newItem);
                }
                break;
            case 'Rearrange':
                if (list.includes(item)) {
                    list.splice(list.indexOf(item), 1);
                    list.push(item);
                }
                break;
        }
        line = input.shift();
    }
    console.log(list.join(', '));
}

solve([
    'Tomatoes!Potatoes!Bread',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Go Shopping!'
]);

solve(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])

