window.onload = function() {
    // These must be on HTMLLoad funcion whenever you need this button
    // Gets the logout button - IT HAS TO HAVE id='logout'
    const buttonLogOut = document.getElementById('logout');
    let cookies = getCookies();
    // Put on click on th button
    buttonLogOut.addEventListener('click', (event) => {
        event.preventDefault();
        buttonLogOut.style.display = 'none';
        let user = new User();
        user.logOutFunction()
        document.cookie = "accessCookie="+ cookies.accessCookie + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        isAuth();
        document.location.href = "login.html";
    });
    // Show/hide the button if is logged-in/out
    isAuth() ? buttonLogOut.style.display = 'block' : buttonLogOut.style.display = 'none';
}