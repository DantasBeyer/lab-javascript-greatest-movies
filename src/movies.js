// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


const movies = [    
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    score: 9
  },
  {
    title: 'Gandhi',
    year: 1982,
    director: 'Richard Attenborough',
    duration: '3h 11min',
    genre: ['Biography', 'Drama', 'History'],
    score: 8.1
  },
  
  
  {
    title: 'Schindler"s List',
    year: 1993,
    director: 'Steven Spielberg',
    duration: '3h 15min',
    genre: ['Biography', 'Drama', 'History'],
    score: 8.9
  },
  {
    title: 'Pulp Fiction',
    year: 1994,
    director: 'Quentin Tarantino',
    duration: '2h 34min',
    genre: ['Crime', 'Drama'],
    score: 8.9
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
    director: 'Peter Jackson',
    duration: '3h 21min',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    score: 8.9
  },
 
  {
    title: 'Fight Club',
    year: 1999,
    director: 'David Fincher',
    duration: '2h 19min',
    genre: ['Drama'],
    score: 8.8
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    director: 'Peter Jackson',
    duration: '2h 58min',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    score: 8.8
  },
  {
    title: 'Forrest Gump',
    year: 1994,
    director: 'Robert Zemeckis',
    duration: '2h 22min',
    genre: ['Comedy', 'Drama', 'Romance'],
    score: 8.8
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
    director: 'Irvin Kershner',
    duration: '2h 4min',
    genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
    score: 8.8
  },
  {
    title: 'Inception',
    year: 2010,
    director: 'Christopher Nolan',
    duration: '2h 28min',
    genre: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
    score: 8.8
  },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
    director: 'Peter Jackson',
    duration: '2h 59min',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    score: 8.7
  },
 
  {
    title: 'Goodfellas',
    year: 1990,
    director: 'Martin Scorsese',
    duration: '2h 26min',
    genre: ['Crime', 'Drama'],
    score: 8.7
  },
  {
    title: 'The Matrix',
    year: 1999,
    director: 'Lana Wachowski',
    duration: '2h 16min',
    genre: ['Action', 'Sci-Fi'],
    score: 8.7
  },
  {
    title: 'Network',
    year: 1976,
    director: 'Sidney Lumet',
    duration: '2h 1min',
    genre: [ 'Drama' ],
    score: 8.1
  },
  {
    title: 'Le notti di Cabiria',
    year: 1957,
    director: 'Federico Fellini',
    duration: '1h 50min',
    genre: [ 'Drama' ],
    score: 8.2
  },
  {
    title: '8½',
    year: 1963,
    director: 'Federico Fellini',
    duration: '2h 18min',
    genre: [ 'Drama' ],
    score: 8.1
  },
  {
    title: 'Paris, Texas',
    year: 1984,
    director: 'Wim Wenders',
    duration: '2h 25min',
    genre: [ 'Drama' ],
    score: 8.1
  },
  {
    title: 'The Help',
    year: 2011,
    director: 'Tate Taylor',
    duration: '2h 26min',
    genre: [ 'Drama' ],
    score: 8.1
  }
];
const topDirectors= movies.map(function(movie,indice){
  return movie.director;
});

console.log(topDirectors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//const howManyMovies = movies.filter(function (movies) {
	//if (movies.director == 'Steven Spielberg') {
		//return true;
//	}
//});
//console.log(howManyMovies);

const howManyMovies = movies.filter( movies => movies.director ==='Steven Spielberg')
console.log(howManyMovies)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

const scoresAverage = movies.reduce((acc, val) => {
	return acc + val.score;
}, 0) / movies.length;

console.log(scoresAverage.toFixed(2));

// Iteration 4: Drama movies - Get the average of Drama Movies

//function dramaMoviesScore(movies) {

  const dramaMoviesScore = movies.filter(function (movies) {
    if (movies.genre == 'Drama'){
    return true;
  }
  
});
const dramaMoviesAvg = dramaMoviesScore.reduce ((acc, val1) =>{
    return acc + val1.score;
 }, 0) / dramaMoviesScore.length;
    
 console.log(dramaMoviesAvg.toFixed(2));



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = movies.map(function(movieY,indice1){
  return movieY.year;
});

console.log(orderByYear.sort());


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
//function orderAlphabetically() {}

const orderAlphabetically= movies.map (function(movie,indice){
  return movie.title;
});

console.log(orderAlphabetically.sort());


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    //getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
