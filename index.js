const moviesJson = require('./movies.json');

// 1. (REQUIRED) When instantiating the class with the imported movies.json file, add an “id” and 
// a random “rating” from 1 to 5 for each movie before storing it.
class MovieAPI {
    constructor(moviesJson) {
        this.movies = this.addMovieData(moviesJson);
    }
    addMovieData(movies) {
        let id = 0;
        movies.forEach((movie) => {
            movie["id"] = id;
            movie["rating"] = Math.floor(Math.random() * 6);
            id++;
        });
        return movies;
    }

    fetchAllMovies() {
        return this.movies;
    }

    // 2. A method that returns movies from a certain genre.
    getMoviesByGenre(genre) {
        let movieByGenre = this.movies.filter((movie) =>
            movie.genre.toLowerCase().includes(genre.toLowerCase()));
        return movieByGenre;
    }

    // 3. A method that removes a movie with a certain id (if found).
    removeMovie(id) {
        let movieIndex = this.movies.map((movie) => {
            return movie.id;
        }).indexOf(id);
        this.movies.splice(movieIndex, 1);
    }

    // 4. A method that returns the movies with the subtitle and thumb properties filtered out.
    filteredSubTh() {
        let filteredMovies = this.movies;
        filteredMovies.map(movie => {
            delete movie.thumb;
            delete movie.subtitle;
        })
        return filteredMovies;
    }

    // 5. A method that returns the movies sorted by name.
    sortedByName() {
        let sortedMovies = this.movies.sort((a, b) => {
            return a.title.localeCompare(b.title);
        })
        return sortedMovies;
    }

    // 9. A method that allows the user to add a new movie object to the movie list 
    // (supply all properties but the “id” and “rating”. The “id” and “rating” properties should be added internally by the method.
    addNewMovie(newMovie) {
        let rating = Math.floor(Math.random() * 6);
        let id = this.movies.length;
        newMovie.rating = rating;
        newMovie.id = id;
        return this.movies.push(newMovie);
    }

    // 10. A method that returns a movie with a certain id (if found).
    findMovie(targetId) {
        const targetMovie = this.movies.find(({
                id
            }) =>
            id === targetId)
        return targetMovie;
    }

    // 8. A method that prints out movies sorted from bottom rated to top rated.
    fromBottomtoTop() {
        let sortedFromBottomToTop = this.movies.sort((a, b) =>
            (a.rating > b.rating) ? 1 : -1);
        return sortedFromBottomToTop;
    }

    // A method that prints out movies sorted from top rated to bottom rated.
    fromToptoBottom() {
        let sortedFromToptoBottom = this.movies.sort((a, b) =>
            (a.rating > b.rating) ? -1 : 1);
        return sortedFromToptoBottom;
    }

    // 7. A method that prints out the three top rated movies.
    topRatedMovies() {
        const topMovies = this.fromToptoBottom();
        let topRatedList = [];
        topRatedList.push(topMovies[0]);
        topRatedList.push(topMovies[1]);
        topRatedList.push(topMovies[2]);
        return topRatedList;
    }

    // 6. A method that returns the 2 top rated movies and 2 bottom rated movies.
    getTopAndBottom() {
        const topMovies = this.fromToptoBottom();
        let topAndBottomTwoMovies = [];
        topAndBottomTwoMovies.push(topMovies[0]);
        topAndBottomTwoMovies.push(topMovies[1]);
        topAndBottomTwoMovies.push(topMovies[topMovies.length - 1]);
        topAndBottomTwoMovies.push(topMovies[topMovies.length - 2]);
        return [topAndBottomTwoMovies];
    }
}
const API = new MovieAPI(moviesJson);


// Check 1st task-----------------------------------------------------
// console.log(API.movies);

// Check 2nd task----------------------------------------------------
// console.log(API.getMoviesByGenre('comedy'));

// Check 3d task-----------------------------------------------------
// API.removeMovie(12);
// console.log(API.movies);

// Check 4th task----------------------------------------------------
// const filteredMov = API.filteredSubTh();
// console.log(filteredMov);

// Check 5th task ----------------------------------------------------
// const moviesSorted = API.sortedByName();
// console.log(moviesSorted);

// Check 9th task ----------------------------------------------------
// var newMovie = {
//     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aperiam est pariatur quidem vitae in maiores incidunt reiciendis dicta! Facilis, quidem aut nobis delectus natus voluptas at similique fugiat maxime.",
//     sources: ["https://learn.javascript.ru/constructor-new"],
//     subtitle: 'sit amet consectetur adipisicing elit',
//     thumb: '',
//     title: 'Lorem ipsum dolor',
//     genre: 'History',
// };
// API.addNewMovie(newMovie);
// console.log(API.movies);

// Check 10th task ---------------------------------------------------
// const thatMovie = API.findMovie(12);
// console.log(thatMovie);

// Check 8th task ---------------------------------------------------
// const bottomRating = API.fromBottomtoTop();
// console.log(bottomRating);

// const topRating = API.fromToptoBottom();
// console.log(topRating);

// Check 7th task ---------------------------------------------------
// const topThree = API.topRatedMovies();
// console.log(topThree);

// Check 6th task ---------------------------------------------------
// const twoAndTwo = API.getTopAndBottom();
// console.log(twoAndTwo);