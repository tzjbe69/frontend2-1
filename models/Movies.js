/*global fetch*/
function Movies() {
    this.moviesURL = "";
    this.title= "";
}

Movies.prototype.getAllMovies = function() {
    
    let searchURL= this.moviesURL;
    return fetch(searchURL + '', {
                method: 'GET',
            }).then((response) => response.json())
            .then((response) => response)
            .catch((err) => (console.log('Field does not exist: ' + err)));
};