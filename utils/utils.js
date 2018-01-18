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