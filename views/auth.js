$(document).ready(function(){

	//call the registration process
	document.getElementById("submit").onclick = register;
	function register(){
		var userModel = new User();
		
		userModel.registerUser();
	}
})