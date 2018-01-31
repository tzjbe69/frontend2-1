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
        
        // var movieTitleEl = document.createElement('h3');
        // var moviePlotEl = document.createElement('p');
        // var movieYearEl = document.createElement('p');
        // var movieReleasedEl = document.createElement('p');
        // var movieGenreEl = document.createElement('p');
        // var movieImdbRatingEl = document.createElement('p');
        // var movieImdbVotesEl = document.createElement('p');
        // var movieDirectorEl = document.createElement('p');
        // var movieActorsEl = document.createElement('p');
        // var movieLanguageEl = document.createElement('p');
        // var moviePosterEl = document.createElement('img');
        // var movieMetascoreEl = document.createElement('p');
        // var movieWebsiteEl = document.createElement('p');
        // var movieTypeEl = document.createElement('p');
        
        String.prototype.sprintf = function() {
            var counter = 0;
            var args = arguments;
        
            return this.replace(/%s/g, function() {
                return args[counter++];
            });
        };
        
        var movieHtml = [];
        movieHtml['title'] = '<h3>Title: %s</h3>';
        movieHtml['year'] = '<p>Year: %s</p>';
        movieHtml['plot'] = '<p>Plot: %s</p>';
        movieHtml['poster'] = '<img src="%s" alt ="Image Not Available"/>';
        movieHtml['actors'] = '<p>Cast: %s</p>';
        movieHtml['country'] = '<p>Country: %s</p>';
        movieHtml['director'] = '<p>Director: %s</p>';
        movieHtml['genre'] = '<p>Genre: %s</p>';
        movieHtml['language'] = '<p>Language: %s</p>';
        movieHtml['metascore'] = '<p>Metascore: %s</p>';
        movieHtml['rated'] = '<p>Rated: %s</p>';
        movieHtml['ratings'[[0].value]]= '<p>Ratings: %s %s</p>';
        movieHtml['released'] = '<p>Released: %s</p>';
        movieHtml['response'] = '<p>Response: %s</p>';
        movieHtml['runtime'] = '<p>Runtime: %s</p>';
        movieHtml['type'] = '<p>Type: %s</p>';
        movieHtml['writer'] = '<p>Writer: %s</p>';
        movieHtml['imdbID'] = '<p>Imdb ID: %s</p>';
        movieHtml['imdbRating'] = '<p>IMDB Rating: %s</p>';
        movieHtml['imdbVotes'] = '<p>IMDB Votes: %s</p>';
        movieHtml['totalSeasons'] = '<p>Total Seasons: %s</p>';
        movieHtml['_id'] = '<p>ID: %s</p>';
        
        //movieEls['Title'] = '<img src="%s" alt="%s" />';
        //movieEl['Title'].innerHTML = "Year: %s ";
        
        // movieEl['Year'] = '<p>Year</p>';
        // movieEl['Title'] = document.createElement('h3');
        // movieEl['Title'] = document.createElement('h3');
        
        for (let key in movieModel) {
            if (movieModel[key] !== undefined && movieModel[key] !== "N/A" && typeof movieModel[key] !== "function") {
            // if (movieModel[key] !== undefined && typeof movieModel[key] !== "function" && key === 'title') {

                var value = movieHtml[key].sprintf(movieModel[key]);
                movieEl.innerHTML += value;
            }
        }
        
        // movieTitleEl.innerHTML = movieModel.title;
        // moviePlotEl.innerHTML = movieModel.plot;
        // movieYearEl.innerHTML = "Year: " + movieModel.year;
        // movieReleasedEl.innerHTML = "Release: " + movieModel.released;
        // movieGenreEl.innerHTML = "Genre: " + movieModel.genre;
        // movieImdbRatingEl.innerHTML = "IMDB Note: " + movieModel.imdbRating;
        // movieImdbVotesEl.innerHTML = "IMDB Votes: " + movieModel.imdbVotes;
        // movieDirectorEl.innerHTML = "Directors: " + movieModel.director;
        // movieActorsEl.innerHTML = "Actors: " + movieModel.actors;
        // movieLanguageEl.innerHTML = "Languages: " + movieModel.language;
        // moviePosterEl.setAttribute("src", movieModel.poster);
        // moviePosterEl.setAttribute("alt", movieModel.title);
        // movieMetascoreEl.innerHTML = "Metascore: " + movieModel.metascore;
        // movieWebsiteEl.innerHTML = "Website: " + movieModel.website;
        // movieTypeEl.innerHTML = "Type: " + movieModel.type;
        
        // movieEl.appendChild(movieTitleEl);
        // movieEl.appendChild(moviePlotEl);
        // movieEl.appendChild(movieYearEl);
        // movieEl.appendChild(movieReleasedEl);
        // movieEl.appendChild(movieGenreEl);
        // movieEl.appendChild(movieImdbRatingEl);
        // movieEl.appendChild(movieImdbVotesEl);
        // movieEl.appendChild(movieDirectorEl);
        // movieEl.appendChild(movieActorsEl);
        // movieEl.appendChild(movieLanguageEl);
        // movieEl.appendChild(moviePosterEl);
        // movieEl.appendChild(movieMetascoreEl);
        // movieEl.appendChild(movieWebsiteEl);
        // movieEl.appendChild(movieTypeEl);
        
        contentEl.appendChild(movieEl);
    }
}
