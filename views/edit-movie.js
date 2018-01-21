/* global getCookies */
/* global Movie */
/* global User */

window.onload = function() {
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
            Title: title,
            Year: year,
            Rated: rated,
            Released: released,
            Runtime: runtime,
            Genre: genre,
            Directors: directors,
            Writer: writer,
            Actors: actors,
            Plot: plot,
            Language: language,
            Country: country,
            Awards : awards,
            Type: type,
            Production: production,
            Website: website
      };

      const movie = new Movie();
      const token = getCookies().accessCookie;
      const user = new User();

      movie.editMovie(data, token, user);
}