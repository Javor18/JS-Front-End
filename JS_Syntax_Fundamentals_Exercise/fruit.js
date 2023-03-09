function calculateFruitCost(fruit, weightInGrams, pricePerKilo) {

    let weightInKilograms = weightInGrams / 1000;
    let totalCost = weightInKilograms * pricePerKilo

    let outputString = `I need $${totalCost.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`

    console.log(outputString);
}

calculateFruitCost('orange', 2500, 1.80)
calculateFruitCost('apple', 1563, 2.35)