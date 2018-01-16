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

let isAuth = () => getCookies().accessCookie !== undefined ? true : false