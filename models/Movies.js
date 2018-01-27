/*global fetch*/
function Movies() {
    this.moviesURL = "";
    this.title= "";
}

Movies.prototype.getAllMovies = function() {
    
    let searchURL= this.moviesURL;
    return fetch(searchURL + '', {method: 'GET'})
            .then((response) => response.json())
            .then((response) => response)
            .catch((err) => (console.log('Field does not exist: ' + err)));
};

Movies.prototype.getAfterRating = function () {
    let url = "https://ancient-caverns-16784.herokuapp.com/movies?take=80&skip=0"
    return fetch(url, {method: 'GET'})
            .then((response) => response.json())
            .then((response) => {
                response.results.sort((a, b) => b.imdbRating - a.imdbRating)
                return response.results
                })
            .catch((err) => (console.log('Field does not exist: ' + err)));
}