document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".submit-btn"); 
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");

    loginButton.addEventListener("click", function (event) {
        event.preventDefault(); 

        const email = emailField.value.trim();
        const password = passwordField.value.trim();

        
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            emailField.focus();
            return;
        }

        if (password === "" ) {
            alert("Please enter your password.");
            passwordField.focus();
            return;
        }

        // If validation passes, show success message
        alert("Login Successful!");
        document.querySelector("form").submit(); // Submits the form
    });
});
