$(document).ready(function(){

	//call the registration process
	const submitBtn = document.getElementById('submit');
	const usernameInput = document.getElementById('username');
	const passwordInput = document.getElementById('userpassword');
	const passwordInput_2 = document.getElementById('confirm-password');

	submitBtn.addEventListener('click', (event) => {
		event.preventDefault();
		const usernameValue = usernameInput.value;
		const passwordValue = passwordInput.value;
		const passwordValue_2 = passwordInput_2.value;


		// Validate the inputs
		if (validateEmptyInputs(usernameInput, passwordInput) && validateInput(usernameValue, usernameInput) && validateInput(passwordValue, passwordInput)) {
			register(usernameValue, passwordValue); // If validation are passed, register the user
		}
		else {
			console.log(false); // else, an error will be displayed (WIP)
		}
	});

	function register(userValue, passValue){ // function to register the user
		const userModel = new User(); // create user instance using the values gathered from the inputs
		userModel.username = userValue;
		userModel.password = passValue;
		console.log(userModel)
		userModel.registerUser(); // use the "registerUser()" method on the instance created
	}
})

// Username symbol validation function(WIP)

function validateInput(value, inputType) { // Validation function on a single input
    const validationError = document.querySelector('.validation-error');
    if (value.length < 6) { // Fail the validation if the length of the value is less than 6 characters
        inputType.style.border = '2px solid red';
        validationError.innerHTML = "<h4>Your " + inputType.name + " must be at least 6 characters long.</h4>";
        return false;
    } else if (value.length > 14){ // Fail the validation if the length of the value is more than 14 characters
        inputType.style.border = '2px solid red';
        validationError.innerHTML = "<h4>Your " + inputType.name + " is too long (must be less than 14 characters).</h4>";
        return false;
    }
    else {
    	inputType.style.border = '1px solid #6b6a69'; // Pass the validation if the above requirements are passed
    	validationError.innerHTML = "<h4></h4>"
    	return true;
    }
}

function validateEmptyInputs(input1, input2) { // Validation function for empty inputs
    const validationError = document.querySelector('.validation-error');
    if (input1.value === "" && input2.value === "") { // Fail the validation if both inputs are empty
        input1.style.border = '2px solid red';
        input2.style.border = '2px solid red';
        validationError.innerHTML = "<h4>You can not have blank inputs.</h4>";
        return false;
    } else if (input1.value === "") { // Fail the validation if the first input is empty
        input1.style.border = '2px solid red';
        input2.style.border = '1px solid #6b6a69';
        validationError.innerHTML = "<h4>You can not have blank inputs.</h4>";
        return false;
    } else if (input2.value === "") { // Fail the validation if the second input are empty
        input2.style.border = '2px solid red';
        input1.style.border = '1px solid #6b6a69';
        validationError.innerHTML = "<h4>You can not have blank inputs.</h4>";
        return false;
    }
    else { // Pass the validation if both inputs have characters in them
    	input1.style.border = '1px solid #6b6a69';
        input2.style.border = '1px solid #6b6a69';
        validationError.innerHTML = "<h4></h4>";
        return true;
    }
}

// Password confirmation validation function(WIP)