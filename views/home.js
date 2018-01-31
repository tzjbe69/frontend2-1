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
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', function(event){
        event.preventDefault();
// HERE SEARCH OPTIONS
// IF You Want make it as separate function
        const input = document.getElementById('query').value;
        let search = new Search();
        search.title = input;
        if(input !== "" && input.replace(/\s/g, '').length) {
            searchForm.reset();
            addHistory(currPage, 0)
            moveTo(search.searchMovies());
        }

    });
    getMoviesAfterRating()
    moveTo('https://ancient-caverns-16784.herokuapp.com/movies');

    // START display/hide div search-section
    const  searchIcon = document.getElementById("search-icon");
    const  searchSection = document.getElementById("search-section");
    searchIcon.addEventListener('click', toggleSearchBox);

    function toggleSearchBox(){

        if (searchSection.classList.contains("visible")){
            searchSection.classList.remove("visible");
        } else {
            searchSection.classList.add("visible");
        }
    }
    // END display/hide div search-section

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
        
        let itemWrapper = document.createElement('div');
        let anchorTitleEl = document.createElement('a');
        let anchorImageEl = document.createElement('a');
        
        let titleElement = document.createElement('h3');
        let imageElement = document.createElement('img');
        let imdbNoteElement = document.createElement('p');
        let genreElement = document.createElement('p');

        let url = "movieDetails.html?movieId=" + moviesList[i]._id;
        
        anchorTitleEl.setAttribute('href', url);
        anchorTitleEl.setAttribute('target', '_blank');
        
        anchorImageEl.setAttribute('href', url);
        anchorImageEl.setAttribute('target', '_blank');
        
        titleElement.innerHTML = moviesList[i].Title + ' (' + moviesList[i].Year + ')';
        imageElement.setAttribute('src', moviesList[i].Poster);
        imageElement.setAttribute('alt', 'No poster Available');
        imageElement.setAttribute('height', 269);
        imageElement.setAttribute('width', 183);
        imdbNoteElement.innerHTML = 'IMDB Rating: ' + moviesList[i].imdbRating + '/10' + ' ('+ moviesList[i].imdbVotes + ' votes)';
        genreElement.innerHTML = 'Genre: ' + moviesList[i].Genre;

        
        anchorTitleEl.appendChild(titleElement);
        anchorImageEl.appendChild(imageElement);


        articleElement[0].appendChild(itemWrapper);
        itemWrapper.appendChild(anchorTitleEl);
        itemWrapper.appendChild(anchorTitleEl);
        itemWrapper.appendChild(anchorImageEl);
        itemWrapper.appendChild(imdbNoteElement);
        itemWrapper.appendChild(genreElement);
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