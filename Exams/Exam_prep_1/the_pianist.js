function thePianist(input) {

    let n = Number(input.shift());
    let pieces = {};

    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = input.shift().split('|');
        pieces[piece] = {composer, key};
    }

    let command = input.shift();

    while (command !== 'Stop') {
        let [action, piece, arg1, arg2] = command.split('|');

        switch (action) {
            case 'Add':
                if (pieces.hasOwnProperty(piece)) {
                    console.log(`${piece} is already in the collection!`);
                } else {
                    pieces[piece] = {composer: arg1, key: arg2};
                    console.log(`${piece} by ${arg1} in ${arg2} added to the collection!`);
                }
                break;
            case 'Remove':
                if (pieces.hasOwnProperty(piece)) {
                    delete pieces[piece];
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
            case 'ChangeKey':
                if (pieces.hasOwnProperty(piece)) {
                    pieces[piece].key = arg1;
                    console.log(`Changed the key of ${piece} to ${arg1}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
        }

        command = input.shift();
    }

    let sorted = Object.entries(pieces).sort((a, b) => a[0].localeCompare(b[0]) || a[1].composer.localeCompare(b[1].composer));

    for (let [piece, info] of sorted) {
        console.log(`${piece} -> Composer: ${info.composer}, Key: ${info.key}`);
    }
}