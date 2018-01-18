
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

        // -------- TO BE TESTED --------

        // validateEmptyInputs(usernameInput, passwordInput);
        // validateInput(userLogin.username, usernameInput);
        // validateInput(userLogin.password, passwordInput);

        // function checkValidation() {
        //     if (validateEmptyInputs(usernameInput, passwordInput) && validateInput(userLogin.username, usernameInput) && validateInput(userLogin.password, passwordInput)) {
        //         return true;
        //     }
        //     else {
        //         return false;
        //     }
        // };

        // function checkValidation() {
        //     if(!validateEmptyInputs(usernameInput, passwordInput)) {
        //         if (!validateInput(userLogin.username, usernameInput)) {
        //             validateInput(userLogin.password, passwordInput);
        //         }
        //         return true;
        //     }
        //     else {
        //         return false;
        //     }
        // }

        // checkValidation();
        
        // if(checkValidation()) {
        //     userLogin.login()
        //     .then(response => {
        //         if(response.authenticated) {
        //             document.cookie = 'accessCookie=' + response.accessToken;
        //             loginNotif.innerHTML = "<h4>Login Successful, young Padawan " + userLogin.username + "</h4>";
        //             loginNotif.style.backgroundColor = "#07b001";
        //             setTimeout(() => {document.location.href = "home.html"}, 3000);
        //         }
        //         else {
        //             loginNotif.innerHTML = "<h4>Your credentials are incorrect.</h4>";
        //             loginNotif.style.backgroundColor = "#ba1a14";
        //         }
        //     });
        // }    

        // ----------

        userLogin.login()
            .then(response => {
            	if(response.authenticated) {
                	document.cookie = 'accessCookie=' + response.accessToken;
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

// ADD SYMBOL VALIDATION FOR USERNAME!

function validateInput(value, inputType) {
    const validationError = document.querySelector('.validation-error');
    if (value === "") {
        inputType.style.border = '2px solid red';
        validationError.innerHTML = "<h5>You can not have blank inputs.</h5>";
        return false;
    } else if (value.length < 6) {
        inputType.style.border = '2px solid red';
        validationError.innerHTML = "<h5>Your " + inputType.name + " must be at least 6 characters long.</h5>";
        return false;
    } else if (value !== "" && value > 5) {
        inputType.style.border = '1px solid #6b6a69';
        validationError.innerHTML = "<h5></h5>";
        return true;
    }
}

function validateEmptyInputs(input1, input2) {
    const validationError = document.querySelector('.validation-error');
    if (input1.value === "" && input2.value === "") {
        input1.style.border = '2px solid red';
        input2.style.border = '2px solid red';
        validationError.innerHTML = "<h5>You can not have blank inputs.</h5>";
        return false;
    } else {
        input1.style.border = '1px solid #6b6a69';
        input2.style.border = '1px solid #6b6a69';
        validationError.innerHTML = "<h5></h5>";
        return true;
    }
}