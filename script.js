document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Here, you can send this data to the server for authentication
    // For demonstration purposes, let's assume valid credentials are "admin" and "password"
    if (username === "arunkumar" && password === "arunvarun") {
      // If credentials are correct, redirect to a new page or perform some other action
    

      window.location.href = "login.html"; // Redirect to dashboard
    } else {
      // If credentials are incorrect, show an error message
      document.getElementById("error-message").innerText = "Invalid username or password";
    }
  });
  