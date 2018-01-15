
window.onload = function() {
    const submitBtn = document.getElementsByTagName('button')[0];
    submitBtn.addEventListener('click', (event) => {
    	event.preventDefault();
        
        const usernameInput = document.getElementsByTagName('input')[0];
        const passwordInput = document.getElementsByTagName('input')[1];

        login(usernameInput.value, passwordInput.value)
            .then(response => {
            	if(response.authenticated === true) {
                	document.cookie = 'accessCookie=' + response.accessToken;
                	document.location.href = "http://localhost:8080/pages/home.html";
            	}
            })
    })
}
