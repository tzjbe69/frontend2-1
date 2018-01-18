
window.onload = function() {
    const submitBtn = document.getElementsByTagName('button')[0];
    submitBtn.addEventListener('click', (event) => {
    	event.preventDefault();
        let userLogin = new User();
        userLogin.username = document.getElementsByTagName('input')[0].value;
        userLogin.password = document.getElementsByTagName('input')[1].value;

        userLogin.login()
            .then(response => {
            	if(response.authenticated === true) {
                	document.cookie = 'accessCookie=' + response.accessToken;
                	document.location.href = "home.html";
            	}
            })
    })

}
