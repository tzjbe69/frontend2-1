

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

        validateEmptyInputs(usernameInput, passwordInput);
        validateInput(userLogin.username, usernameInput);
        validateInput(userLogin.password, passwordInput);

        userLogin.login()
            .then(response => {
            	if(response.authenticated) {
                	document.cookie = 'accessCookie=' + response.accessToken;
                    loginNotif.innerHTML = "<h2>Login Successful, Master " + userLogin.username + "</h2>";
                    loginNotif.style.backgroundColor = "#07b001";
                	setTimeout(() => {document.location.href = "home.html"}, 2500);
            	}
                else {
                    loginNotif.innerHTML = "<h2>Something happened while trying to log you in.</h2>";
                    loginNotif.style.backgroundColor = "#ba1a14";
                }
            });
    });
}

function validateInput(value, inputType) {
    if (value === "") {
        inputType.style.border = '2px solid red';
        return false;
    } else if (value.length < 3) {
        inputType.style.border = '2px solid red';
        return false;
    } else if (value !== '' && value > 4) {
        inputType.style.border = '1px solid #6b6a69';
    }
}

function validateEmptyInputs(input1, input2) {
    if (input1.value === "" && input2.value === "") {
        input1.style.border = '2px solid red';
        input2.style.border = '2px solid red';
        return false;
    } else {
        input1.style.border = '1px solid #6b6a69';
        input2.style.border = '1px solid #6b6a69';
    }
}