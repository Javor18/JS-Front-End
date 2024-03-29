    // Write a function that stores information about a person’s name and his address.
    // The input comes as an array of strings. Each string contains the name and the
    // address separated by a colon. If you receive the same name twice just replace
    // the address. In the end, print the full list, sorted alphabetically by the person’s name.

    function addressBook(input) {

        let addressBook = {};

        for (let line of input) {
            let [name, address] = line.split(':');
            addressBook[name] = address;
        }

        let sorted = Object.keys(addressBook).sort((a, b) => a.localeCompare(b));

        for (let name of sorted) {
            console.log(`${name} -> ${addressBook[name]}`)
        }

    }

    addressBook(['Tim:Doe Crossing',
        'Bill:Nelson Place',
        'Peter:Carlyle Ave',
        'Bill:Ornery Rd'])

