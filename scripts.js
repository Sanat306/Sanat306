function handleLogin(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
    var spinner = document.getElementById('spinner');

    // Show spinner
    spinner.style.display = 'block';

    // Simulate a delay for login process
    setTimeout(function() {
        if (username === 'Mobile Computing' && password === 'cse410') {
            window.location.href = 'home.html';
        } else {
            spinner.style.display = 'none';
            errorMessage.textContent = 'Invalid username or password.';
            errorMessage.style.display = 'block';
        }
    }, 5000); // 5-second delay to simulate loading
}

// Add event listener to the login form
document.getElementById('loginForm').addEventListener('submit', handleLogin);
