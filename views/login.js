
window.onload = function() {

    const submitBtn = document.getElementsByTagName('button')[0];
    const usernameInput = document.getElementsByTagName('input')[0];
    const passwordInput = document.getElementsByTagName('input')[1];
    const loginNotif = document.querySelector('.login-notification');

    submitBtn.addEventListener('click', (event) => {
    	event.preventDefault();

        const userLogin = new User();

        userLogin.username = usernameInput.value;
        userLogin.password = passwordInput.value;

        userLogin.login()
            .then(response => {
            	if(response.authenticated) {
                	document.cookie = 'accessCookie=' + response.accessToken;
                    document.cookie = "username=" + userLogin.username;
                    loginNotif.innerHTML = "<h4>Login Successful, young Padawan " + userLogin.username + "</h4>";
                    loginNotif.style.backgroundColor = "#07b001";
                	setTimeout(() => {document.location.href = "home.html"}, 3000);
            	}
                else {
                    loginNotif.innerHTML = "<h4>Your username/password is incorrect.</h4>";
                    loginNotif.style.backgroundColor = "#ba1a14";
                    loginNotif.style.marginBottom = "12%";
                }
            });
    });
}

