// Write a function that stores information about movies inside an array.
//
//     The movie's object info must be name, director, and date. You can receive several types of input:
// "addMovie {movie name}" – add the movie
// "{movie name} directedBy {director}" – check if the movie exists and then add the director
// "{movie name} onDate {date}" – check if the movie exists and then add the date
//
// At the end print all the movies that have all the info (if the movie has no director,
//     name, or date, don’t print it) in JSON format.


function movies(input) {

    let movies = [];

    for (let line of input){

        if (line.includes('addMovie')){
            let movieName = line.substring(9);
            movies.push({name: movieName});

        }else if (line.includes('directedBy')){

            let [movieName, director] = line.split('directedBy');

            movies.forEach(movie => {
                if (movie.name === movieName.trim()){
                    movie.director = director.trim();
                }
            });

        }else if (line.includes('onDate')) {

            let [movieName, date] = line.split('onDate');

            movies.forEach(movie => {

                if (movie.name === movieName.trim()) {

                    movie.date = date.trim();
                }
            });

        }

    }

    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
    })
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])