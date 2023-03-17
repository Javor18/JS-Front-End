// Write a function that:
//     Records a car number for every car that enters the parking lot
// Removes a car number when the car goes out
// Input will be an array of strings in format [direction, carNumber]
// Print the output with all car numbers which are in the parking lot sorted in ascending by number.
//     If the parking lot is empty, print: "Parking Lot is Empty".


function parkingLot(input) {

    let parking = new Set();

    for (let car of input){

        let [command, carNumber] = car.split(', ');

        if (command === 'IN'){

            parking.add(carNumber);

        }else

            parking.delete(carNumber);
    }

    let sorted = Array.from(parking).sort((a, b) => a.localeCompare(b));

    if (sorted.length > 0){

        for (let car of sorted){

            console.log(car);
        }
    }
}

parkingLot(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)
