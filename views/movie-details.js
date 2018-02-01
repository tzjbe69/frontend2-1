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
        
        String.prototype.sprintf = function() {
            var counter = 0;
            var args = arguments;
        
            return this.replace(/%s/g, function() {
                return args[counter++];
            });
        };
        
        var movieHtml = [];
        movieHtml['title'] = '<h3>Title: %s</h3>';
        movieHtml['poster'] = '<img src="%s" id="poster-display"/>';
        movieHtml['year'] = '<p>Year: %s</p>';
        movieHtml['plot'] = '<p>Plot: %s</p>';
        movieHtml['actors'] = '<p>Cast: %s</p>';
        movieHtml['country'] = '<p>Country: %s</p>';
        movieHtml['director'] = '<p>Director: %s</p>';
        movieHtml['genre'] = '<p>Genre: %s</p>';
        movieHtml['language'] = '<p>Language: %s</p>';
        movieHtml['metascore'] = '<p>Metascore: %s</p>';
        movieHtml['rated'] = '<p>Rated: %s</p>';
        movieHtml['ratings']= '<p>Ratings: %s</p>';
        movieHtml['released'] = '<p>Released: %s</p>';
        movieHtml['response'] = '<p>Response: %s</p>';
        movieHtml['runtime'] = '<p>Runtime: %s</p>';
        movieHtml['type'] = '<p>Type: %s</p>';
        movieHtml['writer'] = '<p>Writer: %s</p>';
        movieHtml['imdbID'] = '<p>Imdb ID: %s</p>';
        movieHtml['imdbRating'] = '<p>IMDB Rating: %s</p>';
        movieHtml['imdbVotes'] = '<p>IMDB Votes: %s</p>';
        movieHtml['totalSeasons'] = '<p>Total Seasons: %s</p>';
        movieHtml['id'] = '<p>ID: %s</p>';
        
        for (let key in movieModel) {
            if (movieModel[key] !== undefined && movieModel[key] !== "N/A" && typeof movieModel[key] !== "function" && key !== 'id' && key !== 'ratings') {
            // if (movieModel[key] !== undefined && typeof movieModel[key] !== "function" && key === 'title') {

                var value = movieHtml[key].sprintf(movieModel[key]);
                movieEl.innerHTML += value;
            }
        }
        
        contentEl.appendChild(movieEl);
    }
}
