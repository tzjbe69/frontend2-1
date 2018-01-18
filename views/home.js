/*global Movies*/
/*global logOutFunction*/
/*global isAuth*/

window.onload = function() {
    const buttonLogOut = document.getElementById('logout');
    const buttonLogIn = document.getElementsByClassName('signin')[0];
    // Put on click on the buttons
    buttonLogIn.addEventListener('click', () => window.location.href = "login.html");
    buttonLogOut.addEventListener('click', logOutFunction);
    isAuth();
    let moviesList = new Movies();
    moviesList.moviesURL = 'https://ancient-caverns-16784.herokuapp.com/movies';
    moviesList.getAllMovies()
        .then(makePagination)
        .then(displayMovies);
};

function makePagination(moviesArray) {
    const prevPage = document.getElementById('prev-page');
    const thisPage = document.getElementById('current-page');
    const nextPage = document.getElementById('next-page');

    thisPage.innerHTML = moviesArray.pagination.currentPage + " out of " + moviesArray.pagination.numberOfPages;
    prevPage.addEventListener('click', jumpPrevious);
    nextPage.addEventListener('click', jumpNext);
    function jumpNext() {
        if(moviesArray.pagination.links.next != null) {
            nextPage.removeEventListener('click', jumpNext);
            prevPage.removeEventListener('click', jumpPrevious);
            moveTo(moviesArray.pagination.links.next);
        }
    }
    function jumpPrevious() {
        if(moviesArray.pagination.links.prev != null) {
            nextPage.removeEventListener('click', jumpNext);
            prevPage.removeEventListener('click', jumpPrevious);
            moveTo(moviesArray.pagination.links.prev);
        }
    }
    return moviesArray.results;
}

function moveTo(page) {
    if (page != null) {
        let moviesListNew = new Movies();
        moviesListNew.moviesURL = page;
        moviesListNew.getAllMovies().then(makePagination).then(displayMovies);
    }
}

function displayMovies(moviesList) {
    let articleElement = document.getElementsByClassName('article');
    articleElement[0].innerHTML = "";
   for (let i = 0; i<moviesList.length; i++) {
        let titleElement = document.createElement('h3');
        titleElement.innerHTML = moviesList[i].Title;
        titleElement.addEventListener('click', () => document.location.href = "movieDetails.html?id=" + moviesList[i]._id);
        
        articleElement[0].appendChild(titleElement);
    }

}