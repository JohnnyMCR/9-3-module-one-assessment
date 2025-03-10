/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */

//1. Return movieTitles
//2. If movie is empty, return empty '[]'
function getAllMovieTitles(movies) {
  let movieTitles = [];
  for (let i = 0; i < movies.length; i++) {
    movieTitles.push(movies[i].title)//pushing titles into array
  }//end of for loop
  return movieTitles;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */

//1. Return highest metascore of all movies
//2. If movies array empty, return 0
//3. Compare highest with lowest metascore
function getHighestMetascore(movies) {
  let highestMetaScore = 0 
  for (let i = 0; i < movies.length; i++) {
    movieMetascore = Number(movies[i].metascore)
    if (movieMetascore > highestMetaScore){
      highestMetaScore = movieMetascore
    }
  }//end of for loop
  return highestMetaScore}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */

//1. Average all IMDB ratings
//2. Return a number
//3. If movies array is empty, return `0`
function getAverageIMDBRating(movies) {
  let totalMovieRatings = 0
  let allMovieRatings = movies.length
  for (let i = 0; i < allMovieRatings; i++){
    totalMovieRatings += Number(movies[i].imdbRating)
  }  
  if (!allMovieRatings){
    return totalMovieRatings
  }
  return totalMovieRatings/allMovieRatings
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */

// 1. Return an Object
// 2. Keys are movie ratings and values are #ofMovies
// 3. If movies array is empty, return Object {}
function countByRating(movies) {
  let result = {};
  let ratingScore = '';
    if (movies.length === 0) {
      return result;
    }
for (let i = 0; i < movies.length; i++){
  ratingScore = movies[i].rated
    if (!result[movies[i].rated]){
      result[movies[i].rated] = 1
  } else {
      result[movies[i].rated] += 1
    }
  }
return result
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
// 1. Return Movie object based on ID
// 2. If movie array empty or ID doesn't match return null
function findById(movies, id) {
  let movieID = null
  for  (let i = 0; i < movies.length; i++){
    if (movies[i].imdbID === id){
      movieID = movies[i]
    } 
  } return movieID
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
// 1. Return movie genre
// 2. Case-sensitive: Change lower/capitalCase 
// 3. If empty or no match, return []
function filterByGenre(movies, genre) {
  let result = [];
  for (let i = 0; i < movies.length; i++){
    if (movies[i].genre.toLowerCase().includes(genre.toLowerCase())){
      result.push(movies[i])
    }
  }
  return result
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
// 1. Return movie year equal to or less than year
// 2. Comparing two different years
// 3. Return [result]
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let result = [];
  for (let i = 0; i < movies.length; i++){
    const years = movies[i].released.split(" ")
    if (years[2] <= year){
      result.push(movies[i])
    }
  }
  return result
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
// 1. Return highest boxOffice amount
// 2. Compare highest and lowest boxOffice amount 
// 3. Return null if there's no movies
function getBiggestBoxOfficeMovie(movies) {
  if(!movies.length)
  return null 
let numOneMovie = movies[0];
for( let i = 1; i < movies.length; i++ ){

}
return numOneMovie.title
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
