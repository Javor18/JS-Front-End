function solve(input = []) {
    let n = Number(input.shift());
    let pieces = input.splice(0, n);
    let collection = {};
    for (let piece of pieces) {
        let [name, composer, key] = piece.split("|");
        collection[name] = { composer, key };
    }
    let command = input.shift();
    while (command != "Stop") {
        let [action, piece, arg1, arg2] = command.split("|");
        switch (action) {
            case "Add":
                if (collection.hasOwnProperty(piece)) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    collection[piece] = { composer: arg1, key: arg2 };
                    console.log(`${piece} by ${arg1} in ${arg2} added to the collection!`);
                }
                break;
            case "Remove":
                if (collection.hasOwnProperty(piece)) {
                    delete collection[piece];
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
            case "ChangeKey":
                if (collection.hasOwnProperty(piece)) {
                    collection[piece].key = arg1;
                    console.log(`Changed the key of ${piece} to ${arg1}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
        }
        command = input.shift();
    }
    let all_pieces = Object.entries(collection);
    for (let [name, info] of all_pieces) {
        console.log(`${name} -> Composer: ${info.composer}, Key: ${info.key}`);
    }
}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);
