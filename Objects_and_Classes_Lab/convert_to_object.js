// Write a function that receives a string in JSON format and converts it to an object.
//     Loop through all the keys and print them with their values in format: "{key}: {value}"


function convertToObject(jsonString){

    let obj = JSON.parse(jsonString);

    for (let key in obj){

        console.log(`${key}: ${obj[key]}`)
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
convertToObject('{"name": "Gosho", "age": 10, "date": "19/06/2005"}')
