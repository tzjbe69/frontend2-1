$(document).ready(function(){

	//call the registration process
	document.getElementById("submit").onclick = register;
	function register(){
		var userModel = new User();
		userModel.username = document.getElementById('username').value;
		userModel.password = document.getElementById('userpassword').value;
		console.log(userModel)
		userModel.registerUser();
	}
})