/* global getCookies */
/* global Movie */
/* global User */

function submit() {
      const title = document.getElementById("movie-title"),
            year = document.getElementById("movie-year"),
            rated = document.getElementById("movie-rates"),
            released = document.getElementById("released"),
            runtime = document.getElementById("movie-runtime"),
            genre = document.getElementById("movie-genre"),
            directors = document.getElementById("movie-directors"),
            writer = document.getElementById("movie-writer"),
            actors = document.getElementById("movie-actors"),
            plot = document.getElementById("movie-plot"),
            language = document.getElementById("movie-language"),
            country = document.getElementById("movie-country"),
            awards = document.getElementById("movie-awards"),
            type = document.getElementById("movie-type"),
            production = document.getElementById("movie-production"),
            website = document.getElementById("movie-website");

      const data = {
            Title: title.value,
            Year: year.value,
            Rated: rated.value,
            Released: released.value,
            Runtime: runtime.value,
            Genre: genre.value,
            Directors: directors.value,
            Writer: writer.value,
            Actors: actors.value,
            Plot: plot.value,
            Language: language.value,
            Country: country.value,
            Awards: awards.value,
            Type: type.value,
            Production: production.value,
            Website: website.value
      };

      const movie = new Movie();
      const token = getCookies().accessCookie;

      movie.editMovie(data, token);
}

// When "Edit" button is clicked
function on() {
      document.getElementById("overlay").style.display = "block";

      const movieModel = new Movie();
      movieModel.getMovieDetails().then(() => {
            const title = document.getElementById("movie-title"),
                  year = document.getElementById("movie-year"),
                  rated = document.getElementById("movie-rates"),
                  released = document.getElementById("released"),
                  runtime = document.getElementById("movie-runtime"),
                  genre = document.getElementById("movie-genre"),
                  directors = document.getElementById("movie-directors"),
                  writer = document.getElementById("movie-writer"),
                  actors = document.getElementById("movie-actors"),
                  plot = document.getElementById("movie-plot"),
                  language = document.getElementById("movie-language"),
                  country = document.getElementById("movie-country"),
                  awards = document.getElementById("movie-awards"),
                  type = document.getElementById("movie-type"),
                  production = document.getElementById("movie-production"),
                  website = document.getElementById("movie-website");
      
            title.value = movieModel.title;
            year.value = movieModel.year;
            rated.value = movieModel.rated;
            released.value = movieModel.released;
            runtime.value = movieModel.runtime;
            genre.value = movieModel.genre;
            directors.value = movieModel.directors;
            writer.value = movieModel.writer;
            actors.value = movieModel.actors; 
            plot.value = movieModel.plot; 
            language.value = movieModel.language; 
            country.value = movieModel.country; 
            awards.value = movieModel.awards; 
            type.value = movieModel.type; 
            production.value = movieModel.production; 
            website.value = movieModel.website;
      });
}   

function off() {
        document.getElementById("overlay").style.display = "none";
}
