// You will receive a city’s name (string), population (number), and treasury (number) as arguments, which you will need to set as properties of an object and return it. In addition to the input parameters, the object must have a property taxRate with an initial value of 10, and three methods for managing the city:
//     ⦁	collectTaxes() - Increase treasury by  population * taxRate
// ⦁	applyGrowth(percentage) - Increase population by given percentage
// ⦁	applyRecession(percentage) - Decrease treasury by given percentage
// Round down the values after each calculation.


function cityTaxes(name, population, treasury){

    let city = {
        cityName: name,
        cityPopulation: population,
        cityTreasury: treasury,
        taxRate: 10,
    }

    city.collectTaxes = function collectTaxes(){
        city.cityTreasury += city.cityPopulation * city.taxRate;
    }

    city.applyGrowth = function applyGrowth(percentage){
        city.cityPopulation += Math.floor(city.cityPopulation * percentage / 100);
    }

    city.applyRecession = function applyRecession(percentage){
        city.cityTreasury += Math.floor(city.cityTreasury * percentage / 100);
    }

    console.log(city);
}

const city =
    cityTaxes('Tortuga',
        7000,
        15000);