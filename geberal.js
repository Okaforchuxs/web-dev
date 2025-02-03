function register() {
    let username = document.getElementById("newUsername").value;
    let password = document.getElementById("newPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (username === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration successful! You can now log in.");
    window.location.href = "login.html"; 
}


function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "Design.html"; 
    } else {
        alert("Invalid username or password!");
    }
}