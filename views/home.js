/*global Movies hideOrDisplay logOutFunction history*/

window.onload = function() {
    const buttonLogOut = document.getElementById('logout');
    const buttonLogIn = document.getElementsByClassName('signin')[0];
    const registerText = document.querySelector('.register-text');
    const addBtn = document.getElementById('addBtn');
    const prevPage = document.getElementById('prev-page');
    const nextPage = document.getElementById('next-page');
    const currPage = document.getElementById('current-page')
    buttonLogIn.addEventListener('click', () => window.location.href = "login.html");
    buttonLogOut.addEventListener('click', logOutFunction);
    hideOrDisplay(registerText);
    hideOrDisplay(buttonLogIn, buttonLogOut);
    hideOrDisplay(buttonLogIn, addBtn);
    addBtn.addEventListener('click', () => window.location.href = "addMovie.html");
    prevPage.addEventListener('click', function() {
        addHistory(currPage, -1)
        moveTo(prevPage.getAttribute('data-prev-page'));
    })
    nextPage.addEventListener('click', function() {
        addHistory(currPage, 1)
        moveTo(nextPage.getAttribute('data-next-page'))
        });
    document.getElementById('search-form').addEventListener('submit', function(event){
        event.preventDefault();
// HERE SEARCH OPTIONS
// IF You Want make it as separate function
        var input = document.getElementById('query').value;
        let search = new Search();
        search.title = input;
        if(input !== "") {
            addHistory(currPage, 0)
            moveTo(search.searchMovies());
        }
    });
    getMoviesAfterRating()
    moveTo('https://ancient-caverns-16784.herokuapp.com/movies');
};

function makePagination(moviesArray) {
    const prevPage = document.getElementById('prev-page');
    const thisPage = document.getElementById('current-page');
    const nextPage = document.getElementById('next-page');
    prevPage.setAttribute("data-prev-page", moviesArray.pagination.links.prev)
    nextPage.setAttribute("data-next-page", moviesArray.pagination.links.next)
    thisPage.setAttribute("data-current-page", moviesArray.pagination.links.self)
    thisPage.innerHTML = moviesArray.pagination.currentPage + " out of " + moviesArray.pagination.numberOfPages;
    window.scrollTo(0, 0);
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
        
        let anchorTitleEl = document.createElement('a');
        let anchorImageEl = document.createElement('a');
        
        let titleElement = document.createElement('h3');
        let imageElement = document.createElement('img');

        let url = "movieDetails.html?movieId=" + moviesList[i]._id;
        
        anchorTitleEl.setAttribute('href', url);
        anchorTitleEl.setAttribute('target', '_blank');
        
        anchorImageEl.setAttribute('href', url);
        anchorImageEl.setAttribute('target', '_blank');
        
        titleElement.innerHTML = moviesList[i].Title;
        imageElement.setAttribute('src', moviesList[i].Poster);
        imageElement.setAttribute('alt', 'No poster Available');
        
        anchorTitleEl.appendChild(titleElement);
        anchorImageEl.appendChild(imageElement);

        articleElement[0].appendChild(anchorTitleEl);
        articleElement[0].appendChild(anchorImageEl);
    }
}

function addHistory(currPage, number) {
    let pgNb = parseInt(currPage.innerHTML[0]) + number;
    history.pushState({"link": currPage.getAttribute('data-current-page')}, "mynew page", "page" + pgNb);
    window.onpopstate = (event) => {
        console.log(event.state.link)
        moveTo(event.state.link);
    }
}

function getMoviesAfterRating() {
    let movieAfterRating = new Movies();
    movieAfterRating.getAfterRating()
    .then(function(response) {
        let topMovies = document.getElementById('top-movies');
        let listOfMovies = document.createElement('ol');
        for(let i = 0; i < 10; i++){
            let listItem = document.createElement('li');
            listItem.innerHTML = "<a href=movieDetails.html?movieId=" + response[i]._id + " target='_blank'>"+response[i].Title+"</a>";
            listOfMovies.appendChild(listItem);
        }
        topMovies.appendChild(listOfMovies);
    });
}