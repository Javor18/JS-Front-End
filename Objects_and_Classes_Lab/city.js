// Write a function that receives a single parameter – an object, containing five properties:
// { name, area, population, country, postcode }
// Loop through all the keys and print them with their values in format: "{key} -> {value}"


function cityInfo(city) {

    for (let key in city) {
        console.log(`${key} -> ${city[key]}`)
    }
}

cityInfo({  name: "Sofia",  area: 492,  population: 1238438,  country: "Bulgaria",  postCode: "1000"  })
cityInfo({  name: "Paris",  area: 105,  population: 2206488,  country: "France",  postCode: "1000"  })
