// You will receive two arrays. The first array represents the
// current stock of the local store. The second array will contain
// products that the store has ordered for delivery.
//                                                                                                                                                                         The following information applies to both arrays:
//Every even index will hold the name of the product and every
// odd index will hold the quantity of that product. The second array
// could contain products that are already in the local store. If
// that happens increase the quantity for the given product. You
// should store them into an object, and print them in the following
// format: (product -> quantity)

// All of the arrays’ values will be strings.


function storeProvisions(input1, input2){

    let store = {};

    for (let i = 0; i < input1.length; i += 2){

        if (store.hasOwnProperty(input1[i])){
            store[input1[i]] += Number(input1[i + 1]);
        }else 
            store[input1[i]] = Number(input1[i + 1]);
    }

    for (let i = 0; i < input2.length; i += 2){

        if (store.hasOwnProperty(input2[i])){
            store[input2[i]] += Number(input2[i + 1]);
        }else
            store[input2[i]] = Number(input2[i + 1]);
    }

    for (let key in store){

        console.log(`${key} -> ${store[key]}`)
    }
}

storeProvisions([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])