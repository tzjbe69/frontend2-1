
$(document).ready(function(){

	//call the registration process
	const submitBtn = document.getElementById('submit');
	const usernameInput = document.getElementById('username');
	const passwordInput = document.getElementById('userpassword');
	const passwordInput_2 = document.getElementById('confirm-password');
	const registerNotif = document.querySelector('.register-notification');

	submitBtn.addEventListener('click', (event) => {
		event.preventDefault();
		const usernameValue = usernameInput.value;
		const passwordValue = passwordInput.value;
		const passwordValue_2 = passwordInput_2.value;


		// Validate the inputs

		if (validateEmptyInputs(usernameInput, passwordInput, passwordInput_2) 
			&& validateInput(usernameInput)
			&& validateForSymbols(usernameInput) 
			&& validateInput(passwordInput)) {
			if(validatePasswords(passwordInput, passwordInput_2) && validateSimilarity(usernameInput, passwordInput)) {
				register(usernameValue, passwordValue); // If validations are passed, register the user
			}
		}
	});

	function register(userValue, passValue){ // function to register the user
		const userModel = new User(); // create a user instance using the values gathered from the inputs
		userModel.username = userValue;
		userModel.password = passValue;
		console.log(userModel)
		registerNotif.innerHTML = "<h4>You are successfuly registered " + userValue + 
		"-meister. You will now be redirect to the Home Page.</h4>";
		registerNotif.style.backgroundColor = "#07b001";
		userModel.registerUser(); // use the "registerUser()" method on the instance created
		setTimeout(() => {document.location.href = "home.html"}, 4000);
	}
});

function validateForSymbols(input) { // Validation function to check for symbols in the input
	const registerNotif = document.querySelector('.register-notification');
	if (/^[a-zA-Z0-9]*$/.test(input.value) === false) { // RegExp to check if value contains non-alphanumeric characters
		input.style.border = '2px solid red';
        registerNotif.innerHTML = "<h4>Your username must only contain alphanumeric characters.</h4>";
        registerNotif.style.backgroundColor = "#ba1a14"
        return false;	
		} else {
		input.style.border = '1px solid #ccc';
    	registerNotif.innerHTML = "<h4></h4>"
    	return true;
		}
}

function validateInput(inputType) { // Validation function on a single input
	const registerNotif = document.querySelector('.register-notification');
    if (inputType.value.length < 6) { // Fail the validation if the length of the value is less than 6 characters
        inputType.style.border = '2px solid red';
        registerNotif.innerHTML = "<h4>Your " + inputType.name + " must be at least 6 characters long.</h4>";
        registerNotif.style.backgroundColor = "#ba1a14"
        return false;
    } else if (inputType.value.length > 14){ // Fail the validation if the length of the value is more than 14 characters
        inputType.style.border = '2px solid red';
        registerNotif.innerHTML = "<h4>Your " + inputType.name + " is too long (must be less than 14 characters).</h4>";
        registerNotif.style.backgroundColor = "#ba1a14"
        return false;
    }
    else {
    	inputType.style.border = '1px solid #ccc'; // Pass the validation if the above requirements are passed
    	registerNotif.innerHTML = "<h4></h4>"
    	return true;
    }
}

function validateEmptyInputs(input1, input2, input3) { // Validation function for empty inputs (NEEDS ENHANCING)
	const registerNotif = document.querySelector('.register-notification');
    if (input1.value === "" && input2.value === "" && input3.value === "") { // Fail the validation if both inputs are empty
        input1.style.border = '2px solid red';
        input2.style.border = '2px solid red';
        input3.style.border = '2px solid red';
        registerNotif.innerHTML = "<h4>You can not have blank inputs.</h4>";
        registerNotif.style.backgroundColor = "#ba1a14"
        return false;
    } else if (input1.value === "") { // Fail the validation if the first input is empty
        input1.style.border = '2px solid red';
        input2.style.border = '1px solid #ccc';
        registerNotif.innerHTML = "<h4>You can not have blank inputs.</h4>";
        registerNotif.style.backgroundColor = "#ba1a14"
        return false;
    } else if (input2.value === "") { // Fail the validation if the second input are empty
        input2.style.border = '2px solid red';
        input1.style.border = '1px solid #ccc';
        registerNotif.innerHTML = "<h4>You can not have blank inputs.</h4>";
        registerNotif.style.backgroundColor = "#ba1a14"
        return false;
    } else if (input3.value === "") { // Fail the validation if the third input are empty
    	input3.style.border = '2px solid red';
        input2.style.border = '1px solid #ccc';
        input1.style.border = '1px solid #ccc';
        registerNotif.innerHTML = "<h4>You can not have blank inputs.</h4>";
        registerNotif.style.backgroundColor = "#ba1a14"
        return false;
    } 
    else { // Pass the validation if both inputs have characters in them
    	input1.style.border = '1px solid #ccc';
        input2.style.border = '1px solid #ccc';
        input3.style.border = '1px solid #ccc';
        registerNotif.innerHTML = "<h4></h4>";
        return true;
    }
}

function validatePasswords(pass1, pass2) { // Validation of the password inputs
	const registerNotif = document.querySelector('.register-notification');
	if (pass1.value !== pass2.value) { // Fail validation if the passwords do not match
		pass1.style.border = '2px solid red';
		pass2.style.border = '2px solid red';
		registerNotif.innerHTML = "<h4>Your passwords must match</h4>";
		return false;
	}
	else {
		pass1.style.border = '1px solid #ccc';
		pass2.style.border = '1px solid #ccc';
    	registerNotif.innerHTML = "<h4></h4>"
    	return true;
	} // Password confirmation validation function
}

function validateSimilarity (username, password) { // Validation of username and password similarity
	const registerNotif = document.querySelector('.register-notification');
	if (username.value === password.value) { // Fail the validation if the username and password are the same
		username.style.border = '2px solid red';
		password.style.border = '2px solid red';
		registerNotif.innerHTML = "<h4>Your username and password must not be identical.</h4>";
		return false;
	}
	else {
		username.style.border = '1px solid #ccc';
		password.style.border = '1px solid #ccc';
		registerNotif.innerHTML = "<h4></h4>"
		return true;
	}
}