document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector("form");
    const fullNameField = document.getElementById("fullname");
    const phoneField = document.getElementById("phno");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const fullName = fullNameField.value.trim();
        const phone = phoneField.value.trim();
        const email = emailField.value.trim();
        const password = passwordField.value.trim();

    
        const namePattern = /^[a-zA-Z\s]+$/; 
        const phonePattern = /^[6-9]\d{9}$/; 
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordPattern = /^.{6,}$/; 

        if (!namePattern.test(fullName)) {
            alert("Please enter a valid full name.");
            fullNameField.focus();
            return;
        }

        if (!phonePattern.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            phoneField.focus();
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            emailField.focus();
            return;
        }

        if (!passwordPattern.test(password)) {
            alert("Password must be at least 6 characters long.");
            passwordField.focus();
            return;
        }

        // If validation passes, show success message
        alert("Signup Successful!");
        signupForm.submit(); // Submit the form
    });
});
