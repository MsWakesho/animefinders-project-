// File: script.js

// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // Code to run after the DOM is fully loaded
    var welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.textContent = 'Hello, DOM is ready!';
});

// Click event listener
var myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {
    // Code to run when the button is clicked
    alert('Button clicked!');
});

// Change event listener
var usernameInput = document.getElementById('username');
var validationMessage = document.getElementById('validationMessage');

usernameInput.addEventListener('change', function() {
    // Code to run when the input value changes
    var username = usernameInput.value;

    if (username.length < 5) {
        validationMessage.textContent = 'Username must be at least 5 characters long.';
    } else {
        validationMessage.textContent = '';
    }
});
