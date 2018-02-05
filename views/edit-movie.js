/* global getCookies */
/* global Movie */

function submit() {
      const title = document.getElementById("movie-title"),
            plot = document.getElementById("movie-plot"),
            year = document.getElementById("movie-year"),
            released = document.getElementById("released"),
            genre = document.getElementById("movie-genre"),
            imdbRating = document.getElementById("imdb-note"),
            imdbVotes = document.getElementById("imdb-votes"),
            rated = document.getElementById("movie-rates"),
            director = document.getElementById("movie-directors"),
            actors = document.getElementById("movie-actors"),
            runtime = document.getElementById("movie-runtime"),
            writer = document.getElementById("movie-writer"),
            language = document.getElementById("movie-language"),
            country = document.getElementById("movie-country"),
            awards = document.getElementById("movie-awards"),
            production = document.getElementById("movie-production"),
            metascore = document.getElementById("movie-metascore"),
            website = document.getElementById("movie-website"),
            type = document.getElementById("movie-type");
            

      const data = {
            Title: title.value,
            Plot: plot.value,
            Year: year.value,
            Released: released.value,
            Genre: genre.value,
            Rated: rated.value,
            imdbRating: imdbRating.value,
            ImdbVotes: imdbVotes.value,
            Director: director.value,
            Writer: writer.value,
            Actors: actors.value,
            Runtime: runtime.value,
            Language: language.value,
            Country: country.value,
            Awards: awards.value,
            Production: production.value,
            Metascore: metascore.value,
            Website: website.value,
            Type: type.value
      };

      const movie = new Movie();
      const token = getCookies().accessCookie;

      movie.editMovie(data, token);
      document.getElementById("overlay").style.display = "none";
}

// When "Edit" button is clicked
function on() {
      document.getElementById("overlay").style.display = "block";
      document.getElementById("overlay").style.resize = "both";

      const movieModel = new Movie();
      movieModel.getMovieDetails().then(() => {
            const title = document.getElementById("movie-title"),
                  plot = document.getElementById("movie-plot"),
                  year = document.getElementById("movie-year"),
                  rated = document.getElementById("movie-rates"),
                  released = document.getElementById("released"),
                  genre = document.getElementById("movie-genre"),
                  imdbRating = document.getElementById("imdb-note"),
                  imdbVotes = document.getElementById("imdb-votes"),
                  director = document.getElementById("movie-directors"),
                  writer = document.getElementById("movie-writer"),
                  actors = document.getElementById("movie-actors"),
                  runtime = document.getElementById("movie-runtime"),
                  language = document.getElementById("movie-language"),
                  country = document.getElementById("movie-country"),
                  awards = document.getElementById("movie-awards"),
                  production = document.getElementById("movie-production"),
                  metascore = document.getElementById("movie-metascore"),
                  website = document.getElementById("movie-website"),
                  type = document.getElementById("movie-type");
      
            title.value = movieModel.title;
            plot.value = movieModel.plot;
            year.value = movieModel.year;
            rated.value = movieModel.rated;
            released.value = movieModel.released;
            genre.value = movieModel.genre;
            imdbRating.value = movieModel.imdbRating;
            imdbVotes.value= movieModel.imdbVotes;
            runtime.value = movieModel.runtime;
            director.value = movieModel.director;
            writer.value = movieModel.writer;
            actors.value = movieModel.actors; 
            language.value = movieModel.language; 
            country.value = movieModel.country; 
            awards.value = movieModel.awards; 
            production.value = movieModel.production; 
            metascore.value = movieModel.metascore;
            website.value = movieModel.website;
            type.value = movieModel.type;
      });
}   

function off(event) {
      event.preventDefault();
      document.getElementById("overlay").style.display = "none";
}