/*global Movie fetch*/

document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() {
    var movieModel = new Movie();
    movieModel.getMovieDetails()
    .then(displayMovie);

    document.getElementById('cancel').addEventListener('click', off);
    function displayMovie() {
        
        var contentEl = document.getElementById('movie-display');
        
        var movieEl = document.createElement('article');
        
        var movieTitleEl = document.createElement('h3');
        var moviePlotEl = document.createElement('p');
        var movieYearEl = document.createElement('p');
        var movieReleasedEl = document.createElement('p');
        var movieGenreEl = document.createElement('p');
        var movieImdbRatingEl = document.createElement('p');
        var movieImdbVotesEl = document.createElement('p');
        var movieDirectorEl = document.createElement('p');
        var movieActorsEl = document.createElement('p');
        var movieLanguageEl = document.createElement('p');
        var moviePosterEl = document.createElement('img');
        var movieMetascoreEl = document.createElement('p');
        var movieWebsiteEl = document.createElement('p');
        var movieTypeEl = document.createElement('p');
        
        movieTitleEl.innerHTML = movieModel.title;
        moviePlotEl.innerHTML = movieModel.plot;
        movieYearEl.innerHTML = "Year: " + movieModel.year;
        movieReleasedEl.innerHTML = "Release: " + movieModel.released;
        movieGenreEl.innerHTML = "Genre: " + movieModel.genre;
        movieImdbRatingEl.innerHTML = "IMDB Note: " + movieModel.imdbRating;
        movieImdbVotesEl.innerHTML = "IMDB Votes: " + movieModel.imdbVotes;
        movieDirectorEl.innerHTML = "Directors: " + movieModel.director;
        movieActorsEl.innerHTML = "Actors: " + movieModel.actors;
        movieLanguageEl.innerHTML = "Languages: " + movieModel.language;
        moviePosterEl.setAttribute("src", movieModel.poster);
        moviePosterEl.setAttribute("alt", movieModel.title);
        movieMetascoreEl.innerHTML = "Metascore: " + movieModel.metascore;
        movieWebsiteEl.innerHTML = "Website: " + movieModel.website;
        movieTypeEl.innerHTML = "Type: " + movieModel.type;
        
        movieEl.appendChild(movieTitleEl);
        movieEl.appendChild(moviePlotEl);
        movieEl.appendChild(movieYearEl);
        movieEl.appendChild(movieReleasedEl);
        movieEl.appendChild(movieGenreEl);
        movieEl.appendChild(movieImdbRatingEl);
        movieEl.appendChild(movieImdbVotesEl);
        movieEl.appendChild(movieDirectorEl);
        movieEl.appendChild(movieActorsEl);
        movieEl.appendChild(movieLanguageEl);
        movieEl.appendChild(moviePosterEl);
        movieEl.appendChild(movieMetascoreEl);
        movieEl.appendChild(movieWebsiteEl);
        movieEl.appendChild(movieTypeEl);
        
        contentEl.appendChild(movieEl);
    }
}
