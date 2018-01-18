/*global fetch*/
function Movies() {
    this.moviesURL = "";
    this.currentPage = 0;
    this.numberOfPages = 0;
    this.links = {};
    this.movies = [];
}

Movies.prototype.getAllMovies = function() {
    return fetch(this.moviesURL + '', {
                method: 'GET',
            }).then((response) => response.json())
            .then((response) => {
                let paging = response.pagination;
                this.currentPage = paging.currentPage;
                this.numberOfPages = paging.numberOfPages;
                this.links = paging.links;
                response.results.forEach((movie) => this.movies.push(movie));
                return response;
            });
};