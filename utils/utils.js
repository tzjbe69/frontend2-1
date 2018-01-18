let getCookies = () => {
    const cookiesString = document.cookie;
    const cookiesArray = cookiesString.split('; ');
    const cookies = {};
    cookiesArray.forEach(function(c) {
        const cookie = c.split('=');
        const key = cookie[0];
        const value = cookie[1];
        cookies[key] = value;
    });
    return cookies;
};

let isAuth = () => {
    const buttonLogOut = document.getElementById('logout');
    const buttonLogIn = document.getElementsByClassName('signin')[0];
    const accessCookie = getCookies().accessCookie;
    if (accessCookie !== undefined) {
        buttonLogOut.style.display = 'inline-block';
        buttonLogIn.style.display = 'none';
    } else {
        buttonLogOut.style.display = 'none';
        buttonLogIn.style.display = 'inline-block';
    }
    return accessCookie !== undefined ? true : false;
};

function getMovieIdFromURL() {
    // This is for the case we have multiple variables in URL
    var query = window.location.search.substring(1).split('&');
    for (var i = 0; i < query.length; i++) {
        var queryTemp = query[i].split('=');
        // if is the one wee need just returns the value
        if(queryTemp[0] === 'movieId') {
            return queryTemp[1];
        } else {
            //this is just in case we do not find the value, returs the first article
            //I set this not to crash...
            alert("MovieId is invalid! You will be redirected");
            window.location.href = "home.html";
            //return 1;
        }
    }
}