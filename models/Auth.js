/*global fetch*/
window.addEventListener('load', onHTMLLoad);
//just for testing
function onHTMLLoad() {
    // These must be on HTMLLoad funcion whenever you need this button
    // Gets the logout button - IT HAS TO HAVE id='logout'
    const buttonLogOut = document.getElementById('logout');
    let cookies = getCookies();
    // Put on click on th button
    buttonLogOut.addEventListener('click', logOutFunction);
    // Show/hide the button if is logged-in/out
    cookies.accessCookie !== undefined ? buttonLogOut.style.display = 'block' : buttonLogOut.style.display = 'none';
}

let logOutFunction = () => {
    // Gets the token from Cookies
    let cookies = getCookies();
    // Page
    const page = "https://ancient-caverns-16784.herokuapp.com/auth/logout";
    const buttonLogOut = document.getElementById('logout');
    // Fetch
    let formData = new FormData();
    formData['mihai'] = 'test';
    console.log(formData);
    fetch(page, {
        method: 'GET',
        headers: {'x-auth-token': cookies.accessCookie}
    })
    .then((response) => (response.json()))
    .then((response) => {
        // When clicks the button the button hides, the message is shown in div id=logout-response, cookie is destroyed
        buttonLogOut.style.display = 'none';
        document.getElementById('logout-response').innerHTML = response.message;
        document.cookie = "accessCookie="+ cookies.accessCookie + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        })
    .catch((err) => console.log('Unidentified error: ' + err));
};

//Just copied the function to get all the cookies
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